# template-jslib-rollup
template-jslib-rollup

## Q&A
- Q1: 如何打包同时生成压缩和未压缩的代码？
~~~
output: [
  { file: "lib.js", format: "cjs" },
  { file: "lib.min.js", format: "cjs", plugins: [uglify() },
  { file: "lib.esm.js", format: "esm" },
]
~~~
- Q2: 如何打包不删除特定注释？
~~~
A1、参考rollup.config.js
添加公共banner：
  const banner = `/*!
  * ${name} v${version}
  * (c) ${new Date().getFullYear()} ${author}
  * @license MIT
  */
  
  output: [
    {
      banner,
      file: `dist/${name}.amd.js`,
      format: 'amd', // 浏览器
      name
    },
  ]
A2、
保留特定注视，例如
/*!
 * @author xxx
 */
  output:[
    {
      file: `dist/${name}.iife.min.js`,
      format: 'iife', // 浏览器
      name,
      plugins: [uglify({
        output:{
          comments: function (node, comment){
            //以!开头部分的注视进行保留
            return /^!/.test(comment.value)
          }
        }
      })]
    },
  ]
  
A3: 指定文件拼接注释
output:[
  {
    file: `dist/${name}.umd.min.js`,
    format: 'umd', // UMD format requires a bundle name 浏览器和 Node.js
    name,
    plugins: [uglify({
      output:{
        preamble: '/** \r\r 版本所有 \r\n 填写日期 \r\n 填写作者信息 */'
      }
    })]
  }
]
~~~


## reference
- [rollup awesome](https://github.com/rollup/awesome)

import { defineConfig } from 'vite'
import { babel } from  '@rollup/plugin-babel'
const { createVuePlugin } = require('vite-plugin-vue2');



export default defineConfig({
  plugins: [
	  // babel({
   //    exclude: '**/node_modules/**',
   //    babelHelpers: 'runtime',
   //    presets: [
   //    		'@vue/app',
   //      	['@babel/preset-env', {
   //        	'modules': false,
   //        	loose: false,
	  //         'targets': {
	  //           'browsers': ["> 1%", "last 2 versions", "not ie <= 8"]
	  //         }
   //      	}]
   //    ],
   //    plugins: [
   //      ['@babel/plugin-transform-runtime', {
   //        corejs: 3
   //      }]
   //    ],
   //    comments: true
   //  }),
   	createVuePlugin({
	    jsx: true
	  })
  ]
})

import nodeResolve from '@rollup/plugin-node-resolve'

const config = [
  {
    input: [
      './node_modules/ackbar-snackbar/dist/index.js'
    ],
    output: {
      file: './build/js/ackbar-snackbar-bundle.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      nodeResolve({
        mainFields: ['module', 'main', 'browser', 'jsnext'],
        preferBuiltins: false
      }),
    ],
  }
];

export default () => {
  return config;
}

import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({
        // include: ["src"],
        // exclude: ["test/index.tsx"],
      })
    ],
    external: ['react', 'react-dom', 'rxjs', 'image-js']
  }
]

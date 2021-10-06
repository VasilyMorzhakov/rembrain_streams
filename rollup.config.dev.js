import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
    {
        input: 'test/index.tsx',
        output: [
        {
            file: "serve/index.js",
            format: 'iife',
            exports: 'named',
            sourcemap: true,
            strict: false,
        },
        // {
        //     file: "serve/index.min.js",
        //     format: 'iife',
        //     plugins: [terser()],
        // },
        ],
        plugins: [
            nodeResolve({browser: true}),
            sass({ insert: true }),
            typescript({
                // include: ["src", "test"],
                check: false, // type checking breaks watch functionality
            }),
            commonjs(),
            babel(),
            copy({targets: [{src: 'test/index.html', dest: 'serve'},]}),
            replace({'process.env.NODE_ENV': "'development'"}),
            json(),
        ],
    },
]
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
        input: 'src/standalone.tsx',
        output: [
        {
            file: "dist-standalone/web-operator.js",
            format: 'iife',
            name: "rembrainWebOperator",
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
                // include: ["src"],
            }),
            commonjs(),
            babel(),
            replace({'process.env.NODE_ENV': "'production'"}),
            json(),
        ],
    },
]
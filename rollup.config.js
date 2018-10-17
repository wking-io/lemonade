/* eslint sort-keys: 0 */
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const presets = [['@babel/env']];

export default [
  {
    external: Object.keys(pkg.dependencies),
    input: 'src/index.js',
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'lemonade',
      globals: pkg.dependencies,
    },
    plugins: [
      includePaths({
        paths: ['src'],
      }),
      babel({
        externalHelpers: true,
        plugins: ['@babel/external-helpers'],
        exclude: 'node_modules/**',
        babelrc: false,
        presets,
      }),
      uglify(),
    ],
  },
  {
    external: Object.keys(pkg.dependencies),
    input: 'src/index.esm.js',
    output: {
      file: pkg.module,
      format: 'es',
    },
    plugins: [
      includePaths({
        paths: ['src'],
      }),
      babel({
        externalHelpers: true,
        plugins: ['@babel/external-helpers'],
        exclude: 'node_modules/**',
        babelrc: false,
        presets,
      }),
      terser(),
    ],
  },
];

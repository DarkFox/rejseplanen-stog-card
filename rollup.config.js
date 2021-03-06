import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
  input: ['src/rejseplanen-stog-card.js'],
  output: {
    dir: './dist',
    format: 'iife',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()]
};

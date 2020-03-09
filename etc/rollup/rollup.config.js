import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import external from 'rollup-plugin-peer-deps-external';

export default {
    input: ['./src/common/button/button.component.tsx'],
    output: {
        format: 'es',
        dir: 'lib'
    },
    external: ['react'],
    plugins: [
        multiInput({ relative: 'src/' }),
        terser({
            output: {
                comments: ''
            }
        }),
        external(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: '**/__tests__/**',
            clean: true
        }),
        commonjs({
            include: 'node_modules/**'
        })
    ]
};

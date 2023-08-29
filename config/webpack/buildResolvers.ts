import type webpack from 'webpack';
import type { buildOptions } from './types/config';

export function buildResolvers(options: buildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {}
    };
}

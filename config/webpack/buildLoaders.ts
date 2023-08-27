import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    return [typeScriptLoader, cssLoader];
}

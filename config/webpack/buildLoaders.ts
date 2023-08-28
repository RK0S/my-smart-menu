import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(isDev);

    const imgLoader = {
        test: /\.(jpe?g|png|webp|gif)$/i,
        type: 'asset/resource'
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    return [typeScriptLoader, cssLoader, imgLoader, svgLoader];
}

import type webpack from 'webpack';
import type { buildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(isDev);

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    const imgLoader = {
        test: /\.(jpe?g|png|webp|gif)$/i,
        type: 'asset/resource'
    };

    const svgLoader = buildSvgLoader();

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    return [babelLoader, typeScriptLoader, cssLoader, imgLoader, svgLoader];
}

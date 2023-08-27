import { buildMode, buildPaths } from './config/webpack/types/config';
import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { buildEnv } from './config/webpack/types/config';

export default (env: buildEnv) => {
    const paths: buildPaths = {
        build: path.resolve('build'),
        entry: path.resolve('src', 'index.tsx'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve('src')
    };

    const mode: buildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        isDev,
        mode,
        paths,
        port: PORT
    });

    return config;
};

import path from 'path';
import type webpack from 'webpack';
import type { buildMode, buildPaths, buildEnv } from './config/webpack/types/config';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

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
    const analyze = env.analyze || false;

    const config: webpack.Configuration = buildWebpackConfig({
        isDev,
        mode,
        paths,
        port: PORT,
        analyze
    });

    return config;
};

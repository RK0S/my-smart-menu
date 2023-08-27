
export type buildMode = 'development' | 'production';

export interface buildPaths {
    entry: string;
    build: string;
    html: string;
    env: string;
}

export interface buildEnv {
    mode: buildMode;
    port: number;
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
    port: number;
}
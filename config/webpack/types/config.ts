export type buildMode = 'development' | 'production';

export interface buildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface buildEnv {
    mode: buildMode;
    port: number;
    analyze: boolean;
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
    port: number;
    analyze: boolean;
}

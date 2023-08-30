/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildPaths } from '../webpack/types/config';
import { buildCssLoader } from '../webpack/loaders/buildCssLoader';
import { buildSvgLoader } from '../webpack/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: buildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // @ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push(buildSvgLoader());

    config.module?.rules?.push(buildCssLoader(true));

    return config;
};

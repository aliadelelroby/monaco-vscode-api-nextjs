import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

export default {
    entry: {
        editor: './node_modules/@codingame/monaco-vscode-api/workers/editor.worker.js',
        extensionHost:
            './node_modules/@codingame/monaco-vscode-api/workers/extensionHost.worker.js',
        textmate:
            './node_modules/@codingame/monaco-vscode-textmate-service-override/worker.js',
        outputLinkDetection:
            './node_modules/@codingame/monaco-vscode-output-service-override/worker.js',
        languageDetection:
            './node_modules/@codingame/monaco-vscode-language-detection-worker-service-override/worker.js',
        notebook:
            './node_modules/@codingame/monaco-vscode-notebook-service-override/worker.js',
        localFileSearch:
            './node_modules/@codingame/monaco-vscode-search-service-override/worker.js',
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, './public/workers'),
        chunkLoading: false,
        publicPath: '/workers/',
    },
    resolve: {
        fallback: {
            util: require.resolve('util/'),
            fs: false,
            path: false,
            os: false,
            crypto: false,
            stream: false,
            buffer: require.resolve('buffer/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    mode: 'production',
    performance: {
        hints: false,
    },
    optimization: {
        minimize: false,
    },
    experiments: {
        topLevelAwait: true,
    },
};

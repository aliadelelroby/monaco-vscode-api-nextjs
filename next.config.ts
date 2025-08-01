import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "http://localhost:3000",
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
        {
          key: "Cross-Origin-Embedder-Policy",
          value: "require-corp",
        },
        {
          key: "Cross-Origin-Resource-Policy",
          value: "cross-origin",
        },
      ],
    },
  ],
  webpack: (config, { isServer }) => {
    config.performance = {
      ...config.performance,
      maxAssetSize: 500000,
      maxEntrypointSize: 500000,
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        events: false,
        assert: false,
        constants: false,
        domain: false,
        punycode: false,
        querystring: false,
        string_decoder: false,
        sys: false,
        timers: false,
        tty: false,
        url: false,
        vm: false,
        zlib: false,
        http: false,
        https: false,
        net: false,
        tls: false,
        child_process: false,
        cluster: false,
        dgram: false,
        dns: false,
        module: false,
        readline: false,
        repl: false,
        v8: false,
        worker_threads: false,
      };
    }

    return config;
  },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

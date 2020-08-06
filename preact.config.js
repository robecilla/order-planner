const { parsed } = require("dotenv-safe").config();

export default {
  webpack(config, env, helpers, options) {
    const { plugin } = helpers.getPluginsByName(config, "DefinePlugin")[0];
    Object.assign(
      plugin.definitions,
      Object.keys(parsed).reduce(
        (env, key) => ({
          ...env,
          [`process.env.${key}`]: JSON.stringify(parsed[key]),
        }),
        {}
      )
    );

    Object.assign(config.resolve.alias, {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    });
  },
};

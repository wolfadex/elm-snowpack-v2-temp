const compileToString = require("node-elm-compiler").compileToString;

module.exports = function plugin(snowpackConfig, pluginOptions) {
  return {
    // defaultBuildScript: "build:elm",
    async transform({ urlPath, isDev }) {
      if (!urlPath.endsWith(".elm")) {
        console.log("not elm?", urlPath);
        return;
      }
      console.log("Elm transform", urlPath, isDev);

      const compiledElmCode = await compileToString(
        pluginOptions.entryFiles || ["src/Main.elm"],
        {
          optimize: !isDev,
          debug: isDev,
          output: "public/elm.js",
          ...pluginOptions.elmOptions,
        },
      );
      // compiledElmCode = compiledElmCode
      //   .toString()
      //   .replace("(function(scope", "function init(scope")
      //   .replace("}(this)", ");}");

      // compiledElmCode += "const scope = {};init(scope);const def = scope.Elm";
      // compiledElmCode += "export default def;";

      return {
        result: compiledElmCode.toString(),
      };
    },
  };
};

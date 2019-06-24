/opt/git/wdp-ui-coral/node_modules/@wdpui/react-scripts/config/paths.js

line 107

  appSrc: resolveApp('src'),
  appSrcBochen: [resolveApp('src'), path.join(resolveApp('.'), '../lender-assist/src') ],


/opt/git/wdp-ui-coral/node_modules/@wdpui/react-scripts/config/webpack.config.js

line 348
  {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrcBochen,
              loader: require.resolve('babel-loader'),



/opt/git/wdp-ui-coral/node_modules/@wdpui/react-scripts/scripts/start.js


line 94

 const config = configFactory('development');
 printFile('bochen', config)

```js



/* eslint-disable */
function printFile(fileName, value) {
  const path = require('path');
  const fs = require('fs');
  const util = require('util');
  // issue: JSON.stringify(/\.css/) print an empty object
  // https://stackoverflow.com/a/12075970
  // because there's no canonical representation for a RegExp object in JSON. Thus, it's just an empty object.


  // solution 1: use util.inspect
  //const result=util.inspect(config, { showHidden: false, depth: null });

  // solution 2: 
  RegExp.prototype.toJSON = RegExp.prototype.toString;
  value.plugins.forEach(p => {
      p.__type = p.constructor.name;
  });
  fs.writeFile(path.join(__dirname, fileName), JSON.stringify(value), function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("The file " + fileName + "  has been saved!");
  });
}
/* eslint-enable  */
```
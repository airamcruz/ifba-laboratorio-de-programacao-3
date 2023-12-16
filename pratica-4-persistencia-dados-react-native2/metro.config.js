const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const paths = {
    app: `${__dirname}/src/app`,
    cp: `${__dirname}/src/cp`,
    entities: `${__dirname}/src/entities`,
    hooks: `${__dirname}/src/hooks`,
    types: `${__dirname}/src/@types`,
    repository: `${__dirname}/src/repository`,
    navigation: `${__dirname}/src/navigation`,
    screens: `${__dirname}/src/screens`,
    services: `${__dirname}/src/services`,
    states: `${__dirname}/src/states`,
    stored: `${__dirname}/src/stored`,
  }
// Adds support for `.db` files for SQLite databases
defaultConfig.resolver.assetExts.push('db');
defaultConfig.resolver.extraNodeModules = paths;

module.exports = defaultConfig;
# Neutrino Standard JS Preset

`neutrino-preset-standard` is a Neutrino preset that supports linting JavaScript projects with Standard's base ESLint
config, following the [JavaScript Standard Style](http://standardjs.com/).

## Documentation
This is a clone of the [Neutrino Airbnb Preset](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/). Their documentation should still apply.

Install this package as a dev dependency.

```
yarn add --dev neutrino-preset-standard
```

In your `package.json` you should add this package to your presets.

```json
{
  "neutrino": {
    "use": [
      "neutrino-preset-standard"
    ]
  },
  "scripts": {
    "start": "neutrino start",
    "build": "neutrino build"
  }
}
```

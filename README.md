# parcel-transformer-ts-css-modules
_Bridge ts with your css-modules_

This transformer is going to create `.d.ts` according to your `.module.css` files using [typed-css-modules](https://www.npmjs.com/package/typed-css-modules)
,
so that you can reference your css in ts files without type errors.

## Installation
`npm i -D parcel-transformer-ts-css-modules`  
or  
`yarn add -D parcel-transformer-ts-css-modules`

At the root of your project, next to your `package.json`, add a `.parcelrc` file and paste the following code:
```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.module.css": [
      "parcel-transformer-ts-css-modules",
      "..."
    ]
  }
}
```

## Configuration
If you want to configure underlying ts-css-modules library, create `./tcm.config.json` file and configure it as it is described in [here](https://www.npmjs.com/package/typed-css-modules#user-content-new-dtscreatoroption).  
For instance like this:
```json
{
  "camelCase": true
}
```

## Example
What it does in practice you can see in this example [here](https://github.dev/dmitrijs-balcers/react-css-modules-typescript-boilerplate/tree/master/src/components).

## Contribution
This library is open source and depends on your input. Feel free to suggest improvements and/or contribute!

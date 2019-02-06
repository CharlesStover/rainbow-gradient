# Rainbow Gradient [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Use%20rainbow-gradient%20to%20easily%20generate%20an%20array%20of%20smoothly-transitioned%20RGB%20values%20for%20any%20length,%20saturation,%20or%20lightness.&url=https://github.com/CharlesStover/rainbow-gradient&via=CharlesStover&hashtags=javascript,programming,webdev,webdeveloper,webdevelopment)

Generates a gradient of the colors of the rainbow.

[![version](https://img.shields.io/npm/v/rainbow-gradient.svg)](https://www.npmjs.com/package/rainbow-gradient)
[![minified size](https://img.shields.io/bundlephobia/min/rainbow-gradient.svg)](https://www.npmjs.com/package/rainbow-gradient)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/rainbow-gradient.svg)](https://www.npmjs.com/package/rainbow-gradient)
[![downloads](https://img.shields.io/npm/dt/rainbow-gradient.svg)](https://www.npmjs.com/package/rainbow-gradient)
[![build](https://travis-ci.com/CharlesStover/rainbow-gradient.svg)](https://travis-ci.com/CharlesStover/rainbow-gradient/)

## Install

* `npm install rainbow-gradient --save` or
* `yarn add rainbow-gradient`

## Use

```JS
import rainbowGradient from 'rainbow-gradient';

// Creates an array with three colors:
rainbowGradient(3);

// Creates an array with 10 colors, darkened and washed out:
rainbowGradient(10, 0.5, 0.25);
```

## Parameters

* length

  The number of colors in the resulting gradient array.

* saturation

  The saturation of the colors. `0` represents grayscale. `1` represents full color. Default: `1`.

* lightness

  The lightness of the colors. `0` represents black. `1` represents white. Default: `0.5`.

## Return Value

The function returns an array of colors based on the parameters. Each color is an array of red, green, and blue values from 0 to 255.

Example:

`rainbowGradient(3)` returns:

```JS
[
  [ 255, 0, 0 ],
  [ 0, 255, 0 ],
  [ 0, 0, 255 ]
]
```

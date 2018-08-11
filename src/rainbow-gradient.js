import hsl2rgb from '@charlesstover/hsl2rgb';

const rainbowGradient = (len, saturation = 1, lightness = 0.5) => {
  const gradient = [];
  for (let x = 0; x < len; x++) {
    gradient.push(
      hsl2rgb(
        x / len,
        saturation,
        lightness
      )
        .map(c => Math.round(c * 255))
    );
  }
  return gradient;
};

rainbowGradient.default = rainbowGradient;

module.exports = rainbowGradient;

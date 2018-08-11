const rainbowGradient = require('../index');

describe('rainbow-gradient', () => {
  it('should return the correct array size', () => {
    for (let x = 0; x < 100; x++) {
      const len = rainbowGradient(x).length;
      if (len !== x) {
        throw new Error('Incorrect result size. Received ' + len + ', expected: ' + x);
      }
    }
  });

  it('should saturate', () => {
    const gray = rainbowGradient(1, 0, 0.5)[0];
    if (
      gray[0] !== 128 ||
      gray[1] !== 128 ||
      gray[2] !== 128
    ) {
      throw new Error('Expected gray, received ' + gray.join(', '));
    }
  });

  it('should darken', () => {
    const black = rainbowGradient(1, 1, 0)[0];
    if (
      black[0] !== 0 ||
      black[1] !== 0 ||
      black[2] !== 0
    ) {
      throw new Error('Expected black, received ' + black.join(', '));
    }
  });

  it('should lighten', () => {
    const white = rainbowGradient(1, 1, 1)[0];
    if (
      white[0] !== 255 ||
      white[1] !== 255 ||
      white[2] !== 255
    ) {
      throw new Error('Expected white, received ' + white.join(', '));
    }
  });
});

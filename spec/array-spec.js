var flatten = window.flatten;
var _ = window._;
window.mocha.setup('bdd');

describe('window.flatten()', function () {
  describe('when passed a one dimension array', function () {
    it('will return the same array', function () {
      var array = [1, 2, 3];

      expect(flatten(array)).to.eql([1, 2, 3]);
    });
  });

  describe('when passed a two dimension array', function () {
    it('will return a one dimension array', function () {
      var array = [1, [2, 3], 4];

      expect(flatten(array)).to.eql([1, 2, 3, 4]);
    });
  });

  describe('when passed a n dimension array', function () {
    it('will return a one dimension array', function () {
      var array = _.times(5, function (num) {
        return generateNLevelArray(_.random(1, 5), num);
      });

      expect(flatten(array)).to.eql([1, 2, 3, 4, 5]);
    });
  });
});

// private ==============================

function generateNLevelArray(levels, value) {
  if (levels > 0) {
    return generateNLevelArray(levels - 1, [value]);
  } else {
    return value;
  }
}


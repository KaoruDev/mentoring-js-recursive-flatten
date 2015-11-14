var flatten = window.flatten;
mocha.setup('bdd');

describe('flatten', function () {
  describe('one dimension array', function () {
    it('will return the same array', function () {
      var array = [1, 2, 3];

      expect(flatten(array)).to.eql([1, 2, 3]);
    });
  });
});

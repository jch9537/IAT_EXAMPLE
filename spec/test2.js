(function() {
  'use strict';

  var checkForNativeMethods = function(runUnderbarFunction) {
    it('should not use the native version of any underbar methods in its implementation', function() {
      // These spies are set up in testSupport.js
      runUnderbarFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
    });
  };

  describe('UNDERBAR PART.1', function() {

    describe('each', function() {
      checkForNativeMethods(function() {
        _.each([1, 2, 3, 4], function(number) {});
      });

      it('should be a function', function() {
        expect(_.each).to.be.an.instanceOf(Function);
      });

      it('should not return anything', function() {
        var returnValue = _.each([], function() {});
        expect(returnValue).to.not.exist;
      });

      it('should not mutate the input array', function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.each(input, function(item) { /* noop */ });

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it(' should iterate over arrays and provide access to each value', function() {
        var letters = ['a', 'b', 'c'];
        var iterations = [];

        _.each(letters, function(letter) {
          iterations.push(letter);
        });

        expect(iterations).to.eql(['a', 'b', 'c']);
      });

      it('should iterate over arrays and provide access to each index', function() {
        var letters = ['a', 'b', 'c'];
        var iterations = [];

        _.each(letters, function(letter, index) {
          iterations.push([letter, index]);
        });

        expect(iterations).to.eql([
          ['a', 0],
          ['b', 1],
          ['c', 2]
        ]);
      });

      it('should iterate over arrays and provide access to the original collection', function() {
        var letters = ['a', 'b', 'c'];
        var iterations = [];

        _.each(letters, function(letter, index, collection) {
          iterations.push([letter, index, collection]);
        });

        expect(iterations).to.eql([
          ['a', 0, letters],
          ['b', 1, letters],
          ['c', 2, letters]
        ]);
      });

      it('should only iterate over numeric keys of an array, not all properties', function() {
        var iterations = [];
        var letters = ['a', 'b', 'c'];
        letters.someProperty = 'Do not iterate over me!';

        _.each(letters, function(letter, index, collection) {
          iterations.push(letter);
        });

        expect(iterations).to.not.include('Do not iterate over me!');
      });

      it('should iterate over objects and provide access to each value', function() {
        var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
        var iterations = [];

        _.each(letters, function(value) {
          iterations.push(value);
        });

        expect(iterations).to.eql(['dog', 'elephant', 'flotsam']);
      });

      it('should iterate over objects and provide access to each key', function() {
        var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
        var iterations = [];

        _.each(letters, function(value, property) {
          iterations.push([value, property]);
        });

        expect(iterations).to.eql([
          ['dog', 'd'],
          ['elephant', 'e'],
          ['flotsam', 'f']
        ]);
      });

      it('should iterate over objects and provide access to the original object', function() {
        var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
        var iterations = [];

        _.each(letters, function(value, property, object) {
          iterations.push([value, property, object]);
        });

        expect(iterations).to.eql([
          ['dog', 'd', letters],
          ['elephant', 'e', letters],
          ['flotsam', 'f', letters]
        ]);
      });

      it('should not confuse an object with a `length` property for an array', function() {
        var dresser = { length: 39, width: 79, height: 127};
        var iterations = [];

        _.each(dresser, function(value, property, object) {
          iterations.push([value, property, object]);
        });

        expect(iterations).to.eql([
          [39, 'length', dresser],
          [79, 'width', dresser],
          [127, 'height', dresser]
        ]);
      });

    });

    describe('reject', function() {
      checkForNativeMethods(function() {
        var isEven = function(num) { return num % 2 === 0; };
        _.reject([1, 2, 3, 4, 5, 6], isEven);
      });

      it('should reject all even numbers', function() {
        var isEven = function(num) { return num % 2 === 0; };
        var odds = _.reject([1, 2, 3, 4, 5, 6], isEven);

        expect(odds).to.eql([1, 3, 5]);
      });

      it('should reject all odd numbers', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);

        expect(evens).to.eql([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.reject(numbers, isOdd);

        expect(evens).to.not.equal(numbers);
      });
    });

    describe('map', function() {
      checkForNativeMethods(function() {
        _.map([1, 2, 3, 4], function(num) {
          return num * 2;
        });
      });

      it('should not mutate the input array', function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.map(input, function(num) { /* noop */ });

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it('should apply a function to every value in an array', function() {
        var doubledNumbers = _.map([1, 2, 3], function(num) {
          return num * 2;
        });

        expect(doubledNumbers).to.eql([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var numbers = [1, 2, 3];
        var mappedNumbers = _.map(numbers, function(num) {
          return num;
        });

        expect(mappedNumbers).to.not.equal(numbers);
      });
    });

    describe('pluck', function() {
      checkForNativeMethods(function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];

        _.pluck(people, 'name');
      });

      it('should return values contained at a user-defined property', function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];

        expect(_.pluck(people, 'name')).to.eql(['moe', 'curly']);
      });

      it('should not modify the original array', function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];

        _.pluck(people, 'name');

        expect(people).to.eql([{ name: 'moe', age: 30 }, { name: 'curly', age: 50 }]);
      });
    });

    describe('reduce', function() {
      checkForNativeMethods(function() {
        var add = function(tally, item) { return tally + item; };
        _.reduce([1, 2, 3, 4], add);
      });

      it('should be a function', function() {
        expect(_.reduce).to.be.an.instanceOf(Function);
      });

      it('should return a value', function() {
        var result = _.reduce([3, 2, 1], function(memo, item) { return item; });
        expect(result).to.be.defined;
      });

      it('should not mutate the input array', function() {
        var input = [1, 2, 3, 4, 5];
        var result = _.reduce(input, function(memo, item) { return item; });

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it('should invoke the iterator function with arguments (memo, item) in that order', function() {
        var memoInCallback, itemInCallback;

        _.reduce(['item'], function(memo, item) {
          memoInCallback = memo;
          itemInCallback = item;
        }, 'memo');

        expect(memoInCallback).to.equal('memo');
        expect(itemInCallback).to.equal('item');
      });

      it('should pass items of the array into the iterator from left to right', function() {
        var orderTraversed = [];

        _.reduce([1, 2, 3, 4], function(memo, item) {
          orderTraversed.push(item);
          return memo;
        }, 10);

        expect(orderTraversed).to.eql([1, 2, 3, 4]);
      });

      it('should continue to call iterator even if the iterator returns undefined', function() {
        var callCount = 0;
        var returnFalsy = function(total, item) {
          callCount++;
          if (callCount === 1) {
            return undefined;
          } else {
            return item + 1;
          }
        };

        var total = _.reduce([1, 1, 2], returnFalsy);
        expect(total).to.equal(3);
      });

      it('should pass every item of the array into the iterator if a memo is passed in', function() {
        var result = _.reduce([1, 2, 3], function(memo, item) {
          return memo - item;
        }, 10);

        expect(result).to.equal(4);
      });

      it('should accept falsy values as a valid memo', function() {
        // Be careful how you check if a memo has been passed in
        var result = _.reduce([1, 2, 3], function(memo, item) {
          return memo * item;
        }, 0);

        expect(result).to.equal(0);
      });

      it('should set memo to be the first item of the array if no memo is passed in', function() {
        var result = _.reduce([1, 2, 3], function(memo) {
          return memo;
        });

        expect(result).to.equal(1);
      });


      it('should pass the second item of the array into the iterator first if a memo is not passed in', function() {
        var result = _.reduce([3, 2, 1], function(memo, item) {
          return memo - item;
        });

        expect(result).to.equal(0);
      });

    });
  });

  describe('UNDERBAR PART.2', function() {

    describe('some', function() {
      var isEven = function(number) {
        return number % 2 === 0;
      };

      checkForNativeMethods(function() {
        _.some([4, 5, 6], _.identity);
      });

      it('should fail by default for an empty collection', function() {
        expect(_.some([])).to.be.false;
      });

      it('should pass for a collection of all-truthy results', function() {
        expect(_.some([true, {}, 1], _.identity)).to.be.true;
      });

      it('should fail for a collection of all-falsy results', function() {
        expect(_.some([null, 0, undefined], _.identity)).to.be.false;
      });

      it('should pass for a collection containing mixed falsy and truthy results', function() {
        expect(_.some([true, false, 1], _.identity)).to.be.true;
      });

      it('should pass for a set containing one truthy value that is a string', function() {
        expect(_.some([null, 0, 'yes', false], _.identity)).to.be.true;
      });

      it('should fail for a set containing no matching values', function() {
        expect(_.some([1, 11, 29], isEven)).to.be.false;
      });

      it('should pass for a collection containing one matching value', function() {
        expect(_.some([1, 10, 29], isEven)).to.be.true;
      });

      it('should cast the result to a boolean', function() {
        expect(_.some([1], _.identity)).to.be.true;
        expect(_.some([0], _.identity)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.some([true, true, true])).to.be.true;
        expect(_.some([true, true, false])).to.be.true;
        expect(_.some([false, false, false])).to.be.false;
      });
    });

    describe('defaults', function() {
      checkForNativeMethods(function() {
        _.defaults({ a: 1 }, { b: 1 }, { c: 1 });
      });

      it('should be a function', function() {
        expect(_.defaults).to.be.an.instanceOf(Function);
      });

      it('should return the original target object', function() {
        var destination = {};
        var source = {};
        var defaulted = _.defaults(destination, source);

        expect(defaulted).to.equal(destination); // .equal uses (===) under the hood
      });

      it('should copy a property if that key is not already set on the target', function() {

        var destination = {};
        var source = { a: 1 };

        _.defaults(destination, source);

        expect(destination.a).to.equal(1);
      });

      it('should copy any property whose key is not already set on the target', function() {
        var destination = {};
        var source = { a: 1, b: 2, c: 'three' };

        _.defaults(destination, source);

        expect(destination.a).to.equal(1);
        expect(destination.b).to.equal(2);
        expect(destination.c).to.equal('three');
      });

      it('should not copy a property if that key is already set on the target', function() {
        var destination = { a: 10 };
        var source = { a: 1 };

        _.defaults(destination, source);

        expect(destination.a).to.equal(10);
      });

      it('should not copy any property whose key is already set on the target', function() {
        var destination = { a: 1, b: 2 };
        var source = { a: 100, b: 200, c: 300 };

        _.defaults(destination, source);

        expect(destination.a).to.equal(1);
        expect(destination.b).to.equal(2);
        expect(destination.c).to.equal(300);
      });

      it('should not copy a property if that key is already set on the target, even if the value for that key is falsy', function() {

        var destination = {a: '', b: 0, c: NaN };
        var source = { a: 1, b: 2, c: 3 };

        _.defaults(destination, source);

        expect(destination.a).to.equal('');
        expect(destination.b).to.equal(0);
        expect(isNaN(destination.c)).to.equal(true);
      });

      it('should copy properties source an arbitrary number of source objects', function() {
        var destination = {};
        var source = { a: 1 };
        var anotherSource = { b: 2, c: 'three' };
        var aThirdSource = { d: 'four' };

        _.defaults(destination, source, anotherSource, aThirdSource);

        expect(destination.a).to.equal(1);
        expect(destination.b).to.equal(2);
        expect(destination.c).to.equal('three');
        expect(destination.d).to.equal('four');
      });

      it('should prefer the first value found when two objects are provided with properties at the same key', function() {
        var destination = {};
        var source = { a: 1 };
        var anotherSource = { a: 'one' };

        _.defaults(destination, source, anotherSource);

        expect(destination.a).to.equal(1);
      });
    });

    describe('once', function() {
      checkForNativeMethods(function() {
        var num = 0;
        var increment = _.once(function() {
          num += 1;
        });
      });

      it('should be a function', function() {
        expect(_.once).to.be.an.instanceOf(Function);
      });

      it('should return a function', function() {
        // noop is short for `no-operation` and is pronounced `no-op`
        var noop = _.once(function() {});

        expect(noop).to.be.an.instanceOf(Function);
      });

      it('should only run a user-defined function if it has not been run before', function() {
        var num = 0;
        var increment = _.once(function() {
          num++;
        });

        increment();
        increment();
        increment();

        expect(num).to.equal(1);
      });

      it('should apply arguments to the user-defined function', function() {
        var add = _.once(function(x, y, z) {
          return x + y + z;
        });

        expect(add(1, 2, 3)).to.equal(6);
      });

      it('should return the result of the first call for every subsequent call', function() {
        var add = _.once(function(x, y, z) {
          return x + y + z;
        });

        expect(add(1, 2, 3)).to.equal(6);
        expect(add(4, 5, 6)).to.equal(6);
        expect(add(7, 8, 9)).to.equal(6);
      });
    });

    describe('flatten', function() {
      checkForNativeMethods(function() {
        _.flatten([1, [2], [3, [[[4]]]]]);
      });

      it('can flatten nested arrays', function() {
        var nestedArray = [1, [2], [3, [[[4]]]]];

        expect(_.flatten(nestedArray)).to.eql([1, 2, 3, 4]);
      });
    });

    describe('shuffle', function() {
      checkForNativeMethods(function() {
        _.shuffle([1, 2, 3, 4]);
      });

      it('should not modify the original object', function() {
        var numbers = [4, 5, 6];
        var shuffled = _.shuffle(numbers).sort();

        expect(shuffled).to.not.equal(numbers);
        expect(numbers).to.eql([4, 5, 6]);
      });

      it('should have the same elements as the original object', function() {
        var numbers = [4, 5, 6];
        var shuffled = _.shuffle(numbers).sort();

        expect(shuffled).to.eql([4, 5, 6]);
      });

      it('should not be in the same order as the original object', function() {
        var numbers = [4, 5, 6, 7, 8, 9, 10];
        var shuffled = _.shuffle(numbers);

        // This test will fail 1/9! times
        expect(shuffled).to.not.eql([4, 5, 6, 7, 8, 9, 10]);
      });

    });

  });

}());
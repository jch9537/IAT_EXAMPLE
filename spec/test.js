(function() {
  'use strict';

  var checkForNativeMethods = function(runUnderbarFunction) {
    it('should not use the native version of any underbar methods in its implementation', function() {
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

  describe('EASY PART', function() {

    describe('1. RemoveFromFrontOfNew', function() {
      it('빈 배열 입력 시 빈 배열을 리턴합니다.', function() {
        expect(removeFromFrontOfNew([])).to.deep.equal([]);
      });

      it('리턴값은 배열이어야 합니다.', function() {
        expect(Array.isArray(removeFromFrontOfNew([1, 2], 3))).to.be.true;
      });

      it('배열의 가장 앞의 요소를 제거합니다.', function() {
        expect(removeFromFrontOfNew([1, 2, 3])).to.deep.equal([2, 3]);
      });

      it('원본 배열을 변경해서는 안 됩니다.', function() {
        var originalArray = [1, 2];
        var newArray = removeFromFrontOfNew(originalArray);
        expect(originalArray).to.deep.equal([1, 2]);
      });
    });

    describe('2. findLongestWordAmongMixedElements', function() {
      it('문자열을 리턴해야합니다.', function() {
        expect(typeof findLongestWordAmongMixedElements(["these", "are", "strings"])).to.be.equal("string");
      });

      it('배열에서 가장 긴 문자열을 리턴해야합니다..', function() {
        expect(findLongestWordAmongMixedElements([3, "word", 5, "up", 3, 1])).to.be.equal("word");
      });

      it('결과 문자열의 길이가 같은 것이 있다면 첫 번째 값을 리턴합니다.', function() {
        expect(findLongestWordAmongMixedElements(["word", 3, 5, 3, "your", "up", 1, 5])).to.be.equal("word");
      });

      it('빈 배열을 입력했을 때 빈 문자열을 리턴합니다.', function() {
        expect(findLongestWordAmongMixedElements([])).to.be.equal("");
      });

      it('배열에 문자열이 없다면 빈 문자열을 리턴합니다.', function() {
        expect(findLongestWordAmongMixedElements([1, 2, 4])).to.be.equal("");
      });
    });

    describe('3. convertObjectToArray', function() {
      it('객체를 배열로 리턴해야합니다.', function() {
        var input = {
          name: 'Holly',
          age: 35,
          role: 'producer'
          }
        var output = convertObjectToArray(input);
        var expected = [
          ['name', 'Holly'],
          ['age', 35],
          ['role', 'producer']
        ];
        expect(JSON.stringify(output)).to.be.equal(JSON.stringify(expected));
      });

      it('배열을 리턴해야합니다.', function() {
        var input = {
          name: 'Holly',
          age: 35,
          role: 'producer'
          };
        var output = convertObjectToArray(input);
        expect(Array.isArray(output)).to.be.equal(true);
      });

    });

    describe('4. convertArrayToObject', function() {
      it('주어진 데이터를 형식에 맞게 변환해야 합니다.', function() {
        var input = [
          [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
          [
            ['firstName', 'Mary'],
            ['lastName', 'Jenkins'],
            ['age', 36],
            ['role', 'manager']
          ]
        ];
        var output = convertArrayToObject(input);
        var expected = [
          { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
          { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
        ];
        expect(JSON.stringify(expected)).to.be.equal(JSON.stringify(output));
      });

      it('객체를 포함한 배열을 리턴해야 합니다.', function() {
        var input = [
          [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
          [
            ['firstName', 'Mary'],
            ['lastName', 'Jenkins'],
            ['age', 36],
            ['role', 'manager']
          ]
        ];
        var output = convertArrayToObject(input);
        expect(typeof output[0]).to.be.equal('object');
        expect(Array.isArray(output)).to.be.equal(true);
      });

    });

    describe('5. sumDigits', function() {
      it('숫자 0을 입력시 0 을 리턴해야 합니다.', function() {
        expect(sumDigits(0)).to.be.equal(0);
      });

      it('음수일 때는 첫번째 수는 음수를 더해야 합니다.', function() {
        expect(sumDigits(-2004)).to.be.equal(2);
      });

      it('양수일 때는 모든 자리의 수를 더해야 합니다.', function() {
        expect(sumDigits(2002)).to.be.equal(4);
      });

      it('리턴값은 타입이 "number" 입니다.', function() {
        expect(typeof sumDigits(2002)).to.be.equal('number');
      });

    });

    describe('6. modulo', function() {
      it('(1, 2) 입력 시 1을 리턴합니다.', function() {
        expect(modulo(1, 2)).to.be.equal(1);
      });

      it('(-4, 2) 입력 시 0을 리턴합니다.', function() {
        expect(modulo(-4, 2)).to.be.equal(0);
      });

      it('(2, 3) 입력 시 2를 리턴합니다.', function() {
        expect(modulo(2, 3)).to.be.equal(2);
      });

      it('(12, 5) 입력 시 2를 리턴합니다.', function() {
        expect(modulo(12, 5)).to.be.equal(2);
      });

      it('(4, -3) 입력 시 1를 리턴합니다.', function() {
        expect(modulo(4, -3)).to.be.equal(1);
      });

      it('num1이 음수이면 음수를 리턴합니다.', function() {
        expect(modulo(-4, 3)).to.be.equal(-1);
      });

      it('num2가 NaN이면 NaN을 리턴합니다.', function() {
        expect(isNaN(modulo(2, NaN))).to.be.equal(true);
      });

      it('(5.5, 2) 입력 시 1.5를 리턴합니다.', function() {
        expect(modulo(5.5, 2)).to.be.equal(1.5);
      });

      it('% 연산자를 사용하지 않습니다.', function() {
        var body = modulo.toString();
        expect(/%/.test(body)).to.be.equal(false);
      });

      it('num1이 NaN이면 NaN을 리턴합니다.', function() {
        expect(isNaN(modulo(NaN, 2))).to.be.equal(true);
      });

      it('숫자를 리턴합니다.', function() {
        expect(typeof modulo(8, 2)).to.be.equal('number');
      });

      it('num1이 0이면 0을 리턴합니다.', function() {
        expect(modulo(0, 4)).to.be.equal(0);
      });
      
      it('num2가 0이면 NaN을 리턴합니다.', function() {
        expect(isNaN(modulo(4, 0))).to.be.equal(true);
      });

      it('(-1, 2) 입력 시 -1을 리턴합니다.', function() {
        expect(modulo(-1, 2)).to.be.equal(-1);
      });

    });



  });

}());

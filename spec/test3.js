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

  describe('Difficult', function() {
    describe('BinarySearch', function() {

      it('다음 조건의 배열의 인덱스를 리턴해야 합니다.', function() {
        var array = [1,2,3,5,8,10,12,15,20,50,77,99];
        expect(binarySearch(8, array)).to.equal(4)
      });

      it('다음 조건의 배열의 인덱스를 리턴해야 합니다.', function() {
        var array = [1,2,3,5,8,10,12,15,20,50,77,99];
        expect(binarySearch(50, array)).to.equal(9)
      });

      it('해당하는 값이 없다면 null을 리턴합니다.', function() {
        var array = [1,3,5,7,9];
        expect(binarySearch(11, array)).to.equal(null)
      });

      it('같은 값이 있을 때 가장 먼저 검색한 인덱스를 리턴합니다.', function() {
        var array = [1, 2, 2, 2, 5];
        expect(binarySearch(2, array)).to.equal(1)
      });
    });

    describe('findObjectById', function() {

      it('다음 조건을 만족시켜야 합니다. findObjectById(7) -> { id: 6 }', function() {
        expect(findObjectById(6)).to.eql({ id: 6 })
      });

      it('다음 조건을 만족시켜야 합니다. findObjectById(7) -> { id: 7, children: [{id:8}, {id:9}] }', function() {

        expect(findObjectById(7)).to.eql({ id: 7, children: [{id:8}, {id:9}] })
      });

    });

    describe("repeatString - recursion", () => {
      it("('code', 3) 입력 시 'codecodecode'가 나옵니다.", () => {
        expect(repeatString('code', 3)).to.eql('codecodecode');
      });
      it("('기러기', 3) 입력 시 '기러기기러기기러기'가 나옵니다.", () => {
        expect(repeatString('기러기', 3)).to.eql('기러기'.repeat(3));
      });
      it("('what', 0) 입력 시 빈 문자열이 출력됩니다.", () => {
        expect(repeatString("what", 0)).to.eql("");
      });
    })

  });

}());
import isElement from './../src/';


describe('`isElement()`', function() {

  describe('should return false on', function() {

    it('no input', function() {
      expect(isElement()).toEqual(false);
    });

    it('`null`', function() {
      expect(isElement(null)).toEqual(false);
    });

    it('Boolean', function() {
      expect(isElement(false)).toEqual(false);
      expect(isElement(true)).toEqual(false);
    });

    it('Number', function() {
      expect(isElement(1)).toEqual(false);
      expect(isElement(1.23)).toEqual(false);
    });

    it('String', function() {
      expect(isElement('aaa')).toEqual(false);
    });

    it('Array', function() {
      expect(isElement([])).toEqual(false);
      expect(isElement(['aaa', 'bbb'])).toEqual(false);
    });

    it('Object', function() {
      expect(isElement({})).toEqual(false);
      expect(isElement({
        aaa: 'bbb'
      })).toEqual(false);
    });

    it('TextNode', function() {
      var dummy = document.body.appendChild(document.createTextNode('aaa'));
      expect(isElement(dummy)).toEqual(false);
    });

    it('document fragment', function() {
      var dummy = document.body.appendChild(document.createDocumentFragment());
      expect(isElement(dummy)).toEqual(false);
    });

  });

  describe('should return true on', function() {

    it('HTML Element', function() {
      var dummy = document.body.appendChild(document.createElement('div'));
      expect(isElement(dummy)).toEqual(true);
    });

    it('SVG Element', function() {
      var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      document.body.appendChild(dummy);
      expect(isElement(dummy)).toEqual(true);
    });

  });

});
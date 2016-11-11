/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */
export default function (input) {
  return (input != null)
    && (typeof input === 'object')
    && (input.nodeType === Node.ELEMENT_NODE)
    && (typeof input.style === 'object')
    && (typeof input.ownerDocument === 'object');
}

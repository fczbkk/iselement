export default function (obj) {
  return (obj != null)
    && (typeof obj === 'object')
    && (obj.nodeType === 1)
    && (typeof obj.style === 'object')
    && (typeof obj.ownerDocument === 'object');
}

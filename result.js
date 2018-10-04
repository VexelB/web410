var _context;

const square = function () {
  return this * this;
};

console.log((_context = 5, square).call(_context));

multiply = (n, m) => (n * m);
multiply(3, 4) === 12 // true

curryedMultiply = (n) => ( (m) => multiply(n, m) );
triple = curryedMultiply(3);
triple(4) === 12 // true


curryedMultiply = (n) => (m) => n * m;
curryedMultiply(3)(4) === 12; // true

multiply = (n, m) => curryedMultiply(n)(m);
multiply(3, 4) === 12; // true
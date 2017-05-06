# TypeDetector [![NPM version][npm-image]][npm-url]
> A class that holds a few simple predicate functions for detecting the native type of input.

## Installation
Simply do: `npm install @wessberg/typedetector`.

## Usage
```javascript
const typeDetector = new TypeDetector();
if (typeDetector.isFunction(something)) {
	// something is typed as a function in here.
	something(arg);
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 2, 1]);
const set3 = set1;
typeDetector.isEqual(set1, set2); // returns true, their contents are the same.
typeDetector.isEqual(set1, set3); // returns true, by referential equality.
```

The library only covers a few of the built-in types since `instanceof` checks covers the rest.
But, for things such as `strings`, `numbers` and `booleans`, the predicates will be truthy if
their object wrapper types is also used, e.g.:
```javascript
typeDetector.isNumber(new Number(2)) // returns true
```

## Changelog:

**v1.0.3**:

- Added a `getTypeOf` method that returns a more appropriate stringified name of the type of the given data.

**v1.0.1**:

- A few updates in the README.

**v1.0.0**:

- First release. Contains a few methods for things that traditional `instanceof` checks doesn't cover.

[npm-url]: https://npmjs.org/package/@wessberg/typedetector
[npm-image]: https://badge.fury.io/js/@wessberg/typedetector.svg
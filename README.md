# TypeDetector [![NPM version][npm-image]][npm-url]
> A class that holds a few simple predicate functions for detecting the native type of input.

## Installation
Simply do: `npm install typedetector`.

## Usage
```typescript
const typeDetector = new TypeDetector();
if (typeDetector.isFunction(something)) {
	// something is typed as a function in here.
	something(arg);
}
```

The library only covers a few of the built-in types since `instanceof` checks covers the rest.
But, for things such as `strings`, `numbers` and `booleans`, the predicates will be truthy if
their object wrapper types is also used, e.g.:
```typescript
typeDetector.isNumber(new Number(2)) // returns true
```

## Changelog:

**v1.0**:

- First release. Contains a few methods for things that traditional `instanceof` checks doesn't cover.

[npm-url]: https://npmjs.org/package/typedetector
[npm-image]: https://badge.fury.io/js/typedetector.svg
import {IArbitraryObject, ITypeDetector, TypeOf} from './interface/ITypeDetector';

/**
 * A class that holds a set of predicate methods that detects the native type of the input.
 * @author Frederik Wessberg
 */
export class TypeDetector implements ITypeDetector {

	/**
	 * Returns true f the given item is a boolean.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isBoolean (item: any): item is boolean {
		/* tslint:enable */
		return typeof item === "boolean" || item instanceof Boolean;
	}

	/**
	 * Returns true f the given item is a string.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isString (item: any): item is string {
		/* tslint:enable */
		return typeof item === "string" || item instanceof String;
	}

	/**
	 * Returns true f the given item is a number.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isNumber (item: any): item is number {
		/* tslint:enable */
		const primitive = item.valueOf();
		return (typeof item === "number" || item instanceof Number) && !(isNaN(primitive));
	}

	/**
	 * Returns true f the given item is an object..
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isObject<T> (item: any): item is IArbitraryObject<T> {
		/* tslint:enable */
		return item ? item.constructor === {}.constructor : false;
	}

	/**
	 * Returns true f the given item is a primitive type.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isPrimitive (item: any): item is string | symbol | number | boolean {
		/* tslint:enable */
		return item === null || (typeof item !== "object" && typeof item !== "function");
	}

	/**
	 * Returns true f the given item is a prototype for a primitive type.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isPrimitivePrototype (item: any): item is typeof String | typeof Number | typeof Boolean | typeof Symbol {
		/* tslint:enable */
		return item === String || item === Number || item === Boolean || item === Symbol;
	}

	/**
	 * Returns true f the given item is a function.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isFunction (item: any): item is Function {
		/* tslint:enable */
		return !!(item && item.constructor && item.call && item.apply);
	}

	/**
	 * Returns true f the given item is an element.
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isElement (item: any): item is Element {
		/* tslint:enable */
		try {
			return item instanceof Element;
		} catch (e) {
			return false;
		}
	}

	/**
	 * Returns true f the given item is a EventListenable..
	 * @param {*} item
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isEventListenable (item: any): item is EventTarget {
		/* tslint:enable */
		return item === document || item === window || item instanceof HTMLBodyElement || item instanceof HTMLElement;
	}

	/**
	 * Returns a more appropriate "typeof" value for different kinds of built-in types.
	 * @param {T} data
	 * @returns {TypeOf}
	 */
	public getTypeof<T> (data: T): TypeOf {
		if (data === null) return "null";
		if (typeof data === "undefined") return "undefined";
		if (typeof data === "symbol") return "symbol";
		if (data instanceof Date) return "date";
		if (data instanceof RegExp) return "regexp";
		if (this.isString(data)) return "string";
		if (data instanceof Set) return "set";
		if (data instanceof Map) return "map";
		if (data instanceof WeakSet) return "weakset";
		if (data instanceof WeakMap) return "weakmap";
		if (Array.isArray(data)) return "array";
		if (this.isObject(data)) return "object";
		if (this.isBoolean(data)) return "boolean";
		if (this.isNumber(data)) return "number";
		if (this.isFunction(data)) return "function";
		return typeof data;
	}

	/**
	 * Compares the two given values and returns true if they are identical, either per reference or per values.
	 * @param {*} x
	 * @param {*} y
	 * @returns {boolean}
	 */
	/* tslint:disable */
	public isEqual (x: any, y: any): boolean {
		/* tslint:enable */

		// If referential equality is given, always return true.
		if (x === y) return true;

		// Return true if their values are null or undefined.
		if (x == null && y == null) return x === y;

		// Return true if both are primitive objects.
		if (this.isString(x) && this.isString(y)) return `${x}` === `${y}`; // If the other string were created with 'new String()', this makes sure to change it to a primitive value first.
		if (this.isNumber(x) && this.isNumber(y)) return x === y;
		if (this.isBoolean(x) && this.isBoolean(y)) return x === y;

		// If a function, their string representation must be identical. Remove added indentation and line spacing from the comparison.
		if (this.isFunction(x) && this.isFunction(y)) {
			return x.toString().replace(/[\n\t\r]/g, "") === y.toString().replace(/[\n\t\r]/g, "");
		}

		if (this.isObject(x) && this.isObject(y)) return JSON.stringify(x) === JSON.stringify(y);

		if (Array.isArray(x) && Array.isArray(y)) {
			// Return false if their sizes aren't identical.

			if (x.length !== y.length) return false;
			for (let i = 0; i < x.length; i++) {
				const item = x[i];

				// Recursively check if the values are identical.
				if (!this.isEqual(item, y[i])) return false;
			}

			return true;
		}

		if (x instanceof Map && y instanceof Map) {

			// Return false if their sizes aren't identical.
			if (x.size !== y.size) return false;

			for (const item of x) {
				const key = item[0];
				const value = item[1];

				// Return false if the key is isn't found in the other collection
				const otherValue = y.get(key);
				if (key != null && otherValue == null) return false;

				// Recursively check if the values are identical.
				if (!this.isEqual(value, otherValue)) return false;
			}
			return true;
		}

		if (x instanceof Set && y instanceof Set) {
			if (x.size !== y.size) return false;
			// If a new set of all the elements has the same size, they have identical elements
			return new Set([...x, ...y]).size === x.size;
		}

		return x === y;
	}

}
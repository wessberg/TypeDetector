import test from "ava";
import {TypeDetector} from "../src/TypeDetector";

const typeDetector = new TypeDetector();
let BOOLEAN_TEST_TRUTHY_COUNT = 0;
let BOOLEAN_TEST_FALSY_COUNT = 0;
let STRING_TEST_TRUTHY_COUNT = 0;
let STRING_TEST_FALSY_COUNT = 0;
let NUMBER_TEST_TRUTHY_COUNT = 0;
let NUMBER_TEST_FALSY_COUNT = 0;
let FUNCTION_TEST_TRUTHY_COUNT = 0;
let FUNCTION_TEST_FALSY_COUNT = 0;
let OBJECT_TEST_TRUTHY_COUNT = 0;
let OBJECT_TEST_FALSY_COUNT = 0;
let IS_EQUAL_TEST_TRUTHY_COUNT = 0;
let IS_EQUAL_TEST_FALSY_COUNT = 0;
let IS_PRIMITIVE_TEST_TRUTHY_COUNT = 0;
let IS_PRIMITIVE_TEST_FALSY_COUNT = 0;

test(`'isClass()' returns true for classes. #1`, t => {
	class A {
	}

	t.true(typeDetector.isClassInstance(new A()));
});

test(`'isClass()' returns false for non-classes. #1`, t => {
	t.false(typeDetector.isClassInstance({}));
});

test(`'isClassInstance()' returns false for non-classes. #2`, t => {
	t.false(typeDetector.isClassInstance(function foo () {
	}));
});

test(`'isClassInstance()' returns false for non-classes. #3`, t => {
	t.false(typeDetector.isClassInstance(Function));
});

test(`'isClassInstance()' returns false for non-classes. #4`, t => {
	t.false(typeDetector.isClassInstance(() => {
	}));
});

test(`'isClassInstance()' returns false for non-classes. #5`, t => {
	t.false(typeDetector.isClassInstance(() => new Function()));
});

test(`'isClassInstance()' returns false for non-classes. #6`, t => {
	t.false(typeDetector.isClassInstance(class A {
	}));
});

test(`'isClassConstructor()' returns true for class-constructors. #1`, t => {
	t.true(typeDetector.isClassConstructor(class A {
	}));
});

test(`'isClassConstructor()' returns false for non-class-constructors. #1`, t => {
	class A {
	}

	t.false(typeDetector.isClassConstructor(new A()));
});

test(`'isClassConstructor()' returns false for non-class-constructors. #2`, t => {
	t.false(typeDetector.isClassConstructor({}));
});

test(`'isClassConstructor()' returns false for non-class-constructors. #3`, t => {
	t.false(typeDetector.isClassConstructor(function foo () {
	}));
});

test(`'isClassConstructor()' returns false for non-class-constructors. #4`, t => {
	t.false(typeDetector.isClassConstructor(() => {
	}));
});

test(`'isClassConstructor()' returns false for non-class-constructors. #5`, t => {
	t.false(typeDetector.isClassConstructor(Function));
});

test(`'isClassConstructor()' returns false for non-class-constructors. #6`, t => {
	t.false(typeDetector.isClassConstructor(Date));
});

test(`'isBoolean()' returns true for booleans. #${++BOOLEAN_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isBoolean(true));
});

test(`'isBoolean()' returns true for booleans. #${++BOOLEAN_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isBoolean(false));
});

test(`'isBoolean()' returns true for booleans. #${++BOOLEAN_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isBoolean(Boolean(true)));
});

test(`'isBoolean()' returns true for booleans. #${++BOOLEAN_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isBoolean(Boolean(false)));
});

test(`'isBoolean()' returns true for booleans. #${++BOOLEAN_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isBoolean(new Boolean(true)));
});

test(`'isBoolean()' returns true for booleans. #${++BOOLEAN_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isBoolean(new Boolean(false)));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(1));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(1));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(0));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(Infinity));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(""));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean("true"));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean("false"));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean([true]));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(Symbol("true")));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean({foo: "bar"}));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(() => true));
});

test(`'isBoolean()' returns false for anything else. #${++BOOLEAN_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isBoolean(new Map()));
});

test(`'isString()' returns true for strings. #${++STRING_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isString(""));
});

test(`'isString()' returns true for strings. #${++STRING_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isString("hello"));
});

test(`'isString()' returns true for strings. #${++STRING_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isString("1"));
});

test(`'isString()' returns true for strings. #${++STRING_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isString("0"));
});

test(`'isString()' returns true for strings. #${++STRING_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isString(new String("hello!")));
});

test(`'isString()' returns true for strings. #${++STRING_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isString(String("hi there!")));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(1));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(0));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(true));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(false));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(["hello"]));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString({foo: "bar"}));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(new Map));
});

test(`'isString()' returns false for anything else. #${++STRING_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isString(Symbol("Hello!")));
});

test(`'isNumber()' returns true for numbers. #${++NUMBER_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isNumber(1));
});

test(`'isNumber()' returns true for numbers. #${++NUMBER_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isNumber(0));
});

test(`'isNumber()' returns true for numbers. #${++NUMBER_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isNumber(Infinity));
});

test(`'isNumber()' returns true for numbers. #${++NUMBER_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isNumber(new Number(2)));
});

test(`'isNumber()' returns true for numbers. #${++NUMBER_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isNumber(Number(3)));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber(NaN));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber("1"));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber("0"));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber(true));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber(false));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber([1]));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber({1: true}));
});

test(`'isNumber()' returns false for anything else. #${++NUMBER_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isNumber(new Set([1])));
});

test(`'isFunction()' returns true for functions. #${++FUNCTION_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isFunction(() => {
	}));
});

test(`'isFunction()' returns true for functions. #${++FUNCTION_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isFunction(function () {
	}));
});

test(`'isFunction()' returns true for functions. #${++FUNCTION_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isFunction(new Function()));
});

test(`'isFunction()' returns false for anything else. #${++FUNCTION_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isFunction("function hello () {}"));
});

test(`'isFunction()' returns false for anything else. #${++FUNCTION_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isFunction(true));
});

test(`'isFunction()' returns false for anything else. #${++FUNCTION_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isFunction(false));
});

test(`'isFunction()' returns false for anything else. #${++FUNCTION_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isFunction(new Map()));
});

test(`'isFunction()' returns false for anything else. #${++FUNCTION_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isFunction([]));
});

test(`'isFunction()' returns false for anything else. #${++FUNCTION_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isFunction({}));
});

test(`'isObject()' returns true for objects. #${++OBJECT_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isObject({}));
});

test(`'isObject()' returns true for objects. #${++OBJECT_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isObject(new Object()));
});

test(`'isObject()' returns true for objects. #${++OBJECT_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isObject({foo: "bar"}));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject(new Map()));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject(new String()));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject(true));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject(false));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject([]));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject(() => {
	}));
});

test(`'isObject()' returns false for anything else. #${++OBJECT_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isObject(function () {
	}));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual(1, 1));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual(true, true));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual("hello", "hello"));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual(new Map(), new Map()));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual(new Set([1, 2, 3]), new Set([3, 2, 1])));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual([1, 2, 3], [1, 2, 3]));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual({a: 1}, {a: 1}));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	const obj1 = {a: 1};
	const obj2 = obj1;
	t.true(typeDetector.isEqual(obj1, obj2));
});

test(`'isEqual()' returns true for equal stuff. #${++IS_EQUAL_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isEqual({a: {b: 2}}, {a: {b: 2}}));
});

test(`'isEqual()' returns false for unequal stuff. #${++IS_EQUAL_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isEqual(true, false));
});

test(`'isEqual()' returns false for unequal stuff. #${++IS_EQUAL_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isEqual(1, 0));
});

test(`'isEqual()' returns false for unequal stuff. #${++IS_EQUAL_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isEqual("hello", "goodbye"));
});

test(`'isEqual()' returns false for unequal stuff. #${++IS_EQUAL_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isEqual([1, 2, 3], [4, 3, 2]));
});

test(`'isEqual()' returns false for unequal stuff. #${++IS_EQUAL_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isEqual(new Set([1, 2, 3]), new Set([4, 3, 2])));
});

test(`'isPrimitive()' returns true for primitive values. #${++IS_PRIMITIVE_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isPrimitive(true));
});

test(`'isPrimitive()' returns true for primitive values. #${++IS_PRIMITIVE_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isPrimitive(2));
});

test(`'isPrimitive()' returns true for primitive values. #${++IS_PRIMITIVE_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isPrimitive(Symbol("hello")));
});

test(`'isPrimitive()' returns true for primitive values. #${++IS_PRIMITIVE_TEST_TRUTHY_COUNT}.`, t => {
	t.true(typeDetector.isPrimitive("hello"));
});

test(`'isPrimitive()' returns false for anything else. #${++IS_PRIMITIVE_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isPrimitive(new Map()));
});

test(`'isPrimitive()' returns false for anything else. #${++IS_PRIMITIVE_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isPrimitive([]));
});

test(`'isPrimitive()' returns false for anything else. #${++IS_PRIMITIVE_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isPrimitive({}));
});

test(`'isPrimitive()' returns false for anything else. #${++IS_PRIMITIVE_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isPrimitive(function () {
	}));
});

test(`'isPrimitive()' returns false for anything else. #${++IS_PRIMITIVE_TEST_FALSY_COUNT}.`, t => {
	t.false(typeDetector.isPrimitive(() => {
	}));
});
export declare type TypeOf = "string"|"object"|"regexp"|"number"|"date"|"symbol"|"function"|"boolean"|"null"|"undefined"|"array"|"set"|"map"|"weakset"|"weakmap"|"class"|"constructor";

export interface IArbitraryObject {
	[key: string]: any;
	[key: number]: any;
}

export interface ITypeDetector {
	/* tslint:disable */
	isClassConstructor (item: any): item is new(args: any[]) => Function;
	isClassInstance<T extends any> (item: T): item is T;
	isBoolean (item: any): item is boolean;
	isString (item: any): item is string;
	isNumber (item: any): item is number;
	isObject (item: any): item is IArbitraryObject;
	isPrimitive (item: any): item is string|symbol|number|boolean;
	isPrimitivePrototype (item: any): item is typeof String|typeof Number|typeof Boolean|typeof Symbol;
	isFunction (item: any): item is Function;
	isElement (item: any): item is Element;
	isEventListenable (item: any): item is EventTarget;
	getTypeof<T> (data: T): TypeOf;
	isEqual(x: any, y: any): boolean;
	/* tslint:enable */
}
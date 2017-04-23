
/* tslint:disable */
export interface IArbitraryObject<T> {
	[key: string]: T;
	[key: number]: T;
	/* tslint:enable */
}

export interface ITypeDetector {
	/* tslint:disable */
	isBoolean (item: any): item is boolean;
	isString (item: any): item is string;
	isNumber (item: any): item is number;
	isObject<T> (item: any): item is IArbitraryObject<T>;
	isPrimitive (item: any): item is string|symbol|number|boolean;
	isPrimitivePrototype (item: any): item is typeof String|typeof Number|typeof Boolean|typeof Symbol;
	isFunction (item: any): item is Function;
	isElement (item: any): item is Element;
	isEventListenable (item: any): item is EventTarget;
	isEqual(x: any, y: any): boolean;
	/* tslint:enable */
}
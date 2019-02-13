/**
 * @constructor
 * @name pc.Vec4
 * @classdesc A 4-dimensional vector.
 * @description Creates a new Vec4 object.
 * @param {f32} [x] The x value. If x is an array of length 4, the array will be used to populate all components.
 * @param {f32} [y] The y value.
 * @param {f32} [z] The z value.
 * @param {f32} [w] The w value.
 * @example
 * var v = new pc.Vec4(1, 2, 3, 4);
 */
export class Vec4 {
	x: f32;
	y: f32;
	z: f32;
	w: f32;

	//constructor(x?: any, y?: number, z?: number, w?: number) {
	constructor(x: f32, y: f32, z: f32, w: f32) {
		//if (x && x.length === 4) {
		//	this.x = x[0];
		//	this.y = x[1];
		//	this.z = x[2];
		//	this.w = x[3];
		//} else {
		//	this.x = x || 0;
		//	this.y = y || 0;
		//	this.z = z || 0;
		//	this.w = w || 0;
		//}
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}

	/**
	 * @function
	 * @name pc.Vec4#add
	 * @description Adds a 4-dimensional vector to another in place.
	 * @param {pc.Vec4} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(10, 10, 10, 10);
	 * var b = new pc.Vec4(20, 20, 20, 20);
	 *
	 * a.add(b);
	 *
	 * // Should output [30, 30, 30]
	 * console.log("The result of the addition is: " + a.toString());
	 */
	add(rhs: Vec4): Vec4 {
		this.x += rhs.x;
		this.y += rhs.y;
		this.z += rhs.z;
		this.w += rhs.w;

		return this;
	}
}
/**
 * @constructor
 * @name pc.Vec2
 * @classdesc A 2-dimensional vector.
 * @description Creates a new Vec2 object.
 * @param {f32} [x] The x value. If x is an array of length 2, the array will be used to populate all components.
 * @param {f32} [y] The y value.
 * @example
 * var v = new pc.Vec2(1, 2);
 */
export class Vec2 {
	x: f32;
	y: f32;

	//constructor(x?: any, y?: number) {
	constructor(x: f32, y: f32) {
		//if (x && x.length === 2) {
		//	this.x = x[0];
		//	this.y = x[1];
		//} else {
		//	this.x = x || 0;
		//	this.y = y || 0;
		//}
	}

	/**
	 * @function
	 * @name pc.Vec2#add
	 * @description Adds a 2-dimensional vector to another in place.
	 * @param {pc.Vec2} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(10, 10);
	 * var b = new pc.Vec2(20, 20);
	 *
	 * a.add(b);
	 *
	 * // Should output [30, 30]
	 * console.log("The result of the addition is: " + a.toString());
	 */
	add(rhs: Vec2): Vec2 {
		this.x += rhs.x;
		this.y += rhs.y;

		return this;
	}
}

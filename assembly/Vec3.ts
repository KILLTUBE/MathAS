/**
 * @constructor
 * @name pc.Vec3
 * @classdesc A 3-dimensional vector.
 * @description Creates a new Vec3 object.
 * @param {Number} [x] The x value. If x is an array of length 3, the array will be used to populate all components.
 * @param {Number} [y] The y value.
 * @param {Number} [z] The z value.
 * @example
 * var v = new pc.Vec3(1, 2, 3);
 */
export class Vec3 {
	x: number;
	y: number;
	z: number;

	// AS is more strict than TS... need to replace all occuranves of this in PlayCanvasTS at some point
	//constructor(x?: any, y?: number, z?: number)
	constructor(x: number, y: number, z: number)
	{
		//if (x && x.length === 3) {
		//	this.x = x[0];
		//	this.y = x[1];
		//	this.z = x[2];
		//} else {
		//	this.x = x || 0;
		//	this.y = y || 0;
		//	this.z = z || 0;
		//}
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * @function
	 * @name pc.Vec3#add
	 * @description Adds a 3-dimensional vector to another in place.
	 * @param {pc.Vec3} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(10, 10, 10);
	 * var b = new pc.Vec3(20, 20, 20);
	 *
	 * a.add(b);
	 *
	 * // Should output [30, 30, 30]
	 * console.log("The result of the addition is: " + a.toString());
	 */
	add(rhs: Vec3): Vec3 {
		this.x += rhs.x;
		this.y += rhs.y;
		this.z += rhs.z;

		return this;
	}

	/**
	 * @function
	 * @name pc.Vec3#add2
	 * @description Adds two 3-dimensional vectors together and returns the result.
	 * @param {pc.Vec3} lhs The first vector operand for the addition.
	 * @param {pc.Vec3} rhs The second vector operand for the addition.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(10, 10, 10);
	 * var b = new pc.Vec3(20, 20, 20);
	 * var r = new pc.Vec3();
	 *
	 * r.add2(a, b);
	 * // Should output [30, 30, 30]
	 *
	 * console.log("The result of the addition is: " + r.toString());
	 */
	add2(lhs: Vec3, rhs: Vec3): Vec3 {
		this.x = lhs.x + rhs.x;
		this.y = lhs.y + rhs.y;
		this.z = lhs.z + rhs.z;

		return this;
	}
}
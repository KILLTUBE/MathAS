/**
 * @constructor
 * @name pc.Mat4
 * @classdesc A 4x4 matrix.
 * @description Creates a new identity Mat4 object.
 */
export class Mat4 {
	data: Float32Array;

	constructor() {
		var tmp = new Float32Array(16);
		// Create an identity matrix. Note that a new Float32Array has all elements set
		// to zero by default, so we only need to set the relevant elements to one.
		tmp[0] = tmp[5] = tmp[10] = tmp[15] = 1;
		this.data = tmp;
	}
	
	/**
	 * @function
	 * @name pc.Mat4#add2
	 * @description Adds the specified 4x4 matrices together and stores the result in
	 * the current instance.
	 * @param {pc.Mat4} lhs The 4x4 matrix used as the first operand of the addition.
	 * @param {pc.Mat4} rhs The 4x4 matrix used as the second operand of the addition.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var m = new pc.Mat4();
	 *
	 * m.add2(pc.Mat4.IDENTITY, pc.Mat4.ONE);
	 *
	 * console.log("The result of the addition is: " a.toString());
	 */
	add2(lhs: Mat4, rhs: Mat4): Mat4 {
		var a = lhs.data,
			b = rhs.data,
			r = this.data;

		r[0] = a[0] + b[0];
		r[1] = a[1] + b[1];
		r[2] = a[2] + b[2];
		r[3] = a[3] + b[3];
		r[4] = a[4] + b[4];
		r[5] = a[5] + b[5];
		r[6] = a[6] + b[6];
		r[7] = a[7] + b[7];
		r[8] = a[8] + b[8];
		r[9] = a[9] + b[9];
		r[10] = a[10] + b[10];
		r[11] = a[11] + b[11];
		r[12] = a[12] + b[12];
		r[13] = a[13] + b[13];
		r[14] = a[14] + b[14];
		r[15] = a[15] + b[15];

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#add
	 * @description Adds the specified 4x4 matrix to the current instance.
	 * @param {pc.Mat4} rhs The 4x4 matrix used as the second operand of the addition.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var m = new pc.Mat4();
	 *
	 * m.add(pc.Mat4.ONE);
	 *
	 * console.log("The result of the addition is: " a.toString());
	 */
	add(rhs: Mat4): Mat4 {
		return this.add2(this, rhs);
	}	
}

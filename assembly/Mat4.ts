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

	/**
	 * @function
	 * @name pc.Mat4#clone
	 * @description Creates a duplicate of the specified matrix.
	 * @returns {pc.Mat4} A duplicate matrix.
	 * @example
	 * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 * var dst = src.clone();
	 * console.log("The two matrices are " + (src.equals(dst) ? "equal" : "different"));
	 */
	clone(): Mat4 {
		// AS doesn't support this yet: return new pc.Mat4().copy(this);
		var tmp = new Mat4();
		tmp.copy(this);
		return tmp;
	}

	/**
	 * @function
	 * @name pc.Mat4#copy
	 * @description Copies the contents of a source 4x4 matrix to a destination 4x4 matrix.
	 * @param {pc.Mat4} rhs A 4x4 matrix to be copied.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 * var dst = new pc.Mat4();
	 * dst.copy(src);
	 * console.log("The two matrices are " + (src.equals(dst) ? "equal" : "different"));
	 */
	copy(rhs: Mat4): Mat4 {
		var src = rhs.data,
			dst = this.data;

		dst[0] = src[0];
		dst[1] = src[1];
		dst[2] = src[2];
		dst[3] = src[3];
		dst[4] = src[4];
		dst[5] = src[5];
		dst[6] = src[6];
		dst[7] = src[7];
		dst[8] = src[8];
		dst[9] = src[9];
		dst[10] = src[10];
		dst[11] = src[11];
		dst[12] = src[12];
		dst[13] = src[13];
		dst[14] = src[14];
		dst[15] = src[15];

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#equals
	 * @description Reports whether two matrices are equal.
	 * @param {pc.Mat4} rhs The other matrix.
	 * @returns {Boolean} true if the matrices are equal and false otherwise.
	 * @example
	 * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 * var b = new pc.Mat4();
	 * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
	 */
	equals(rhs: Mat4): boolean {
		var l = this.data,
			r = rhs.data;

		return ((l[0] === r[0]) &&
				(l[1] === r[1]) &&
				(l[2] === r[2]) &&
				(l[3] === r[3]) &&
				(l[4] === r[4]) &&
				(l[5] === r[5]) &&
				(l[6] === r[6]) &&
				(l[7] === r[7]) &&
				(l[8] === r[8]) &&
				(l[9] === r[9]) &&
				(l[10] === r[10]) &&
				(l[11] === r[11]) &&
				(l[12] === r[12]) &&
				(l[13] === r[13]) &&
				(l[14] === r[14]) &&
				(l[15] === r[15]));
	}

	/**
	 * @function
	 * @name pc.Mat4#isIdentity
	 * @description Reports whether the specified matrix is the identity matrix.
	 * @returns {Boolean} true if the matrix is identity and false otherwise.
	 * @example
	 * var m = new pc.Mat4();
	 * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
	 */
	isIdentity(): boolean {
		var m = this.data;

		return ((m[0] === 1) &&
				(m[1] === 0) &&
				(m[2] === 0) &&
				(m[3] === 0) &&
				(m[4] === 0) &&
				(m[5] === 1) &&
				(m[6] === 0) &&
				(m[7] === 0) &&
				(m[8] === 0) &&
				(m[9] === 0) &&
				(m[10] === 1) &&
				(m[11] === 0) &&
				(m[12] === 0) &&
				(m[13] === 0) &&
				(m[14] === 0) &&
				(m[15] === 1));
	}

	/**
	 * @function
	 * @name pc.Mat4#mul2
	 * @description Multiplies the specified 4x4 matrices together and stores the result in
	 * the current instance.
	 * @param {pc.Mat4} lhs The 4x4 matrix used as the first multiplicand of the operation.
	 * @param {pc.Mat4} rhs The 4x4 matrix used as the second multiplicand of the operation.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
	 * var r = new pc.Mat4();
	 *
	 * // r = a * b
	 * r.mul2(a, b);
	 *
	 * console.log("The result of the multiplication is: " r.toString());
	 */
	mul2(lhs: Mat4, rhs: Mat4): Mat4 {
		var a = lhs.data;
		var b = rhs.data;
		var r = this.data;

		var a00 = a[0];
		var a01 = a[1];
		var a02 = a[2];
		var a03 = a[3];
		var a10 = a[4];
		var a11 = a[5];
		var a12 = a[6];
		var a13 = a[7];
		var a20 = a[8];
		var a21 = a[9];
		var a22 = a[10];
		var a23 = a[11];
		var a30 = a[12];
		var a31 = a[13];
		var a32 = a[14];
		var a33 = a[15];

		var b0 = b[0];
		var b1 = b[1];
		var b2 = b[2];
		var b3 = b[3];
		r[0]  = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
		r[1]  = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
		r[2]  = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
		r[3]  = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;

		b0 = b[4];
		b1 = b[5];
		b2 = b[6];
		b3 = b[7];
		r[4]  = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
		r[5]  = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
		r[6]  = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
		r[7]  = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;

		b0 = b[8];
		b1 = b[9];
		b2 = b[10];
		b3 = b[11];
		r[8]  = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
		r[9]  = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
		r[10] = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
		r[11] = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;

		b0 = b[12];
		b1 = b[13];
		b2 = b[14];
		b3 = b[15];
		r[12] = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
		r[13] = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
		r[14] = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
		r[15] = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#mul
	 * @description Multiplies the current instance by the specified 4x4 matrix.
	 * @param {pc.Mat4} rhs The 4x4 matrix used as the second multiplicand of the operation.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
	 *
	 * // a = a * b
	 * a.mul(b);
	 *
	 * console.log("The result of the multiplication is: " a.toString());
	 */
	mul(rhs: Mat4): Mat4 {
		return this.mul2(this, rhs);
	}
	
}

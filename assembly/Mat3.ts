export class Mat3 {
	data: Float32Array;

	constructor() {
		// Create an identity matrix. Note that a new Float32Array has all elements set
		// to zero by default, so we only need to set the relevant elements to one.
		var data = new Float32Array(9);
		data[0] = data[4] = data[8] = 1;
		this.data = data;
	}

	clone(): Mat3 {
		var tmp = new Mat3();
		tmp.copy(this);
		return tmp;
	}

	copy(rhs: Mat3): Mat3 {
		var src = rhs.data;
		var dst = this.data;

		dst[0] = src[0];
		dst[1] = src[1];
		dst[2] = src[2];
		dst[3] = src[3];
		dst[4] = src[4];
		dst[5] = src[5];
		dst[6] = src[6];
		dst[7] = src[7];
		dst[8] = src[8];

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat3#set
	 * @description Copies the contents of a source array[9] to a destination 3x3 matrix.
	 * @param {Array} src An array[9] to be copied.
	 * @returns {pc.Mat3} Self for chaining
	 * @example
	 * var src = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	 * var dst = new pc.Mat3();
	 * dst.copy(src);
	 */
	//set(src: any): Mat3 {
	//	var dst = this.data;
    //
	//	dst[0] = src[0];
	//	dst[1] = src[1];
	//	dst[2] = src[2];
	//	dst[3] = src[3];
	//	dst[4] = src[4];
	//	dst[5] = src[5];
	//	dst[6] = src[6];
	//	dst[7] = src[7];
	//	dst[8] = src[8];
    //
	//	return this;
	//}

	/**
	 * @function
	 * @name pc.Mat3#equals
	 * @param {pc.Mat3} rhs The other matrix.
	 * @description Reports whether two matrices are equal.
	 * @returns {Boolean} true if the matrices are equal and false otherwise.
	 * @example
	 * var a = new pc.Mat3().translate(10, 20, 30);
	 * var b = new pc.Mat3();
	 * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
	 */
	equals(rhs: Mat3): boolean {
		var l = this.data;
		var r = rhs.data;

		return ((l[0] === r[0]) &&
				(l[1] === r[1]) &&
				(l[2] === r[2]) &&
				(l[3] === r[3]) &&
				(l[4] === r[4]) &&
				(l[5] === r[5]) &&
				(l[6] === r[6]) &&
				(l[7] === r[7]) &&
				(l[8] === r[8]));
	}

	/**
	 * @function
	 * @name pc.Mat3#isIdentity
	 * @description Reports whether the specified matrix is the identity matrix.
	 * @returns {Boolean} true if the matrix is identity and false otherwise.
	 * @example
	 * var m = new pc.Mat3();
	 * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
	 */
	isIdentity(): boolean {
		var m = this.data;
		return ((m[0] === 1) &&
				(m[1] === 0) &&
				(m[2] === 0) &&
				(m[3] === 0) &&
				(m[4] === 1) &&
				(m[5] === 0) &&
				(m[6] === 0) &&
				(m[7] === 0) &&
				(m[8] === 1));
	}

	/**
	 * @function
	 * @name pc.Mat3#setIdentity
	 * @description Sets the matrix to the identity matrix.
	 * @returns {pc.Mat3} Self for chaining.
	 * @example
	 * m.setIdentity();
	 * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
	 */
	setIdentity(): Mat3 {
		var m = this.data;
		m[0] = 1;
		m[1] = 0;
		m[2] = 0;

		m[3] = 0;
		m[4] = 1;
		m[5] = 0;

		m[6] = 0;
		m[7] = 0;
		m[8] = 1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat3#toString
	 * @description Converts the matrix to string form.
	 * @returns {String} The matrix in string form.
	 * @example
	 * var m = new pc.Mat3();
	 * // Should output '[1, 0, 0, 0, 1, 0, 0, 0, 1]'
	 * console.log(m.toString());
	 */
	//toString(): string {
	//	var t = '[';
	//	for (var i = 0; i < 9; i++) {
	//		t += this.data[i];
	//		t += (i !== 9) ? ', ' : '';
	//	}
	//	t += ']';
	//	return t;
	//}

	/**
	 * @function
	 * @name pc.Mat3#transpose
	 * @description Generates the transpose of the specified 3x3 matrix.
	 * @returns {pc.Mat3} Self for chaining.
	 * @example
	 * var m = new pc.Mat3();
	 *
	 * // Transpose in place
	 * m.transpose();
	 */
	transpose(): Mat3 {
		var m = this.data;

		var tmp: f32;
		tmp = m[1]; m[1] = m[3]; m[3] = tmp;
		tmp = m[2]; m[2] = m[6]; m[6] = tmp;
		tmp = m[5]; m[5] = m[7]; m[7] = tmp;

		return this;
	}
}

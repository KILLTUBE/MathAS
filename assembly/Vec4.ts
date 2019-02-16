export class Vec4 {
	x: f32;
	y: f32;
	z: f32;
	w: f32;

	constructor(x: f32, y: f32, z: f32, w: f32) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}

	/**
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

	/**
	 * @description Adds two 4-dimensional vectors together and returns the result.
	 * @param {pc.Vec4} lhs The first vector operand for the addition.
	 * @param {pc.Vec4} rhs The second vector operand for the addition.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(10, 10, 10, 10);
	 * var b = new pc.Vec4(20, 20, 20, 20);
	 * var r = new pc.Vec4();
	 * r.add2(a, b);
	 * console.log("The result of the addition is: " + r.toString()); // Should output [30, 30, 30]
	 */

	add2(lhs: Vec4, rhs: Vec4): Vec4 {
		this.x = lhs.x + rhs.x;
		this.y = lhs.y + rhs.y;
		this.z = lhs.z + rhs.z;
		this.w = lhs.w + rhs.w;
		return this;
	}

	/**
	 * @description Returns an identical copy of the specified 4-dimensional vector.
	 * @returns {pc.Vec4} A 4-dimensional vector containing the result of the cloning.
	 * @example
	 * var v = new pc.Vec4(10, 20, 30, 40);
	 * var vclone = v.clone();
	 * console.log("The result of the cloning is: " + vclone.toString());
	 */

	clone(): Vec4 {
		// original: return new Vec4().copy(this);
		var tmp = new Vec4(0, 0, 0, 0);
		tmp.copy(this);
		return tmp;
	}

	/**
	 * @description Copied the contents of a source 4-dimensional vector to a destination 4-dimensional vector.
	 * @param {pc.Vec4} rhs A vector to copy to the specified vector.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var src = new pc.Vec4(10, 20, 30, 40);
	 * var dst = new pc.Vec4();
	 * dst.copy(src);
	 * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
	 */

	copy(rhs: Vec4): Vec4 {
		this.x = rhs.x;
		this.y = rhs.y;
		this.z = rhs.z;
		this.w = rhs.w;
		return this;
	}

	/**
	 * @description Returns the result of a dot product operation performed on the two specified 4-dimensional vectors.
	 * @param {pc.Vec4} rhs The second 4-dimensional vector operand of the dot product.
	 * @returns {f32} The result of the dot product operation.
	 * @example
	 * var v1 = new pc.Vec4(5, 10, 20, 40);
	 * var v2 = new pc.Vec4(10, 20, 40, 80);
	 * var v1dotv2 = v1.dot(v2);
	 * console.log("The result of the dot product is: " + v1dotv2);
	 */

	dot(rhs: Vec4): f32 {
		return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z + this.w * rhs.w;
	}

	/**
	 * @description Reports whether two vectors are equal.
	 * @param {pc.Vec4} rhs The vector to compare to the specified vector.
	 * @returns {Boolean} true if the vectors are equal and false otherwise.
	 * @example
	 * var a = new pc.Vec4(1, 2, 3, 4);
	 * var b = new pc.Vec4(5, 6, 7, 8);
	 * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
	 */

	equals(rhs: Vec4): boolean {
		return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z && this.w === rhs.w;
	}

	/**
	 * @description Returns the magnitude of the specified 4-dimensional vector.
	 * @returns {f32} The magnitude of the specified 4-dimensional vector.
	 * @example
	 * var vec = new pc.Vec4(3, 4, 0, 0);
	 * var len = vec.length();
	 * // Should output 5
	 * console.log("The length of the vector is: " + len);
	 */

	length(): f32 {
		return Mathf.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}

	/**
	 * @description Returns the magnitude squared of the specified 4-dimensional vector.
	 * @returns {f32} The magnitude of the specified 4-dimensional vector.
	 * @example
	 * var vec = new pc.Vec4(3, 4, 0);
	 * var len = vec.lengthSq();
	 * console.log("The length squared of the vector is: " + len); // Should output 25
	 */

	lengthSq(): f32 {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}

	/**
	 * @description Returns the result of a linear interpolation between two specified 4-dimensional vectors.
	 * @param {pc.Vec4} lhs The 4-dimensional to interpolate from.
	 * @param {pc.Vec4} rhs The 4-dimensional to interpolate to.
	 * @param {f32} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
	 * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
	 * a ray extrapolated from this line.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(0, 0, 0, 0);
	 * var b = new pc.Vec4(10, 10, 10, 10);
	 * var r = new pc.Vec4();
	 * r.lerp(a, b, 0);   // r is equal to a
	 * r.lerp(a, b, 0.5); // r is 5, 5, 5, 5
	 * r.lerp(a, b, 1);   // r is equal to b
	 */

	lerp(lhs: Vec4, rhs: Vec4, alpha: f32): Vec4 {
		this.x = lhs.x + alpha * (rhs.x - lhs.x);
		this.y = lhs.y + alpha * (rhs.y - lhs.y);
		this.z = lhs.z + alpha * (rhs.z - lhs.z);
		this.w = lhs.w + alpha * (rhs.w - lhs.w);
		return this;
	}

	/**
	 * @description Multiplies a 4-dimensional vector to another in place.
	 * @param {pc.Vec4} rhs The 4-dimensional vector used as the second multiplicand of the operation.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(2, 3, 4, 5);
	 * var b = new pc.Vec4(4, 5, 6, 7);
	 * a.mul(b);
	 * console.log("The result of the multiplication is: " + a.toString()); // Should output 8, 15, 24, 35
	 */

	mul(rhs: Vec4): Vec4 {
		this.x *= rhs.x;
		this.y *= rhs.y;
		this.z *= rhs.z;
		this.w *= rhs.w;
		return this;
	}

	/**
	 * @description Returns the result of multiplying the specified 4-dimensional vectors together.
	 * @param {pc.Vec4} lhs The 4-dimensional vector used as the first multiplicand of the operation.
	 * @param {pc.Vec4} rhs The 4-dimensional vector used as the second multiplicand of the operation.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(2, 3, 4, 5);
	 * var b = new pc.Vec4(4, 5, 6, 7);
	 * var r = new pc.Vec4();
	 * r.mul2(a, b);
	 * console.log("The result of the multiplication is: " + r.toString()); // Should output 8, 15, 24, 35
	 */

	mul2(lhs: Vec4, rhs: Vec4): Vec4 {
		this.x = lhs.x * rhs.x;
		this.y = lhs.y * rhs.y;
		this.z = lhs.z * rhs.z;
		this.w = lhs.w * rhs.w;
		return this;
	}

	/**
	 * @description Returns the specified 4-dimensional vector copied and converted to a unit vector.
	 * If the vector has a length of zero, the vector's elements will be set to zero.
	 * @returns {pc.Vec4} The result of the normalization.
	 * @example
	 * var v = new pc.Vec4(25, 0, 0, 0);
	 * v.normalize();
	 * console.log("The result of the vector normalization is: " + v.toString()); // Should output 1, 0, 0, 0
	 */

	normalize(): Vec4 {
		var lengthSq = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
		if (lengthSq > 0.0) {
			var invLength: f32 = 1.0 / Mathf.sqrt(lengthSq);
			this.x *= invLength;
			this.y *= invLength;
			this.z *= invLength;
			this.w *= invLength;
		}
		return this;
	}

	/**
	 * @description Scales each dimension of the specified 4-dimensional vector by the supplied
	 * scalar value.
	 * @param {f32} scalar The value by which each vector component is multiplied.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var v = new pc.Vec4(2, 4, 8, 16);
	 * v.scale(2); // Multiply by 2
	 * v.scale(-1); // Negate
	 * v.scale(0.5); // Divide by 2
	 */

	scale(scalar: f32): Vec4 {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;
		return this;
	}

	/**
	 * @description Sets the specified 4-dimensional vector to the supplied numerical values.
	 * @param {f32} x The value to set on the first component of the vector.
	 * @param {f32} y The value to set on the second component of the vector.
	 * @param {f32} z The value to set on the third component of the vector.
	 * @param {f32} w The value to set on the fourth component of the vector.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var v = new pc.Vec4();
	 * v.set(5, 10, 20, 40);
	 * console.log("The result of the vector set is: " + v.toString()); // Should output 5, 10, 20, 40
	 */

	set(x: f32, y: f32, z: f32, w: f32): Vec4 {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		return this;
	}

	/**
	 * @description Subtracts a 4-dimensional vector from another in place.
	 * @param {pc.Vec4} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(10, 10, 10, 10);
	 * var b = new pc.Vec4(20, 20, 20, 20);
	 * a.sub(b);
	 * console.log("The result of the subtraction is: " + a.toString()); // Should output [-10, -10, -10, -10]
	 */

	sub(rhs: Vec4): Vec4 {
		this.x -= rhs.x;
		this.y -= rhs.y;
		this.z -= rhs.z;
		this.w -= rhs.w;
		return this;
	}

	/**
	 * @description Subtracts two 4-dimensional vectors from one another and returns the result.
	 * @param {pc.Vec4} lhs The first vector operand for the subtraction.
	 * @param {pc.Vec4} rhs The second vector operand for the subtraction.
	 * @returns {pc.Vec4} Self for chaining.
	 * @example
	 * var a = new pc.Vec4(10, 10, 10, 10);
	 * var b = new pc.Vec4(20, 20, 20, 20);
	 * var r = new pc.Vec4();
	 * r.sub2(a, b);
	 * console.log("The result of the subtraction is: " + r.toString()); // Should output [-10, -10, -10, -10]
	 */

	sub2(lhs: Vec4, rhs: Vec4): Vec4 {
		this.x = lhs.x - rhs.x;
		this.y = lhs.y - rhs.y;
		this.z = lhs.z - rhs.z;
		this.w = lhs.w - rhs.w;
		return this;
	}
}

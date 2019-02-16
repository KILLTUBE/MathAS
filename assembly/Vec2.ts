export class Vec2 {
	x: f32;
	y: f32;

	constructor(x: f32, y: f32) {
		this.x = x;
		this.y = y;
	}

	/**
	 * @description Adds a 2-dimensional vector to another in place.
	 * @param {pc.Vec2} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(10, 10);
	 * var b = new pc.Vec2(20, 20);
	 * a.add(b);
	 * console.log("The result of the addition is: " + a.toString()); // Should output [30, 30]
	 */
	 
	add(rhs: Vec2): Vec2 {
		this.x += rhs.x;
		this.y += rhs.y;
		return this;
	}

	/**
	 * @description Adds two 2-dimensional vectors together and returns the result.
	 * @param {pc.Vec2} lhs The first vector operand for the addition.
	 * @param {pc.Vec2} rhs The second vector operand for the addition.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(10, 10);
	 * var b = new pc.Vec2(20, 20);
	 * var r = new pc.Vec2();
	 * r.add2(a, b);
	 * console.log("The result of the addition is: " + r.toString()); // Should output [30, 30]
	 */

	add2(lhs: Vec2, rhs: Vec2): Vec2 {
		this.x = lhs.x + rhs.x;
		this.y = lhs.y + rhs.y;
		return this;
	}

	/**
	 * @description Returns an identical copy of the specified 2-dimensional vector.
	 * @returns {pc.Vec2} A 2-dimensional vector containing the result of the cloning.
	 * @example
	 * var v = new pc.Vec2(10, 20);
	 * var vclone = v.clone();
	 * console.log("The result of the cloning is: " + vclone.toString());
	 */
	clone(): Vec2 {
		// original, AS doesn't support yet: return new Vec2().copy(this);
		var tmp = new Vec2(0, 0);
		tmp.copy(this);
		return tmp;
	}

	/**
	 * @description Copied the contents of a source 2-dimensional vector to a destination 2-dimensional vector.
	 * @param {pc.Vec2} rhs A vector to copy to the specified vector.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var src = new pc.Vec2(10, 20);
	 * var dst = new pc.Vec2();
	 * dst.copy(src);
	 * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
	 */
	 
	copy(rhs: Vec2): Vec2 {
		this.x = rhs.x;
		this.y = rhs.y;
		return this;
	}

	/**
	 * @description Returns the result of a dot product operation performed on the two specified 2-dimensional vectors.
	 * @param {pc.Vec2} rhs The second 2-dimensional vector operand of the dot product.
	 * @returns {f32} The result of the dot product operation.
	 * @example
	 * var v1 = new pc.Vec2(5, 10);
	 * var v2 = new pc.Vec2(10, 20);
	 * var v1dotv2 = v1.dot(v2);
	 * console.log("The result of the dot product is: " + v1dotv2);
	 */
	 
	dot(rhs: Vec2): f32 {
		return this.x * rhs.x + this.y * rhs.y;
	}

	/**
	 * @description Reports whether two vectors are equal.
	 * @param {pc.Vec2} rhs The vector to compare to the specified vector.
	 * @returns {Boolean} true if the vectors are equal and false otherwise.
	 * @example
	 * var a = new pc.Vec2(1, 2);
	 * var b = new pc.Vec2(4, 5);
	 * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
	 */

	equals(rhs: Vec2): boolean {
		return this.x === rhs.x && this.y === rhs.y;
	}

	/**
	 * @description Returns the magnitude of the specified 2-dimensional vector.
	 * @returns {Number} The magnitude of the specified 2-dimensional vector.
	 * @example
	 * var vec = new pc.Vec2(3, 4);
	 * var len = vec.length();
	 * // Should output 5
	 * console.log("The length of the vector is: " + len);
	 */

	length(): f32 {
		return Mathf.sqrt(this.x * this.x + this.y * this.y);
	}

	/**
	 * @description Returns the magnitude squared of the specified 2-dimensional vector.
	 * @returns {f32} The magnitude of the specified 2-dimensional vector.
	 * @example
	 * var vec = new pc.Vec2(3, 4);
	 * var len = vec.lengthSq();
	 * // Should output 25
	 * console.log("The length squared of the vector is: " + len);
	 */

	lengthSq(): f32 {
		return this.x * this.x + this.y * this.y;
	}

	/**
	 * @description Returns the result of a linear interpolation between two specified 2-dimensional vectors.
	 * @param {pc.Vec2} lhs The 2-dimensional to interpolate from.
	 * @param {pc.Vec2} rhs The 2-dimensional to interpolate to.
	 * @param {f32} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
	 * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
	 * a ray extrapolated from this line.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(0, 0);
	 * var b = new pc.Vec2(10, 10);
	 * var r = new pc.Vec2();
	 *
	 * r.lerp(a, b, 0);   // r is equal to a
	 * r.lerp(a, b, 0.5); // r is 5, 5
	 * r.lerp(a, b, 1);   // r is equal to b
	 */

	lerp(lhs: Vec2, rhs: Vec2, alpha: f32): Vec2 {
		this.x = lhs.x + alpha * (rhs.x - lhs.x);
		this.y = lhs.y + alpha * (rhs.y - lhs.y);
		return this;
	}

	/**
	 * @description Multiplies a 2-dimensional vector to another in place.
	 * @param {pc.Vec2} rhs The 2-dimensional vector used as the second multiplicand of the operation.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(2, 3);
	 * var b = new pc.Vec2(4, 5);
	 * a.mul(b);
	 * console.log("The result of the multiplication is: " + a.toString()); // Should output 8, 15
	 */

	mul(rhs: Vec2): Vec2 {
		this.x *= rhs.x;
		this.y *= rhs.y;
		return this;
	}

	/**
	 * @description Returns the result of multiplying the specified 2-dimensional vectors together.
	 * @param {pc.Vec2} lhs The 2-dimensional vector used as the first multiplicand of the operation.
	 * @param {pc.Vec2} rhs The 2-dimensional vector used as the second multiplicand of the operation.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(2, 3);
	 * var b = new pc.Vec2(4, 5);
	 * var r = new pc.Vec2();
	 * r.mul2(a, b);
	 * console.log("The result of the multiplication is: " + r.toString()); // Should output 8, 15
	 */

	mul2(lhs: Vec2, rhs: Vec2): Vec2 {
		this.x = lhs.x * rhs.x;
		this.y = lhs.y * rhs.y;
		return this;
	}

	/**
	 * @description Returns the specified 2-dimensional vector copied and converted to a unit vector.
	 * If the vector has a length of zero, the vector's elements will be set to zero.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var v = new pc.Vec2(25, 0);
	 * v.normalize();
	 * console.log("The result of the vector normalization is: " + v.toString()); // Should output 1, 0
	 */

	normalize(): Vec2 {
		var lengthSq = this.x * this.x + this.y * this.y;
		if (lengthSq > 0.0) {
			var invLength: f32 = 1.0 / Mathf.sqrt(lengthSq);
			this.x *= invLength;
			this.y *= invLength;
		}
		return this;
	}

	/**
	 * @description Scales each component of the specified 2-dimensional vector by the supplied
	 * scalar value.
	 * @param {f32} scalar The value by which each vector component is multiplied.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var v = new pc.Vec2(2, 4);
	 *
	 * // Multiply by 2
	 * v.scale(2);
	 *
	 * // Negate
	 * v.scale(-1);
	 *
	 * // Divide by 2
	 * v.scale(0.5);
	 */

	scale(scalar: f32): Vec2 {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	/**
	 * @function
	 * @name pc.Vec2#set
	 * @description Sets the specified 2-dimensional vector to the supplied numerical values.
	 * @param {f32} x The value to set on the first component of the vector.
	 * @param {f32} y The value to set on the second component of the vector.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var v = new pc.Vec2();
	 * v.set(5, 10);
	 *
	 * // Should output 5, 10
	 * console.log("The result of the vector set is: " + v.toString());
	 */
	set(x: f32, y: f32): Vec2 {
		this.x = x;
		this.y = y;

		return this;
	}

	/**
	 * @description Subtracts a 2-dimensional vector from another in place.
	 * @param {pc.Vec2} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(10, 10);
	 * var b = new pc.Vec2(20, 20);
	 * a.sub(b);
	 * console.log("The result of the addition is: " + a.toString()); // Should output [-10, -10]
	 */
	 
	sub(rhs: Vec2): Vec2 {
		this.x -= rhs.x;
		this.y -= rhs.y;
		return this;
	}

	/**
	 * @description Subtracts two 2-dimensional vectors from one another and returns the result.
	 * @param {pc.Vec2} lhs The first vector operand for the addition.
	 * @param {pc.Vec2} rhs The second vector operand for the addition.
	 * @returns {pc.Vec2} Self for chaining.
	 * @example
	 * var a = new pc.Vec2(10, 10);
	 * var b = new pc.Vec2(20, 20);
	 * var r = new pc.Vec2();
	 * r.sub2(a, b);
	 * console.log("The result of the addition is: " + r.toString()); // Should output [-10, -10]
	 */

	sub2(lhs: Vec2, rhs: Vec2): Vec2 {
		this.x = lhs.x - rhs.x;
		this.y = lhs.y - rhs.y;
		return this;
	}
}

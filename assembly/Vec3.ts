export class Vec3 {
	x: f32;
	y: f32;
	z: f32;

	constructor(x: f32, y: f32, z: f32) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * @description Adds a 3-dimensional vector to another in place.
	 * @param {pc.Vec3} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(10, 10, 10);
	 * var b = new pc.Vec3(20, 20, 20);
	 * a.add(b);
	 * console.log("The result of the addition is: " + a.toString()); // Should output [30, 30, 30]
	 */
	 
	add(rhs: Vec3): Vec3 {
		this.x += rhs.x;
		this.y += rhs.y;
		this.z += rhs.z;
		return this;
	}

	/**
	 * @description Adds two 3-dimensional vectors together and returns the result.
	 * @param {pc.Vec3} lhs The first vector operand for the addition.
	 * @param {pc.Vec3} rhs The second vector operand for the addition.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(10, 10, 10);
	 * var b = new pc.Vec3(20, 20, 20);
	 * var r = new pc.Vec3();
	 * r.add2(a, b);
	 * console.log("The result of the addition is: " + r.toString()); // Should output [30, 30, 30]
	 */

	add2(lhs: Vec3, rhs: Vec3): Vec3 {
		this.x = lhs.x + rhs.x;
		this.y = lhs.y + rhs.y;
		this.z = lhs.z + rhs.z;
		return this;
	}
	
	/**
	 * @description Returns an identical copy of the specified 3-dimensional vector.
	 * @returns {pc.Vec3} A 3-dimensional vector containing the result of the cloning.
	 * @example
	 * var v = new pc.Vec3(10, 20, 30);
	 * var vclone = v.clone();
	 * console.log("The result of the cloning is: " + vclone.toString());
	 */

	clone(): Vec3 {
		var tmp = new Vec3(0, 0, 0);
		tmp.copy(this);
		return tmp;
	}

	/**
	 * @description Copied the contents of a source 3-dimensional vector to a destination 3-dimensional vector.
	 * @param {pc.Vec3} rhs A vector to copy to the specified vector.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var src = new pc.Vec3(10, 20, 30);
	 * var dst = new pc.Vec3();
	 * dst.copy(src);
	 * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
	 */

	copy(rhs: Vec3): Vec3 {
		this.x = rhs.x;
		this.y = rhs.y;
		this.z = rhs.z;
		return this;
	}

	/**
	 * @description Returns the result of a cross product operation performed on the two specified 3-dimensional vectors.
	 * @param {pc.Vec3} lhs The first 3-dimensional vector operand of the cross product.
	 * @param {pc.Vec3} rhs The second 3-dimensional vector operand of the cross product.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var back = new pc.Vec3().cross(pc.Vec3.RIGHT, pc.Vec3.UP);
	 * // Should print the Z axis (i.e. [0, 0, 1])
	 * console.log("The result of the cross product is: " + back.toString());
	 */

	cross(lhs: Vec3, rhs: Vec3): Vec3 {
		// Create temporary variables in case lhs or rhs are 'this'
		var lx = lhs.x;
		var ly = lhs.y;
		var lz = lhs.z;
		var rx = rhs.x;
		var ry = rhs.y;
		var rz = rhs.z;
		this.x = ly * rz - ry * lz;
		this.y = lz * rx - rz * lx;
		this.z = lx * ry - rx * ly;
		return this;
	}

	/**
	 * @description Returns the result of a dot product operation performed on the two specified 3-dimensional vectors.
	 * @param {pc.Vec3} rhs The second 3-dimensional vector operand of the dot product.
	 * @returns {f32} The result of the dot product operation.
	 * @example
	 * var v1 = new pc.Vec3(5, 10, 20);
	 * var v2 = new pc.Vec3(10, 20, 40);
	 * var v1dotv2 = v1.dot(v2);
	 * console.log("The result of the dot product is: " + v1dotv2);
	 */

	dot(rhs: Vec3): f32 {
		return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
	}

	/**
	 * @description Reports whether two vectors are equal.
	 * @param {pc.Vec3} rhs The vector to compare to the specified vector.
	 * @returns {Boolean} true if the vectors are equal and false otherwise.
	 * @example
	 * var a = new pc.Vec3(1, 2, 3);
	 * var b = new pc.Vec3(4, 5, 6);
	 * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
	 */

	equals(rhs: Vec3): boolean {
		return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z;
	}

	/**
	 * @description Returns the magnitude of the specified 3-dimensional vector.
	 * @returns {f32} The magnitude of the specified 3-dimensional vector.
	 * @example
	 * var vec = new pc.Vec3(3, 4, 0);
	 * var len = vec.length();
	 * console.log("The length of the vector is: " + len); // Should output 5
	 */

	length(): f32 {
		return Mathf.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	/**
	 * @description Returns the magnitude squared of the specified 3-dimensional vector.
	 * @returns {f32} The magnitude of the specified 3-dimensional vector.
	 * @example
	 * var vec = new pc.Vec3(3, 4, 0);
	 * var len = vec.lengthSq();
	 * // Should output 25
	 * console.log("The length squared of the vector is: " + len);
	 */

	lengthSq(): f32 {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	/**
	 * @function
	 * @name pc.Vec3#lerp
	 * @description Returns the result of a linear interpolation between two specified 3-dimensional vectors.
	 * @param {pc.Vec3} lhs The 3-dimensional to interpolate from.
	 * @param {pc.Vec3} rhs The 3-dimensional to interpolate to.
	 * @param {f32} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
	 * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
	 * a ray extrapolated from this line.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(0, 0, 0);
	 * var b = new pc.Vec3(10, 10, 10);
	 * var r = new pc.Vec3();
	 *
	 * r.lerp(a, b, 0);   // r is equal to a
	 * r.lerp(a, b, 0.5); // r is 5, 5, 5
	 * r.lerp(a, b, 1);   // r is equal to b
	 */
	lerp(lhs: Vec3, rhs: Vec3, alpha: f32): Vec3 {
		this.x = lhs.x + alpha * (rhs.x - lhs.x);
		this.y = lhs.y + alpha * (rhs.y - lhs.y);
		this.z = lhs.z + alpha * (rhs.z - lhs.z);

		return this;
	}

	/**
	 * @function
	 * @name pc.Vec3#mul
	 * @description Multiplies a 3-dimensional vector to another in place.
	 * @param {pc.Vec3} rhs The 3-dimensional vector used as the second multiplicand of the operation.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(2, 3, 4);
	 * var b = new pc.Vec3(4, 5, 6);
	 *
	 * a.mul(b);
	 *
	 * // Should output 8, 15, 24
	 * console.log("The result of the multiplication is: " + a.toString());
	 */
	mul(rhs: Vec3): Vec3 {
		this.x *= rhs.x;
		this.y *= rhs.y;
		this.z *= rhs.z;

		return this;
	}

	/**
	 * @function
	 * @name pc.Vec3#mul2
	 * @description Returns the result of multiplying the specified 3-dimensional vectors together.
	 * @param {pc.Vec3} lhs The 3-dimensional vector used as the first multiplicand of the operation.
	 * @param {pc.Vec3} rhs The 3-dimensional vector used as the second multiplicand of the operation.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(2, 3, 4);
	 * var b = new pc.Vec3(4, 5, 6);
	 * var r = new pc.Vec3();
	 *
	 * r.mul2(a, b);
	 *
	 * // Should output 8, 15, 24
	 * console.log("The result of the multiplication is: " + r.toString());
	 */
	mul2(lhs: Vec3, rhs: Vec3): Vec3 {
		this.x = lhs.x * rhs.x;
		this.y = lhs.y * rhs.y;
		this.z = lhs.z * rhs.z;

		return this;
	}

	/**
	 * @description Returns the specified 3-dimensional vector copied and converted to a unit vector.
	 * If the vector has a length of zero, the vector's elements will be set to zero.
	 * @returns {pc.Vec3} The result of the normalization.
	 * @example
	 * var v = new pc.Vec3(25, 0, 0);
	 * v.normalize();
	 * console.log("The result of the vector normalization is: " + v.toString()); // Should output 1, 0, 0, 0
	 */

	normalize(): Vec3 {
		var lengthSq = this.x * this.x + this.y * this.y + this.z * this.z;
		if (lengthSq > 0.0) {
			var invLength: f32 = 1.0 / Mathf.sqrt(lengthSq);
			this.x *= invLength;
			this.y *= invLength;
			this.z *= invLength;
		}
		return this;
	}

	/**
	 * @description Projects this 3-dimensional vector onto the specified vector.
	 * @param {pc.Vec3} rhs The vector onto which the original vector will be projected on.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var v = new pc.Vec3(5, 5, 5);
	 * var normal = new pc.Vec3(1, 0, 0);
	 * v.project(normal);
	 * console.log("The result of the vector projection is: " + v.toString()); // Should output 5, 0, 0
	 */

	project(rhs: Vec3): Vec3 {
		var a_dot_b = this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
		var b_dot_b = rhs.x * rhs.x + rhs.y * rhs.y + rhs.z * rhs.z;
		var s = a_dot_b / b_dot_b;
		this.x = rhs.x * s;
		this.y = rhs.y * s;
		this.z = rhs.z * s;
		return this;
	}

	/**
	 * @description Scales each dimension of the specified 3-dimensional vector by the supplied
	 * scalar value.
	 * @param {f32} scalar The value by which each vector component is multiplied.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var v = new pc.Vec3(2, 4, 8);
	 * v.scale(2); // Multiply by 2
	 * v.scale(-1); // Negate
	 * v.scale(0.5); // Divide by 2
	 */

	scale(scalar: f32): Vec3 {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	/**
	 * @description Sets the specified 3-dimensional vector to the supplied numerical values.
	 * @param {f32} x The value to set on the first component of the vector.
	 * @param {f32} y The value to set on the second component of the vector.
	 * @param {f32} z The value to set on the third component of the vector.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var v = new pc.Vec3();
	 * v.set(5, 10, 20);
	 * console.log("The result of the vector set is: " + v.toString()); // Should output 5, 10, 20
	 */

	set(x: f32, y: f32, z: f32): Vec3 {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	/**
	 * @description Subtracts a 3-dimensional vector from another in place.
	 * @param {pc.Vec3} rhs The vector to add to the specified vector.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(10, 10, 10);
	 * var b = new pc.Vec3(20, 20, 20);
	 * a.sub(b);
	 * console.log("The result of the addition is: " + a.toString()); // Should output [-10, -10, -10]
	 */

	sub(rhs: Vec3): Vec3 {
		this.x -= rhs.x;
		this.y -= rhs.y;
		this.z -= rhs.z;
		return this;
	}

	/**
	 * @description Subtracts two 3-dimensional vectors from one another and returns the result.
	 * @param {pc.Vec3} lhs The first vector operand for the addition.
	 * @param {pc.Vec3} rhs The second vector operand for the addition.
	 * @returns {pc.Vec3} Self for chaining.
	 * @example
	 * var a = new pc.Vec3(10, 10, 10);
	 * var b = new pc.Vec3(20, 20, 20);
	 * var r = new pc.Vec3();
	 * r.sub2(a, b);
	 * console.log("The result of the addition is: " + r.toString()); // Should output [-10, -10, -10]
	 */

	sub2(lhs: Vec3, rhs: Vec3): Vec3 {
		this.x = lhs.x - rhs.x;
		this.y = lhs.y - rhs.y;
		this.z = lhs.z - rhs.z;
		return this;
	}
}

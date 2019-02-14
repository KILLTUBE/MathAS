import {Vec3} from "./Vec3";
import {Mat4} from "./Mat4";
import {pc_math} from "./Math"

/**
 * @constructor
 * @name pc.Quat
 * @classdesc A quaternion.
 * @description Create a new Quat object.
 * @param {f32} [x] The quaternion's x component. Default value 0. If x is an array of length 4, the array will be used to populate all components.
 * @param {f32} [y] The quaternion's y component. Default value 0.
 * @param {f32} [z] The quaternion's z component. Default value 0.
 * @param {f32} [w] The quaternion's w component. Default value 1.
 */
export class Quat {
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
		//	this.x = (x === undefined) ? 0 : x;
		//	this.y = (y === undefined) ? 0 : y;
		//	this.z = (z === undefined) ? 0 : z;
		//	this.w = (w === undefined) ? 1 : w;
		//}
	}
	
    /**
     * @field
     * @type Number
     * @name pc.Quat#x
     * @description The x component of the quaternion.
     * @example
     * var quat = new pc.Quat();
     *
     * // Get x
     * var x = quat.x;
     *
     * // Set x
     * quat.x = 0;
     */
    /**
     * @field
     * @type Number
     * @name pc.Quat#y
     * @description The y component of the quaternion.
     * @example
     * var quat = new pc.Quat();
     *
     * // Get y
     * var y = quat.y;
     *
     * // Set y
     * quat.y = 0;
     */
    /**
     * @field
     * @type Number
     * @name pc.Quat#z
     * @description The z component of the quaternion.
     * @example
     * var quat = new pc.Quat();
     *
     * // Get z
     * var z = quat.z;
     *
     * // Set z
     * quat.z = 0;
     */
    /**
     * @field
     * @type Number
     * @name pc.Quat#w
     * @description The w component of the quaternion.
     * @example
     * var quat = new pc.Quat();
     *
     * // Get w
     * var w = quat.w;
     *
     * // Set w
     * quat.w = 0;
     */

	/**
	 * @function
	 * @name pc.Quat#clone
	 * @description Returns an identical copy of the specified quaternion.
	 * @returns {pc.Quat} A quaternion containing the result of the cloning.
	 * @example
	 * var q = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
	 * var qclone = q.clone();
	 *
	 * console.log("The result of the cloning is: " + q.toString());
	 */
	clone(): Quat {
		return new Quat(this.x, this.y, this.z, this.w);
	}

	conjugate(): Quat {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#copy
	 * @description Copies the contents of a source quaternion to a destination quaternion.
	 * @param {pc.Quat} rhs The quaternion to be copied.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var src = new pc.Quat();
	 * var dst = new pc.Quat();
	 * dst.copy(src, src);
	 * console.log("The two quaternions are " + (src.equals(dst) ? "equal" : "different"));
	 */
	copy(rhs: Quat): Quat {
		this.x = rhs.x;
		this.y = rhs.y;
		this.z = rhs.z;
		this.w = rhs.w;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#equals
	 * @description Reports whether two quaternions are equal.
	 * @param {pc.Quat} rhs The quaternion to be compared against.
	 * @returns {Boolean} true if the quaternions are equal and false otherwise.
	 * @example
	 * var a = new pc.Quat();
	 * var b = new pc.Quat();
	 * console.log("The two quaternions are " + (a.equals(b) ? "equal" : "different"));
	 */
	equals(rhs: Quat): boolean {
		return ((this.x === rhs.x) && (this.y === rhs.y) && (this.z === rhs.z) && (this.w === rhs.w));
	}

	/**
	 * @function
	 * @name pc.Quat#getAxisAngle
	 * @description Gets the rotation axis and angle for a given
	 *  quaternion. If a quaternion is created with
	 *  setFromAxisAngle, this method will return the same
	 *  values as provided in the original parameter list
	 *  OR functionally equivalent values.
	 * @param {pc.Vec3} axis The 3-dimensional vector to receive the axis of rotation.
	 * @returns {f32} Angle, in degrees, of the rotation
	 * @example
	 * var q = new pc.Quat();
	 * q.setFromAxisAngle(new pc.Vec3(0, 1, 0), 90);
	 * var v = new pc.Vec3();
	 * var angle = q.getAxisAngle(v);
	 * // Should output 90
	 * console.log(angle)
	 * // Should output [0, 1, 0]
	 * console.log(v.toString());
	 */
	getAxisAngle(axis: Vec3): f32 {
		var rad = Mathf.acos(this.w) * 2;
		var s = Mathf.sin(rad / 2);
		if (s !== 0) {
			axis.x = this.x / s;
			axis.y = this.y / s;
			axis.z = this.z / s;
			if (axis.x < 0 || axis.y < 0 || axis.z < 0) {
				// Flip the sign
				axis.x *= -1;
				axis.y *= -1;
				axis.z *= -1;
				rad *= -1;
			}
		} else {
			// If s is zero, return any axis (no rotation - axis does not matter)
			axis.x = 1;
			axis.y = 0;
			axis.z = 0;
		}
		return rad * pc_math.RAD_TO_DEG;
	}

	/**
	 * @function
	 * @name pc.Quat#getEulerAngles
	 * @description Converts the supplied quaternion to Euler angles.
	 * @param {pc.Vec3} [eulers] The 3-dimensional vector to receive the Euler angles.
	 * @returns {pc.Vec3} The 3-dimensional vector holding the Euler angles that
	 * correspond to the supplied quaternion.
	 */
	//getEulerAngles(eulers?: Vec3): Vec3 { // TypeScript
	getEulerAngles(eulers: Vec3): Vec3 {
		var x: f32;
		var y: f32;
		var z: f32;

		// TypeScript:
		//eulers = (eulers === undefined) ? new pc.Vec3() : eulers;

		var qx = this.x;
		var qy = this.y;
		var qz = this.z;
		var qw = this.w;

		var a2: f32 = 2.0 * (qw * qy - qx * qz);
		if (a2 <= -0.99999) {
			x = 2 * Mathf.atan2(qx, qw);
			y = -Mathf.PI / 2;
			z = 0;
		} else if (a2 >= 0.99999) {
			x = 2 * Mathf.atan2(qx, qw);
			y = Mathf.PI / 2;
			z = 0;
		} else {
			x = Mathf.atan2(2 * (qw * qx + qy * qz), 1 - 2 * (qx * qx + qy * qy));
			y = Mathf.asin(a2);
			z = Mathf.atan2(2 * (qw * qz + qx * qy), 1 - 2 * (qy * qy + qz * qz));
		}

		return eulers.set(x, y, z).scale(pc_math.RAD_TO_DEG);
	}

	/**
	 * @function
	 * @name pc.Quat#invert
	 * @description Generates the inverse of the specified quaternion.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * // Create a quaternion rotated 180 degrees around the y-axis
	 * var rot = new pc.Quat().setFromEulerAngles(0, 180, 0);
	 *
	 * // Invert in place
	 * rot.invert();
	 */
	invert(): Quat {
		return this.conjugate().normalize();
	}

	/**
	 * @function
	 * @name pc.Quat#length
	 * @description Returns the magnitude of the specified quaternion.
	 * @returns {f32} The magnitude of the specified quaternion.
	 * @example
	 * var q = new pc.Quat(0, 0, 0, 5);
	 * var len = q.length();
	 * // Should output 5
	 * console.log("The length of the quaternion is: " + len);
	 */
	length(): f32 {
		return Mathf.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}

	/**
	 * @function
	 * @name pc.Quat#lengthSq
	 * @description Returns the magnitude squared of the specified quaternion.
	 * @returns {f32} The magnitude of the specified quaternion.
	 * @example
	 * var q = new pc.Quat(3, 4, 0);
	 * var lenSq = q.lengthSq();
	 * // Should output 25
	 * console.log("The length squared of the quaternion is: " + lenSq);
	 */
	lengthSq(): f32 {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}

	/**
	 * @function
	 * @name pc.Quat#mul
	 * @description Returns the result of multiplying the specified quaternions together.
	 * @param {pc.Quat} rhs The quaternion used as the second multiplicand of the operation.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
	 * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
	 *
	 * // a becomes a 90 degree rotation around the Y axis
	 * // In other words, a = a * b
	 * a.mul(b);
	 *
	 * console.log("The result of the multiplication is: " a.toString());
	 */
	mul(rhs: Quat): Quat {
		var q1x = this.x;
		var q1y = this.y;
		var q1z = this.z;
		var q1w = this.w;

		var q2x = rhs.x;
		var q2y = rhs.y;
		var q2z = rhs.z;
		var q2w = rhs.w;

		this.x = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
		this.y = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
		this.z = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
		this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#mul2
	 * @description Returns the result of multiplying the specified quaternions together.
	 * @param {pc.Quat} lhs The quaternion used as the first multiplicand of the operation.
	 * @param {pc.Quat} rhs The quaternion used as the second multiplicand of the operation.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
	 * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
	 * var r = new pc.Quat();
	 *
	 * // r is set to a 90 degree rotation around the Y axis
	 * // In other words, r = a * b
	 * r.mul2(a, b);
	 *
	 * console.log("The result of the multiplication is: " r.toString());
	 */
	mul2(lhs: Quat, rhs: Quat): Quat {
		var q1x = lhs.x;
		var q1y = lhs.y;
		var q1z = lhs.z;
		var q1w = lhs.w;

		var q2x = rhs.x;
		var q2y = rhs.y;
		var q2z = rhs.z;
		var q2w = rhs.w;

		this.x = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
		this.y = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
		this.z = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
		this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#normalize
	 * @description Returns the specified quaternion converted in place to a unit quaternion.
	 * @returns {pc.Quat} The result of the normalization.
	 * @example
	 * var v = new pc.Quat(0, 0, 0, 5);
	 *
	 * v.normalize();
	 *
	 * // Should output 0, 0, 0, 1
	 * console.log("The result of the vector normalization is: " + v.toString());
	 */
	normalize(): Quat {
		var len = this.length();
		if (len === 0) {
			this.x = this.y = this.z = 0;
			this.w = 1;
		} else {
			len = 1 / len;
			this.x *= len;
			this.y *= len;
			this.z *= len;
			this.w *= len;
		}

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#set
	 * @description Sets the specified quaternion to the supplied numerical values.
	 * @param {f32} x The x component of the quaternion.
	 * @param {f32} y The y component of the quaternion.
	 * @param {f32} z The z component of the quaternion.
	 * @param {f32} w The w component of the quaternion.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var q = new pc.Quat();
	 * q.set(1, 0, 0, 0);
	 *
	 * // Should output 1, 0, 0, 0
	 * console.log("The result of the vector set is: " + q.toString());
	 */
	set(x: f32, y: f32, z: f32, w: f32): Quat {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#setFromAxisAngle
	 * @description Sets a quaternion from an angular rotation around an axis.
	 * @param {pc.Vec3} axis World space axis around which to rotate.
	 * @param {f32} angle Angle to rotate around the given axis in degrees.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var q = new pc.Quat();
	 * q.setFromAxisAngle(pc.Vec3.UP, 90);
	 */
	setFromAxisAngle(axis: Vec3, angle: f32): Quat {
		angle *= 0.5 * pc_math.DEG_TO_RAD;

		var sa = Mathf.sin(angle);
		var ca = Mathf.cos(angle);

		this.x = sa * axis.x;
		this.y = sa * axis.y;
		this.z = sa * axis.z;
		this.w = ca;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#setFromEulerAngles
	 * @description Sets a quaternion from Euler angles specified in XYZ order.
	 * @param {f32} ex Angle to rotate around X axis in degrees.
	 * @param {f32} ey Angle to rotate around Y axis in degrees.
	 * @param {f32} ez Angle to rotate around Z axis in degrees.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var q = new pc.Quat();
	 * q.setFromEulerAngles(45, 90, 180);
	 */
	setFromEulerAngles(ex: f32, ey: f32, ez: f32): Quat {
		var halfToRad: f32 = 0.5 * pc_math.DEG_TO_RAD;
		ex *= halfToRad;
		ey *= halfToRad;
		ez *= halfToRad;

		var sx = Mathf.sin(ex);
		var cx = Mathf.cos(ex);
		var sy = Mathf.sin(ey);
		var cy = Mathf.cos(ey);
		var sz = Mathf.sin(ez);
		var cz = Mathf.cos(ez);

		this.x = sx * cy * cz - cx * sy * sz;
		this.y = cx * sy * cz + sx * cy * sz;
		this.z = cx * cy * sz - sx * sy * cz;
		this.w = cx * cy * cz + sx * sy * sz;

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#setFromMat4
	 * @description Converts the specified 4x4 matrix to a quaternion. Note that since
	 * a quaternion is purely a representation for orientation, only the translational part
	 * of the matrix is lost.
	 * @param {pc.Mat4} m The 4x4 matrix to convert.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
	 * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
	 *
	 * // Convert to a quaternion
	 * var q = new pc.Quat().setFromMat4(rot);
	 */
	setFromMat4(m_: Mat4): Quat {
		var s: f32;
		var rs: f32;
		
		var m = m_.data;

		// Cache matrix values for super-speed
		var m00 = m[0];
		var m01 = m[1];
		var m02 = m[2];
		var m10 = m[4];
		var m11 = m[5];
		var m12 = m[6];
		var m20 = m[8];
		var m21 = m[9];
		var m22 = m[10];

		// Remove the scale from the matrix
		var lx: f32 = 1.0 / Mathf.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
		var ly: f32 = 1.0 / Mathf.sqrt(m10 * m10 + m11 * m11 + m12 * m12);
		var lz: f32 = 1.0 / Mathf.sqrt(m20 * m20 + m21 * m21 + m22 * m22);

		m00 *= lx;
		m01 *= lx;
		m02 *= lx;
		m10 *= ly;
		m11 *= ly;
		m12 *= ly;
		m20 *= lz;
		m21 *= lz;
		m22 *= lz;

		// http://www.cs.ucr.edu/~vbz/resources/quatut.pdf

		var tr = m00 + m11 + m22;
		if (tr >= 0.0) {
			s = Mathf.sqrt(tr + 1.0);
			this.w = s * 0.5;
			s = 0.5 / s;
			this.x = (m12 - m21) * s;
			this.y = (m20 - m02) * s;
			this.z = (m01 - m10) * s;
		} else {
			if (m00 > m11) {
				if (m00 > m22) {
					// XDiagDomMatrix
					rs = (m00 - (m11 + m22)) + 1.0;
					rs = Mathf.sqrt(rs);

					this.x = rs * 0.5;
					rs = 0.5 / rs;
					this.w = (m12 - m21) * rs;
					this.y = (m01 + m10) * rs;
					this.z = (m02 + m20) * rs;
				} else {
					// ZDiagDomMatrix
					rs = (m22 - (m00 + m11)) + 1.0;
					rs = Mathf.sqrt(rs);

					this.z = rs * 0.5;
					rs = 0.5 / rs;
					this.w = (m01 - m10) * rs;
					this.x = (m20 + m02) * rs;
					this.y = (m21 + m12) * rs;
				}
			} else if (m11 > m22) {
				// YDiagDomMatrix
				rs = (m11 - (m22 + m00)) + 1.0;
				rs = Mathf.sqrt(rs);

				this.y = rs * 0.5;
				rs = 0.5 / rs;
				this.w = (m20 - m02) * rs;
				this.z = (m12 + m21) * rs;
				this.x = (m10 + m01) * rs;
			} else {
				// ZDiagDomMatrix
				rs = (m22 - (m00 + m11)) + 1.0;
				rs = Mathf.sqrt(rs);

				this.z = rs * 0.5;
				rs = 0.5 / rs;
				this.w = (m01 - m10) * rs;
				this.x = (m20 + m02) * rs;
				this.y = (m21 + m12) * rs;
			}
		}

		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#slerp
	 * @description Performs a spherical interpolation between two quaternions. The result of
	 * the interpolation is written to the quaternion calling the function.
	 * @param {pc.Quat} lhs The quaternion to interpolate from.
	 * @param {pc.Quat} rhs The quaternion to interpolate to.
	 * @param {f32} alpha The value controlling the interpolation in relation to the two input
	 * quaternions. The value is in the range 0 to 1, 0 generating q1, 1 generating q2 and anything
	 * in between generating a spherical interpolation between the two.
	 * @returns {pc.Quat} Self for chaining.
	 * @example
	 * var q1 = new pc.Quat(-0.11,-0.15,-0.46,0.87);
	 * var q2 = new pc.Quat(-0.21,-0.21,-0.67,0.68);
	 *
	 * var result;
	 * result = new pc.Quat().slerp(q1, q2, 0);   // Return q1
	 * result = new pc.Quat().slerp(q1, q2, 0.5); // Return the midpoint interpolant
	 * result = new pc.Quat().slerp(q1, q2, 1);   // Return q2
	 */
	slerp(lhs: Quat, rhs: Quat, alpha: f32): Quat {
		// Algorithm sourced from:
		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		var lx = lhs.x;
		var ly = lhs.y;
		var lz = lhs.z;
		var lw = lhs.w;
		var rx = rhs.x;
		var ry = rhs.y;
		var rz = rhs.z;
		var rw = rhs.w;

		// Calculate angle between them.
		var cosHalfTheta = lw * rw + lx * rx + ly * ry + lz * rz;

		if (cosHalfTheta < 0.0) {
			rw = -rw;
			rx = -rx;
			ry = -ry;
			rz = -rz;
			cosHalfTheta = -cosHalfTheta;
		}

		// If lhs == rhs or lhs == -rhs then theta == 0 and we can return lhs
		if (Mathf.abs(cosHalfTheta) >= 1.0) {
			this.w = lw;
			this.x = lx;
			this.y = ly;
			this.z = lz;
			return this;
		}

		// Calculate temporary values.
		var halfTheta = Mathf.acos(cosHalfTheta);
		var sinHalfTheta = Mathf.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

		// If theta = 180 degrees then result is not fully defined
		// we could rotate around any axis normal to qa or qb
		if (Mathf.abs(sinHalfTheta) < 0.001) {
			this.w = (lw * 0.5 + rw * 0.5);
			this.x = (lx * 0.5 + rx * 0.5);
			this.y = (ly * 0.5 + ry * 0.5);
			this.z = (lz * 0.5 + rz * 0.5);
			return this;
		}

		var ratioA = Mathf.sin((1.0 - alpha) * halfTheta) / sinHalfTheta;
		var ratioB = Mathf.sin(alpha * halfTheta) / sinHalfTheta;

		// Calculate Quaternion.
		this.w = (lw * ratioA + rw * ratioB);
		this.x = (lx * ratioA + rx * ratioB);
		this.y = (ly * ratioA + ry * ratioB);
		this.z = (lz * ratioA + rz * ratioB);
		return this;
	}

	/**
	 * @function
	 * @name pc.Quat#transformVector
	 * @description Transforms a 3-dimensional vector by the specified quaternion.
	 * @param {pc.Vec3} vec The 3-dimensional vector to be transformed.
	 * @param {pc.Vec3} [res] An optional 3-dimensional vector to receive the result of the transformation.
	 * @returns {pc.Vec3} The input vector v transformed by the current instance.
	 * @example
	 * // Create a 3-dimensional vector
	 * var v = new pc.Vec3(1, 2, 3);
	 *
	 * // Create a 4x4 rotation matrix
	 * var q = new pc.Quat().setFromEulerAngles(10, 20, 30);
	 *
	 * var tv = q.transformVector(v);
	 */
	//transformVector(vec: Vec3, res?: Vec3): Vec3 { // TypeScript
	transformVector(vec: Vec3, res: Vec3): Vec3 {
		// TypeScript
		//if (res === undefined) {
		//	res = new pc.Vec3();
		//}

		var x = vec.x, y = vec.y, z = vec.z;
		var qx = this.x, qy = this.y, qz = this.z, qw = this.w;

		// calculate quat * vec
		var ix = qw * x + qy * z - qz * y;
		var iy = qw * y + qz * x - qx * z;
		var iz = qw * z + qx * y - qy * x;
		var iw = -qx * x - qy * y - qz * z;

		// calculate result * inverse quat
		res.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		res.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		res.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

		return res;
	}

	/**
	 * @function
	 * @name pc.Quat#toString
	 * @description Converts the quaternion to string form.
	 * @returns {String} The quaternion in string form.
	 * @example
	 * var v = new pc.Quat(0, 0, 0, 1);
	 * // Should output '[0, 0, 0, 1]'
	 * console.log(v.toString());
	 */
	// toString() only in JS wrapper
	//toString(): string {
	//    return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']';
	//}
}

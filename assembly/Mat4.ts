import {Vec3, PreallocatedVec3} from "./Vec3";
import {Vec4} from "./Vec4";
import {Mat3} from "./Mat3";
import {Quat} from "./Quat";
import {pc_math} from "./Math"

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
	
	/**
	 * @function
	 * @name pc.Mat4#transformPoint
	 * @description Transforms a 3-dimensional point by a 4x4 matrix.
	 * @param {pc.Vec3} vec The 3-dimensional point to be transformed.
	 * @param {pc.Vec3} [res] An optional 3-dimensional point to receive the result of the transformation.
	 * @returns {pc.Vec3} The input point v transformed by the current instance.
	 * @example
	 * // Create a 3-dimensional point
	 * var v = new pc.Vec3(1, 2, 3);
	 *
	 * // Create a 4x4 rotation matrix
	 * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 *
	 * var tv = m.transformPoint(v);
	 */
	transformPoint(vec: Vec3, res: Vec3): Vec3 {
		var m = this.data;

		var x = vec.x;
		var y = vec.y;
		var z = vec.z;

		//res = (res === undefined) ? new pc.Vec3() : res;

		res.x = x * m[0] + y * m[4] + z * m[8] + m[12];
		res.y = x * m[1] + y * m[5] + z * m[9] + m[13];
		res.z = x * m[2] + y * m[6] + z * m[10] + m[14];

		return res;
	}

	/**
	 * @function
	 * @name pc.Mat4#transformVector
	 * @description Transforms a 3-dimensional vector by a 4x4 matrix.
	 * @param {pc.Vec3} vec The 3-dimensional vector to be transformed.
	 * @param {pc.Vec3} [res] An optional 3-dimensional vector to receive the result of the transformation.
	 * @returns {pc.Vec3} The input vector v transformed by the current instance.
	 * @example
	 * // Create a 3-dimensional vector
	 * var v = new pc.Vec3(1, 2, 3);
	 *
	 * // Create a 4x4 rotation matrix
	 * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 *
	 * var tv = m.transformVector(v);
	 */
	transformVector(vec: Vec3, res: Vec3): Vec3 {
		var m = this.data;

		var x = vec.x;
		var y = vec.y;
		var z = vec.z;

		//res = (res === undefined) ? new pc.Vec3() : res;

		res.x = x * m[0] + y * m[4] + z * m[8];
		res.y = x * m[1] + y * m[5] + z * m[9];
		res.z = x * m[2] + y * m[6] + z * m[10];

		return res;
	}

	/**
	 * @function
	 * @name pc.Mat4#transformVec4
	 * @description Transforms a 4-dimensional vector by a 4x4 matrix.
	 * @param {pc.Vec4} vec The 4-dimensional vector to be transformed.
	 * @param {pc.Vec4} [res] An optional 4-dimensional vector to receive the result of the transformation.
	 * @returns {pc.Vec4} The input vector v transformed by the current instance.
	 * @example
	 * // Create an input 4-dimensional vector
	 * var v = new pc.Vec4(1, 2, 3, 4);
	 *
	 * // Create an output 4-dimensional vector
	 * var result = new pc.Vec4();
	 *
	 * // Create a 4x4 rotation matrix
	 * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
	 *
	 * m.transformVec4(v, result);
	 */
	transformVec4(vec: Vec4, res: Vec4): Vec4 {
		var m = this.data;

		var x = vec.x;
		var y = vec.y;
		var z = vec.z;
		var w = vec.w;

		//res = (res === undefined) ? new pc.Vec4() : res;

		res.x = x * m[0] + y * m[4] + z * m[8] + w * m[12];
		res.y = x * m[1] + y * m[5] + z * m[9] + w * m[13];
		res.z = x * m[2] + y * m[6] + z * m[10] + w * m[14];
		res.w = x * m[3] + y * m[7] + z * m[11] + w * m[15];

		return res;
	}

	/**
	 * @function
	 * @name pc.Mat4#setLookAt
	 * @description Sets the specified matrix to a viewing matrix derived from an eye point, a target point
	 * and an up vector. The matrix maps the target point to the negative z-axis and the eye point to the
	 * origin, so that when you use a typical projection matrix, the center of the scene maps to the center
	 * of the viewport. Similarly, the direction described by the up vector projected onto the viewing plane
	 * is mapped to the positive y-axis so that it points upward in the viewport. The up vector must not be
	 * parallel to the line of sight from the eye to the reference point.
	 * @param {pc.Vec3} position 3-d vector holding view position.
	 * @param {pc.Vec3} target 3-d vector holding reference point.
	 * @param {pc.Vec3} up 3-d vector holding the up direction.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var position = new pc.Vec3(10, 10, 10);
	 * var target = new pc.Vec3(0, 0, 0);
	 * var up = new pc.Vec3(0, 1, 0);
	 * var m = new pc.Mat4().setLookAt(position, target, up);
	 */
	setLookAt(position: Vec3, target: Vec3, up: Vec3): Mat4 {
		var x = PreallocatedVec3.setLookAt_x;
		var y = PreallocatedVec3.setLookAt_y;
		var z = PreallocatedVec3.setLookAt_z;

		z.sub2(position, target).normalize();
		y.copy(up).normalize();
		x.cross(y, z).normalize();
		y.cross(z, x);

		var r = this.data;

		r[0]  = x.x;
		r[1]  = x.y;
		r[2]  = x.z;
		r[3]  = 0;
		r[4]  = y.x;
		r[5]  = y.y;
		r[6]  = y.z;
		r[7]  = 0;
		r[8]  = z.x;
		r[9]  = z.y;
		r[10] = z.z;
		r[11] = 0;
		r[12] = position.x;
		r[13] = position.y;
		r[14] = position.z;
		r[15] = 1;

		return this;
	}

	/**
	 * @private
	 * @function
	 * @name pc.Mat4#setFrustum
	 * @description Sets the specified matrix to a perspective projection matrix. The function's parameters define
	 * the shape of a frustum.
	 * @param {f32} left The x-coordinate for the left edge of the camera's projection plane in eye space.
	 * @param {f32} right The x-coordinate for the right edge of the camera's projection plane in eye space.
	 * @param {f32} bottom The y-coordinate for the bottom edge of the camera's projection plane in eye space.
	 * @param {f32} top The y-coordinate for the top edge of the camera's projection plane in eye space.
	 * @param {f32} znear The near clip plane in eye coordinates.
	 * @param {f32} zfar The far clip plane in eye coordinates.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 perspective projection matrix
	 * var f = pc.Mat4().setFrustum(-2, 2, -1, 1, 1, 1000);
	 */
	setFrustum(left: f32, right: f32, bottom: f32, top: f32, znear: f32, zfar: f32): Mat4 {
		var temp1: f32 = 2 * znear;
		var temp2: f32 = right - left;
		var temp3: f32 = top - bottom;
		var temp4: f32 = zfar - znear;

		var r = this.data;
		r[0] = temp1 / temp2;
		r[1] = 0;
		r[2] = 0;
		r[3] = 0;
		r[4] = 0;
		r[5] = temp1 / temp3;
		r[6] = 0;
		r[7] = 0;
		r[8] = (right + left) / temp2;
		r[9] = (top + bottom) / temp3;
		r[10] = (-zfar - znear) / temp4;
		r[11] = -1;
		r[12] = 0;
		r[13] = 0;
		r[14] = (-temp1 * zfar) / temp4;
		r[15] = 0;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#setPerspective
	 * @description Sets the specified matrix to a perspective projection matrix. The function's
	 * parameters define the shape of a frustum.
	 * @param {f32} fov The frustum's field of view in degrees. The fovIsHorizontal parameter
	 * controls whether this is a vertical or horizontal field of view. By default, it's a vertical
	 * field of view.
	 * @param {f32} aspect The aspect ratio of the frustum's projection plane (width / height).
	 * @param {f32} znear The near clip plane in eye coordinates.
	 * @param {f32} zfar The far clip plane in eye coordinates.
	 * @param {Boolean} [fovIsHorizontal=false] Set to true to treat the fov as horizontal (x-axis)
	 * and false for vertical (y-axis). Defaults to false.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 perspective projection matrix
	 * var persp = pc.Mat4().setPerspective(45, 16 / 9, 1, 1000);
	 */
	setPerspective(fov: f32, aspect: f32, znear: f32, zfar: f32, fovIsHorizontal: boolean): Mat4 {
		var xmax: f32;
		var ymax: f32;

		if (!fovIsHorizontal) {
			ymax = znear * Mathf.tan(fov * Mathf.PI / 360);
			xmax = ymax * aspect;
		} else {
			xmax = znear * Mathf.tan(fov * Mathf.PI / 360);
			ymax = xmax / aspect;
		}

		return this.setFrustum(-xmax, xmax, -ymax, ymax, znear, zfar);
	}

	/**
	 * @function
	 * @name pc.Mat4#setOrtho
	 * @description Sets the specified matrix to an orthographic projection matrix. The function's parameters
	 * define the shape of a cuboid-shaped frustum.
	 * @param {f32} left The x-coordinate for the left edge of the camera's projection plane in eye space.
	 * @param {f32} right The x-coordinate for the right edge of the camera's projection plane in eye space.
	 * @param {f32} bottom The y-coordinate for the bottom edge of the camera's projection plane in eye space.
	 * @param {f32} top The y-coordinate for the top edge of the camera's projection plane in eye space.
	 * @param {f32} near The near clip plane in eye coordinates.
	 * @param {f32} far The far clip plane in eye coordinates.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 orthographic projection matrix
	 * var ortho = pc.Mat4().ortho(-2, 2, -2, 2, 1, 1000);
	 */
	setOrtho(left: f32, right: f32, bottom: f32, top: f32, near: f32, far: f32): Mat4 {
		var r = this.data;

		r[0] = 2 / (right - left);
		r[1] = 0;
		r[2] = 0;
		r[3] = 0;
		r[4] = 0;
		r[5] = 2 / (top - bottom);
		r[6] = 0;
		r[7] = 0;
		r[8] = 0;
		r[9] = 0;
		r[10] = -2 / (far - near);
		r[11] = 0;
		r[12] = -(right + left) / (right - left);
		r[13] = -(top + bottom) / (top - bottom);
		r[14] = -(far + near) / (far - near);
		r[15] = 1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#setFromAxisAngle
	 * @description Sets the specified matrix to a rotation matrix equivalent to a rotation around
	 * an axis. The axis must be normalized (unit length) and the angle must be specified in degrees.
	 * @param {pc.Vec3} axis The normalized axis vector around which to rotate.
	 * @param {f32} angle The angle of rotation in degrees.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 rotation matrix
	 * var rm = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 90);
	 */
	setFromAxisAngle(axis: Vec3, angle: f32): Mat4 {
		angle *= pc_math.DEG_TO_RAD;

		var x: f32 = axis.x;
		var y: f32 = axis.y;
		var z: f32 = axis.z;
		var c: f32 = Mathf.cos(angle);
		var s: f32 = Mathf.sin(angle);
		var t: f32 = 1.0 - c;
		var tx: f32 = t * x;
		var ty: f32 = t * y;
		var m = this.data;

		m[0] = tx * x + c;
		m[1] = tx * y + s * z;
		m[2] = tx * z - s * y;
		m[3] = 0;
		m[4] = tx * y - s * z;
		m[5] = ty * y + c;
		m[6] = ty * z + s * x;
		m[7] = 0;
		m[8] = tx * z + s * y;
		m[9] = ty * z - x * s;
		m[10] = t * z * z + c;
		m[11] = 0;
		m[12] = 0;
		m[13] = 0;
		m[14] = 0;
		m[15] = 1;

		return this;
	}

	/**
	 * @private
	 * @function
	 * @name pc.Mat4#setTranslate
	 * @description Sets the specified matrix to a translation matrix.
	 * @param {f32} x The x-component of the translation.
	 * @param {f32} y The y-component of the translation.
	 * @param {f32} z The z-component of the translation.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 translation matrix
	 * var tm = new pc.Mat4().setTranslate(10, 10, 10);
	 */
	setTranslate(x: f32, y: f32, z: f32): Mat4 {
		var m = this.data;

		m[0] = 1;
		m[1] = 0;
		m[2] = 0;
		m[3] = 0;
		m[4] = 0;
		m[5] = 1;
		m[6] = 0;
		m[7] = 0;
		m[8] = 0;
		m[9] = 0;
		m[10] = 1;
		m[11] = 0;
		m[12] = x;
		m[13] = y;
		m[14] = z;
		m[15] = 1;

		return this;
	}

	/**
	 * @private
	 * @function
	 * @name pc.Mat4#setScale
	 * @description Sets the specified matrix to a scale matrix.
	 * @param {f32} x The x-component of the scale.
	 * @param {f32} y The y-component of the scale.
	 * @param {f32} z The z-component of the scale.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 scale matrix
	 * var sm = new pc.Mat4().setScale(10, 10, 10);
	 */
	setScale(x: f32, y: f32, z: f32): Mat4 {
		var m = this.data;

		m[0] = x;
		m[1] = 0;
		m[2] = 0;
		m[3] = 0;
		m[4] = 0;
		m[5] = y;
		m[6] = 0;
		m[7] = 0;
		m[8] = 0;
		m[9] = 0;
		m[10] = z;
		m[11] = 0;
		m[12] = 0;
		m[13] = 0;
		m[14] = 0;
		m[15] = 1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#invert
	 * @description Sets the specified matrix to its inverse.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
	 * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
	 *
	 * // Invert in place
	 * rot.invert();
	 */
	invert(): Mat4 {
		var m = this.data;
		var a00 = m[0];
		var a01 = m[1];
		var a02 = m[2];
		var a03 = m[3];
		var a10 = m[4];
		var a11 = m[5];
		var a12 = m[6];
		var a13 = m[7];
		var a20 = m[8];
		var a21 = m[9];
		var a22 = m[10];
		var a23 = m[11];
		var a30 = m[12];
		var a31 = m[13];
		var a32 = m[14];
		var a33 = m[15];

		var b00: f32 = a00 * a11 - a01 * a10;
		var b01: f32 = a00 * a12 - a02 * a10;
		var b02: f32 = a00 * a13 - a03 * a10;
		var b03: f32 = a01 * a12 - a02 * a11;
		var b04: f32 = a01 * a13 - a03 * a11;
		var b05: f32 = a02 * a13 - a03 * a12;
		var b06: f32 = a20 * a31 - a21 * a30;
		var b07: f32 = a20 * a32 - a22 * a30;
		var b08: f32 = a20 * a33 - a23 * a30;
		var b09: f32 = a21 * a32 - a22 * a31;
		var b10: f32 = a21 * a33 - a23 * a31;
		var b11: f32 = a22 * a33 - a23 * a32;

		var det: f32 = (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);
		if (det === 0) {
			this.setIdentity();
		} else {
			var invDet: f32 = 1.0 / det;

			m[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
			m[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
			m[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
			m[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
			m[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
			m[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
			m[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
			m[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
			m[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
			m[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
			m[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
			m[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
			m[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
			m[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
			m[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
			m[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
		}


		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#set
	 * @description Sets matrix data from an array.
	 * @param {Array} src Source array. Must have 16 values.
	 * @returns {pc.Mat4} Self for chaining.
	 */
	//set(src: any): Mat4 {
	//	var dst = this.data;
	//	dst[0] = src[0];
	//	dst[1] = src[1];
	//	dst[2] = src[2];
	//	dst[3] = src[3];
	//	dst[4] = src[4];
	//	dst[5] = src[5];
	//	dst[6] = src[6];
	//	dst[7] = src[7];
	//	dst[8] = src[8];
	//	dst[9] = src[9];
	//	dst[10] = src[10];
	//	dst[11] = src[11];
	//	dst[12] = src[12];
	//	dst[13] = src[13];
	//	dst[14] = src[14];
	//	dst[15] = src[15];
    //
	//	return this;
	//}

	/**
	 * @function
	 * @name pc.Mat4#setIdentity
	 * @description Sets the specified matrix to the identity matrix.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * m.setIdentity();
	 * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
	 */
	setIdentity(): Mat4 {
		var m = this.data;
		m[0] = 1;
		m[1] = 0;
		m[2] = 0;
		m[3] = 0;
		m[4] = 0;
		m[5] = 1;
		m[6] = 0;
		m[7] = 0;
		m[8] = 0;
		m[9] = 0;
		m[10] = 1;
		m[11] = 0;
		m[12] = 0;
		m[13] = 0;
		m[14] = 0;
		m[15] = 1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#setTRS
	 * @description Sets the specified matrix to the concatenation of a translation, a
	 * quaternion rotation and a scale.
	 * @param {pc.Vec3} t A 3-d vector translation.
	 * @param {pc.Quat} r A quaternion rotation.
	 * @param {pc.Vec3} s A 3-d vector scale.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var t = new pc.Vec3(10, 20, 30);
	 * var r = new pc.Quat();
	 * var s = new pc.Vec3(2, 2, 2);
	 *
	 * var m = new pc.Mat4();
	 * m.setTRS(t, r, s);
	 */
	setTRS(t: Vec3, r: Quat, s: Vec3): Mat4 {
		var tx = t.x;
		var ty = t.y;
		var tz = t.z;

		var qx = r.x;
		var qy = r.y;
		var qz = r.z;
		var qw = r.w;

		var sx = s.x;
		var sy = s.y;
		var sz = s.z;

		var x2 = qx + qx;
		var y2 = qy + qy;
		var z2 = qz + qz;
		var xx = qx * x2;
		var xy = qx * y2;
		var xz = qx * z2;
		var yy = qy * y2;
		var yz = qy * z2;
		var zz = qz * z2;
		var wx = qw * x2;
		var wy = qw * y2;
		var wz = qw * z2;

		var m = this.data;

		m[0] = (1 - (yy + zz)) * sx;
		m[1] = (xy + wz) * sx;
		m[2] = (xz - wy) * sx;
		m[3] = 0;

		m[4] = (xy - wz) * sy;
		m[5] = (1 - (xx + zz)) * sy;
		m[6] = (yz + wx) * sy;
		m[7] = 0;

		m[8] = (xz + wy) * sz;
		m[9] = (yz - wx) * sz;
		m[10] = (1 - (xx + yy)) * sz;
		m[11] = 0;

		m[12] = tx;
		m[13] = ty;
		m[14] = tz;
		m[15] = 1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#transpose
	 * @description Sets the specified matrix to its transpose.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var m = new pc.Mat4();
	 *
	 * // Transpose in place
	 * m.transpose();
	 */
	transpose(): Mat4 {
		var m = this.data;

		var tmp = m[1];
		m[1] = m[4];
		m[4] = tmp;

		tmp = m[2];
		m[2] = m[8];
		m[8] = tmp;

		tmp = m[3];
		m[3] = m[12];
		m[12] = tmp;

		tmp = m[6];
		m[6] = m[9];
		m[9] = tmp;

		tmp = m[7];
		m[7] = m[13];
		m[13] = tmp;

		tmp = m[11];
		m[11] = m[14];
		m[14] = tmp;

		return this;
	}

	invertTo3x3(res: Mat3): Mat4 {
		var m = this.data;
		var r = res.data;

		var m0 = m[0];
		var m1 = m[1];
		var m2 = m[2];

		var m4 = m[4];
		var m5 = m[5];
		var m6 = m[6];

		var m8 = m[8];
		var m9 = m[9];
		var m10 = m[10];

		var a11 =  m10 * m5 - m6 * m9;
		var a21 = -m10 * m1 + m2 * m9;
		var a31 =  m6  * m1 - m2 * m5;
		var a12 = -m10 * m4 + m6 * m8;
		var a22 =  m10 * m0 - m2 * m8;
		var a32 = -m6  * m0 + m2 * m4;
		var a13 =  m9  * m4 - m5 * m8;
		var a23 = -m9  * m0 + m1 * m8;
		var a33 =  m5  * m0 - m1 * m4;

		var det: f32 = m0 * a11 + m1 * a12 + m2 * a13;
		if (det === 0) { // no inverse
			return this;
		}

		var idet: f32 = 1 / det;

		r[0] = idet * a11;
		r[1] = idet * a21;
		r[2] = idet * a31;
		r[3] = idet * a12;
		r[4] = idet * a22;
		r[5] = idet * a32;
		r[6] = idet * a13;
		r[7] = idet * a23;
		r[8] = idet * a33;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#getTranslation
	 * @description Extracts the translational component from the specified 4x4 matrix.
	 * @param {pc.Vec3} [t] The vector to receive the translation of the matrix.
	 * @returns {pc.Vec3} The translation of the specified 4x4 matrix.
	 * @example
	 * // Create a 4x4 matrix
	 * var m = new pc.Mat4();
	 *
	 * // Query the z-axis component
	 * var t = new pc.Vec3();
	 * m.getTranslation(t);
	 */
	getTranslation(t: Vec3): Vec3 {
		//t = (t === undefined) ? new pc.Vec3() : t;

		return t.set(this.data[12], this.data[13], this.data[14]);
	}

	/**
	 * @function
	 * @name pc.Mat4#getX
	 * @description Extracts the x-axis from the specified 4x4 matrix.
	 * @param {pc.Vec3} [x] The vector to receive the x axis of the matrix.
	 * @returns {pc.Vec3} The x-axis of the specified 4x4 matrix.
	 * @example
	 * // Create a 4x4 matrix
	 * var m = new pc.Mat4();
	 *
	 * // Query the z-axis component
	 * var x = new pc.Vec3();
	 * m.getX(x);
	 */
	getX(x: Vec3): Vec3 {
		//x = (x === undefined) ? new pc.Vec3() : x;

		return x.set(this.data[0], this.data[1], this.data[2]);
	}

	/**
	 * @function
	 * @name pc.Mat4#getY
	 * @description Extracts the y-axis from the specified 4x4 matrix.
	 * @param {pc.Vec3} [y] The vector to receive the y axis of the matrix.
	 * @returns {pc.Vec3} The y-axis of the specified 4x4 matrix.
	 * @example
	 * // Create a 4x4 matrix
	 * var m = new pc.Mat4();
	 *
	 * // Query the z-axis component
	 * var y = new pc.Vec3();
	 * m.getY(y);
	 */
	getY(y: Vec3): Vec3 {
		//y = (y === undefined) ? new pc.Vec3() : y;

		return y.set(this.data[4], this.data[5], this.data[6]);
	}

	/**
	 * @function
	 * @name pc.Mat4#getZ
	 * @description Extracts the z-axis from the specified 4x4 matrix.
	 * @param {pc.Vec3} [z] The vector to receive the z axis of the matrix.
	 * @returns {pc.Vec3} The z-axis of the specified 4x4 matrix.
	 * @example
	 * // Create a 4x4 matrix
	 * var m = new pc.Mat4();
	 *
	 * // Query the z-axis component
	 * var z = new pc.Vec3();
	 * m.getZ(z);
	 */
	getZ(z: Vec3): Vec3 {
		//z = (z === undefined) ? new pc.Vec3() : z;

		return z.set(this.data[8], this.data[9], this.data[10]);
	}

	/**
	 * @function
	 * @name pc.Mat4#getScale
	 * @description Extracts the scale component from the specified 4x4 matrix.
	 * @param {pc.Vec3} [scale] Vector to receive the scale.
	 * @returns {pc.Vec3} The scale in X, Y and Z of the specified 4x4 matrix.
	 * @example
	 * // Create a 4x4 scale matrix
	 * var m = new pc.Mat4().scale(2, 3, 4);
	 *
	 * // Query the scale component
	 * var scale = m.getScale();
	 */
	getScale(scale: Vec3): Vec3 {
		var x = PreallocatedVec3.getScale_x;
		var y = PreallocatedVec3.getScale_y;
		var z = PreallocatedVec3.getScale_z;

		//scale = (scale === undefined) ? new pc.Vec3() : scale;

		this.getX(x);
		this.getY(y);
		this.getZ(z);
		scale.set(x.length(), y.length(), z.length());

		return scale;
	}

	/**
	 * @function
	 * @name pc.Mat4#setFromEulerAngles
	 * @description Sets the specified matrix to a rotation matrix defined by
	 * Euler angles. The Euler angles are specified in XYZ order and in degrees.
	 * @param {f32} ex Angle to rotate around X axis in degrees.
	 * @param {f32} ey Angle to rotate around Y axis in degrees.
	 * @param {f32} ez Angle to rotate around Z axis in degrees.
	 * @returns {pc.Mat4} Self for chaining.
	 * @example
	 * var m = new pc.Mat4();
	 * m.setFromEulerAngles(45, 90, 180);
	 */
	// http://en.wikipedia.org/wiki/Rotation_matrix#Conversion_from_and_to_axis-angle
	// The 3D space is right-handed, so the rotation around each axis will be counterclockwise
	// for an observer placed so that the axis goes in his or her direction (Right-hand rule).
	setFromEulerAngles(ex: f32, ey: f32, ez: f32): Mat4 {
		ex *= pc_math.DEG_TO_RAD;
		ey *= pc_math.DEG_TO_RAD;
		ez *= pc_math.DEG_TO_RAD;

		// Solution taken from http://en.wikipedia.org/wiki/Euler_angles#Matrix_orientation
		var s1 = Mathf.sin(-ex);
		var c1 = Mathf.cos(-ex);
		var s2 = Mathf.sin(-ey);
		var c2 = Mathf.cos(-ey);
		var s3 = Mathf.sin(-ez);
		var c3 = Mathf.cos(-ez);

		var m = this.data;

		// Set rotation elements
		m[0] = c2 * c3;
		m[1] = -c2 * s3;
		m[2] = s2;
		m[3] = 0;

		m[4] = c1 * s3 + c3 * s1 * s2;
		m[5] = c1 * c3 - s1 * s2 * s3;
		m[6] = -c2 * s1;
		m[7] = 0;

		m[8] = s1 * s3 - c1 * c3 * s2;
		m[9] = c3 * s1 + c1 * s2 * s3;
		m[10] = c1 * c2;
		m[11] = 0;

		m[12] = 0;
		m[13] = 0;
		m[14] = 0;
		m[15] = 1;

		return this;
	}

	/**
	 * @function
	 * @name pc.Mat4#getEulerAngles
	 * @description Extracts the Euler angles equivalent to the rotational portion
	 * of the specified matrix. The returned Euler angles are in XYZ order an in degrees.
	 * @param {pc.Vec3} [eulers] A 3-d vector to receive the Euler angles.
	 * @returns {pc.Vec3} A 3-d vector containing the Euler angles.
	 * @example
	 * // Create a 4x4 rotation matrix of 45 degrees around the y-axis
	 * var m = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 45);
	 *
	 * var eulers = m.getEulerAngles();
	 */
	/*
	getEulerAngles(eulers: Vec3): Vec3 {
		var x: f32;
		var z: f32;

		var scale = PreallocatedVec3.getEulerAngles_scale;
		//eulers = (eulers === undefined) ? new pc.Vec3() : eulers;

		this.getScale(scale);
		var sx = scale.x;
		var sy = scale.y;
		var sz = scale.z;

		var m = this.data;

		var y = Mathf.asin(-m[2] / sx);
		var halfPi = Mathf.PI * 0.5;

		if (y < halfPi) {
			if (y > -halfPi) {
				x = Mathf.atan2(m[6] / sy, m[10] / sz);
				z = Mathf.atan2(m[1] / sx, m[0] / sx);
			} else {
				// Not a unique solution
				z = 0;
				x = -Mathf.atan2(m[4] / sy, m[5] / sy);
			}
		} else {
			// Not a unique solution
			z = 0;
			x = Mathf.atan2(m[4] / sy, m[5] / sy);
		}

		return eulers.set(x, y, z).scale(pc_math.RAD_TO_DEG);
	}
	*/

	/**
	 * @function
	 * @name pc.Mat4#toString
	 * @description Converts the specified matrix to string form.
	 * @returns {String} The matrix in string form.
	 * @example
	 * var m = new pc.Mat4();
	 * // Should output '[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]'
	 * console.log(m.toString());
	 */
	//toString(): string {
	//	var i, t;
    //
	//	t = '[';
	//	for (i = 0; i < 16; i += 1) {
	//		t += this.data[i];
	//		t += (i !== 15) ? ', ' : '';
	//	}
	//	t += ']';
	//	return t;
	//}
}

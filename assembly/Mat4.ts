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
}

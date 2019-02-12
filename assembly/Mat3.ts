/**
 * @constructor
 * @name pc.Mat3
 * @classdesc A 3x3 matrix.
 * @description Creates a new identity Mat3 object.
 */
export class Mat3 {
	data: Float32Array;

	constructor() {
		// Create an identity matrix. Note that a new Float32Array has all elements set
		// to zero by default, so we only need to set the relevant elements to one.
		var data = new Float32Array(9);
		data[0] = data[4] = data[8] = 1;
		this.data = data;
	}
}

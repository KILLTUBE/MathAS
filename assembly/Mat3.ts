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

	transpose(): Mat3 {
		var m = this.data;

		var tmp: f32;
		tmp = m[1]; m[1] = m[3]; m[3] = tmp;
		tmp = m[2]; m[2] = m[6]; m[6] = tmp;
		tmp = m[5]; m[5] = m[7]; m[7] = tmp;

		return this;
	}
}

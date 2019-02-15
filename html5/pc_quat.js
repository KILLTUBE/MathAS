quat_clone              = instance.exports["Quat#clone"];
quat_conjugate          = instance.exports["Quat#conjugate"];
quat_constructor        = instance.exports["Quat#constructor"];
quat_copy               = instance.exports["Quat#copy"];
quat_equals             = instance.exports["Quat#equals"];
quat_getAxisAngle       = instance.exports["Quat#getAxisAngle"];
quat_getEulerAngles     = instance.exports["Quat#getEulerAngles"];
quat_invert             = instance.exports["Quat#invert"];
quat_length             = instance.exports["Quat#length"];
quat_lengthSq           = instance.exports["Quat#lengthSq"];
quat_mul                = instance.exports["Quat#mul"];
quat_mul2               = instance.exports["Quat#mul2"];
quat_normalize          = instance.exports["Quat#normalize"];
quat_set                = instance.exports["Quat#set"];
quat_setFromAxisAngle   = instance.exports["Quat#setFromAxisAngle"];
quat_setFromEulerAngles = instance.exports["Quat#setFromEulerAngles"];
quat_setFromMat4        = instance.exports["Quat#setFromMat4"];
quat_slerp              = instance.exports["Quat#slerp"];
quat_transformVector    = instance.exports["Quat#transformVector"];

/**
 * @constructor
 */

pc.Quat = function(x, y, z, w) {
	if (x && x.length === 4) {
		this.ptr = quat_constructor(0, x[0], x[1], x[2], x[3]);
	} else {
		this.ptr = quat_constructor(0, x || 0, y || 0, z || 0, w || 1);
	}
}

pc.Quat.wrap = function(ptr) {
	var tmp = Object.create(pc.Quat.prototype);
	tmp.ptr = ptr;
	return tmp;
}

pc.Quat.prototype.clone = function() {
	var tmp = quat_clone(this.ptr);
	return pc.Quat.wrap(tmp);
}

pc.Quat.prototype.conjugate = function() {
	quat_conjugate(this.ptr);
	return this;
}

pc.Quat.prototype.copy = function(rhs) {
	quat_copy(this.ptr, rhs.ptr);
	return this;
}

pc.Quat.prototype.equals = function(rhs) {
	return !!quat_equals(this.ptr, rhs.ptr);
}

/**
 * @param {pc.Vec3} axis output vector
 */

pc.Quat.prototype.getAxisAngle = function(axis) {
	return quat_getAxisAngle(this.ptr, axis.ptr);
}

pc.Quat.prototype.toString = function() {
	return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']';
}

Object.defineProperty(pc.Quat.prototype, 'x', {
	get: function() {
		return module.F32[this.ptr >> 2]; // the shifting is same as dividing by 4, used to quickly lookup the value in module.F32
	},
	set: function(newValue) {
		module.F32[this.ptr >> 2] = newValue;
	}
});

Object.defineProperty(pc.Quat.prototype, 'y', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 1];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 1] = newValue;
	}
});

Object.defineProperty(pc.Quat.prototype, 'z', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 2];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 2] = newValue;
	}
});

Object.defineProperty(pc.Quat.prototype, 'w', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 3];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 3] = newValue;
	}
});

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

pc.Quat.prototype.add = function(rhs) {
	vec3_add(this.ptr, rhs.ptr);
	return this;
}

mat4_constructor        = instance.exports["Mat4#constructor"];

mat4_add                = instance.exports["Mat4#add"];
mat4_add2               = instance.exports["Mat4#add2"];
mat4_clone              = instance.exports["Mat4#clone"];
mat4_copy               = instance.exports["Mat4#copy"];
mat4_equals             = instance.exports["Mat4#equals"];
mat4_getScale           = instance.exports["Mat4#getScale"];
mat4_getTranslation     = instance.exports["Mat4#getTranslation"];
mat4_getX               = instance.exports["Mat4#getX"];
mat4_getY               = instance.exports["Mat4#getY"];
mat4_getZ               = instance.exports["Mat4#getZ"];
mat4_invert             = instance.exports["Mat4#invert"];
mat4_invertTo3x3        = instance.exports["Mat4#invertTo3x3"];
mat4_isIdentity         = instance.exports["Mat4#isIdentity"];
mat4_mul                = instance.exports["Mat4#mul"];
mat4_mul2               = instance.exports["Mat4#mul2"];
mat4_setFromAxisAngle   = instance.exports["Mat4#"];
mat4_setFromEulerAngles = instance.exports["Mat4#"];
mat4_setFrustum         = instance.exports["Mat4#"];
mat4_setIdentity        = instance.exports["Mat4#"];
mat4_setLookAt          = instance.exports["Mat4#"];
mat4_setOrtho           = instance.exports["Mat4#"];
mat4_setPerspective     = instance.exports["Mat4#"];
mat4_setScale           = instance.exports["Mat4#"];
mat4_setTRS             = instance.exports["Mat4#"];
mat4_setTranslate       = instance.exports["Mat4#"];
mat4_transformPoint     = instance.exports["Mat4#"];
mat4_transformVec4      = instance.exports["Mat4#"];
mat4_transformVector    = instance.exports["Mat4#"];
mat4_transpose          = instance.exports["Mat4#"];

pc.Mat4 = function() {
	this.ptr = mat4_constructor(0);
	this.setupWrapper();
}

pc.Mat4.wrap = function(ptr) {
	var tmp = Object.create(pc.Mat4.prototype);
	tmp.ptr = ptr;
	tmp.setupWrapper();
	return tmp;
}

pc.Mat4.prototype.setupWrapper = function() {
	//this.wrap = module.Mat4.wrap(this.ptr)
	this.ptr_data = module.U32[this.ptr >> 2];
	this.ptr_ptr_data = module.U32[this.ptr_data >> 2];
	this.data = new Float32Array(instance.exports.memory.buffer, this.ptr_ptr_data + 8, 16);	
}

pc.Mat4.prototype.add = function(rhs) {
	mat4_add(this.ptr, rhs.ptr);
	return this;
}

pc.Mat4.prototype.add2 = function(lhs, rhs) {
	mat4_add(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Mat4.prototype.clone = function() {
	var ptr = mat4_clone(this.ptr);
	var tmp = pc.Mat4.wrap(ptr);
	return tmp;
}

pc.Mat4.prototype.copy = function(rhs) {
	mat4_copy(this.ptr, rhs.ptr);
	return this;
}

pc.Mat4.prototype.equals = function(rhs) {
	return !!mat4_equals(this.ptr, rhs.ptr);
}

pc.Mat4.prototype.getScale = function(scale) {
	if (scale === undefined) {
		scale = new pc.Vec3();
	}
	mat4_getScale(this.ptr, scale.ptr);
	return scale;
}

pc.Mat4.prototype.getTranslation = function(t) {
	if (t === undefined) {
		t = new pc.Vec3();
	}
	mat4_getTranslation(this.ptr, t.ptr);
	return t;
}

pc.Mat4.prototype.getX = function(x) {
	if (x === undefined) {
		x = new pc.Vec3();
	}
	mat4_getX(this.ptr, x.ptr);
	return x;
}

pc.Mat4.prototype.getY = function(y) {
	if (y === undefined) {
		y = new pc.Vec3();
	}
	mat4_getY(this.ptr, y.ptr);
	return y;
}

pc.Mat4.prototype.getZ = function(z) {
	if (z === undefined) {
		z = new pc.Vec3();
	}
	mat4_getZ(this.ptr, z.ptr);
	return z;
}

pc.Mat4.prototype.invert = function() {
	mat4_invert(this.ptr);
	return this;
}

pc.Mat4.prototype.invertTo3x3 = function(mat3) {
	mat4_invertTo3x3(this.ptr, mat3.ptr);
	return this;
}

pc.Mat4.prototype.isIdentity = function() {
	return !!mat4_isIdentity(this.ptr);
}

pc.Mat4.prototype.mul = function(rhs) {
	mat4_mul(this.ptr, rhs.ptr);
	return this;
}

pc.Mat4.prototype.mul2 = function(lhs, rhs) {
	mat4_mul2(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}




pc.Mat4.prototype.toString = function() {
	var i, t;
	t = '[';
	for (i = 0; i < 16; i += 1) {
		t += this.data[i];
		t += (i !== 15) ? ', ' : '';
	}
	t += ']';
	return t;
}

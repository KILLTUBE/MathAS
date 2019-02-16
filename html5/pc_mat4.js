mat4_constructor  = instance.exports["Mat4#constructor"];
mat4_add          = instance.exports["Mat4#add"];
mat4_add2         = instance.exports["Mat4#add2"];
mat4_clone        = instance.exports["Mat4#clone"];
mat4_copy         = instance.exports["Mat4#copy"];
mat4_equals       = instance.exports["Mat4#equals"];
mat4_isIdentity   = instance.exports["Mat4#isIdentity"];
mat4_mul2         = instance.exports["Mat4#mul2"];
mat4_mul          = instance.exports["Mat4#mul"];

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

pc.Mat4.prototype.isIdentity = function() {
	return !!mat4_isIdentity(this.ptr);
}

pc.Mat4.prototype.mul2 = function(lhs, rhs) {
	mat4_mul2(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Mat4.prototype.mul = function(rhs) {
	mat4_mul(this.ptr, rhs.ptr);
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

mat4_constructor  = instance.exports["Mat4#constructor"];
mat4_add          = instance.exports["Mat4#add"];
mat4_add2         = instance.exports["Mat4#add2"];

pc.Mat4 = function() {
	this.ptr = mat4_constructor(0);
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
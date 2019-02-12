mat4_constructor  = instance.exports["Mat4#constructor"];

pc.Mat4 = function() {
	this.ptr = mat4_constructor(0);
	//this.wrap = module.Mat4.wrap(this.ptr)
	this.ptr_data = module.U32[this.ptr >> 2];
	this.ptr_ptr_data = module.U32[this.ptr_data >> 2];
	this.data = new Float32Array(instance.exports.memory.buffer, this.ptr_ptr_data + 8, 16);
}

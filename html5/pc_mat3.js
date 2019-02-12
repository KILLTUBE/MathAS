mat3_constructor  = instance.exports["Mat3#constructor"];
mat3_add          = instance.exports["Mat3#add"];
mat3_add2         = instance.exports["Mat3#add2"];
mat3_clone        = instance.exports["Mat3#clone"];
mat3_copy         = instance.exports["Mat3#copy"];
mat3_equals       = instance.exports["Mat3#equals"];
mat3_isIdentity   = instance.exports["Mat3#isIdentity"];
mat3_mul2         = instance.exports["Mat3#mul2"];
mat3_mul          = instance.exports["Mat3#mul"];

pc.Mat3 = function() {
	this.ptr = mat3_constructor(0);
	this.setupWrapper();
}

pc.Mat3.wrap = function(ptr) {
	var tmp = Object.create(pc.Mat3.prototype);
	tmp.ptr = ptr;
	tmp.setupWrapper();
	return tmp;
}

pc.Mat3.prototype.setupWrapper = function() {
	//this.wrap = module.Mat3.wrap(this.ptr)
	this.ptr_data = module.U32[this.ptr >> 2];
	this.ptr_ptr_data = module.U32[this.ptr_data >> 2];
	this.data = new Float32Array(instance.exports.memory.buffer, this.ptr_ptr_data + 8, 9);	
}

pc.Mat3.prototype.add = function(rhs) {
	mat3_add(this.ptr, rhs.ptr);
	return this;
}

pc.Mat3.prototype.add2 = function(lhs, rhs) {
	mat3_add(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Mat3.prototype.clone = function() {
	var ptr = mat3_clone(this.ptr);
	var tmp = pc.Mat3.wrap(ptr);
	return tmp;
}
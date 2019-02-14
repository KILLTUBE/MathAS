vec3_add          = instance.exports["Vec3#add"];
vec3_add2         = instance.exports["Vec3#add2"];
vec3_clone        = instance.exports["Vec3#clone"];
vec3_constructor  = instance.exports["Vec3#constructor"];
vec3_copy         = instance.exports["Vec3#copy"];
vec3_cross        = instance.exports["Vec3#cross"];
vec3_dot          = instance.exports["Vec3#dot"];
vec3_equals       = instance.exports["Vec3#equals"];
vec3_length       = instance.exports["Vec3#length"];
vec3_lengthSq     = instance.exports["Vec3#lengthSq"];
vec3_lerp         = instance.exports["Vec3#lerp"];
vec3_mul          = instance.exports["Vec3#mul"];
vec3_mul2         = instance.exports["Vec3#mul2"];
vec3_normalize    = instance.exports["Vec3#normalize"];
vec3_project      = instance.exports["Vec3#project"];
vec3_scale        = instance.exports["Vec3#scale"];
vec3_set          = instance.exports["Vec3#set"];
vec3_sub          = instance.exports["Vec3#sub"];
vec3_sub2         = instance.exports["Vec3#sub2"];

/**
 * @constructor
 */

pc.Vec3 = function(x, y, z) {
	if (x && x.length === 3) {
		this.ptr = vec3_constructor(0, x[0], x[1], x[2]);
	} else {
		this.ptr = vec3_constructor(0, x || 0, y || 0, z || 0);
	}
}

pc.Vec3.wrap = function(ptr) {
	var tmp = Object.create(pc.Vec3.prototype);
	tmp.ptr = ptr;
	return tmp;
}

pc.Vec3.prototype.add = function(rhs) {
	vec3_add(this.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.add2 = function(lhs, rhs) {
	vec3_add2(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.clone = function() {
	var tmp = vec3_clone(this.ptr);
	return pc.Vec3.wrap(tmp);
}

pc.Vec3.prototype.copy = function(rhs) {
	vec3_copy(this.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.cross = function(lhs, rhs) {
	vec3_cross(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.dot = function(rhs) {
	return vec3_dot(this.ptr, rhs.ptr);
}

pc.Vec3.prototype.equals = function(rhs) {
	return !!vec3_equals(this.ptr, rhs.ptr);
}

pc.Vec3.prototype.length = function() {
	return vec3_length(this.ptr);
}

pc.Vec3.prototype.lengthSq = function() {
	return vec3_lengthSq(this.ptr);
}

pc.Vec3.prototype.lerp = function(lhs, rhs, alpha) {
	vec3_lerp(this.ptr, lhs.ptr, rhs.ptr, alpha);
	return this;
}

pc.Vec3.prototype.mul = function(rhs) {
	vec3_mul(this.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.mul2 = function(lhs, rhs) {
	vec3_mul2(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.normalize = function() {
	vec3_normalize(this.ptr);
	return this;
}

pc.Vec3.prototype.project = function(rhs) {
	vec3_project(this.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.scale = function(scalar) {
	vec3_scale(this.ptr, scalar);
	return this;
}

pc.Vec3.prototype.set = function(x, y, z) {
	vec3_set(this.ptr, x, y, z);
	return this;
}

pc.Vec3.prototype.sub = function(rhs) {
	vec3_sub(this.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.sub2 = function(lhs, rhs) {
	vec3_sub2(this.ptr, lhs.ptr, rhs.ptr);
	return this;
}

pc.Vec3.prototype.toString = function() {
	return '[' + this.x + ', ' + this.y + ', ' + this.z + ']';
}

Object.defineProperty(pc.Vec3.prototype, 'x', {
	get: function() {
		return module.F32[this.ptr >> 2]; // the shifting is same as dividing by 4, used to quickly lookup the value in module.F32
	},
	set: function(newValue) {
		module.F32[this.ptr >> 2] = newValue;
	}
});

Object.defineProperty(pc.Vec3.prototype, 'y', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 1];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 1] = newValue;
	}
});

Object.defineProperty(pc.Vec3.prototype, 'z', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 2];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 2] = newValue;
	}
});

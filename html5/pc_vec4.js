vec4_constructor  = instance.exports["Vec4#constructor"];
vec4_add          = instance.exports["Vec4#add"];

pc.Vec4 = function(x, y, z, w) {
	if (x && x.length === 4) {
		this.ptr = vec4_constructor(0, x[0], x[1], x[2], x[3]);
	} else {
		this.ptr = vec4_constructor(0, x || 0, y || 0, z || 0, w || 0);
	}
}


pc.Vec4.prototype.toString = function() {
	return '[' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ']';
}

Object.defineProperty(pc.Vec4.prototype, 'x', {
	get: function() {
		return module.F32[this.ptr >> 2]; // the shifting is same as dividing by 4, used to quickly lookup the value in module.F32
	},
	set: function(newValue) {
		module.F32[this.ptr >> 2] = newValue;
	}
});

Object.defineProperty(pc.Vec4.prototype, 'y', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 1];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 1] = newValue;
	}
});

Object.defineProperty(pc.Vec4.prototype, 'z', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 2];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 2] = newValue;
	}
});

Object.defineProperty(pc.Vec4.prototype, 'w', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 3];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 3] = newValue;
	}
});

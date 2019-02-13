vec2_constructor  = instance.exports["Vec2#constructor"];
vec2_add          = instance.exports["Vec2#add"];

pc.Vec2 = function(x, y) {
	if (x && x.length === 2) {
		this.ptr = vec2_constructor(0, x[0], x[1]);
	} else {
		this.ptr = vec2_constructor(0, x || 0, y || 0);
	}
}

pc.Vec2.prototype.toString = function() {
	return '[' + this.x + ', ' + this.y + ']';
}

Object.defineProperty(pc.Vec2.prototype, 'x', {
	get: function() {
		return module.F32[this.ptr >> 2]; // the shifting is same as dividing by 4, used to quickly lookup the value in module.F32
	},
	set: function(newValue) {
		module.F32[this.ptr >> 2] = newValue;
	}
});

Object.defineProperty(pc.Vec2.prototype, 'y', {
	get: function() {
		return module.F32[(this.ptr >> 2) + 1];
	},
	set: function(newValue) {
		module.F32[(this.ptr >> 2) + 1] = newValue;
	}
});

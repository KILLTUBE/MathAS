AnimationKeyableNum_clone       = instance.exports["AnimationKeyableNum#clone"];
AnimationKeyableNum_constructor = instance.exports["AnimationKeyableNum#constructor"];
AnimationKeyableNum_copy        = instance.exports["AnimationKeyableNum#copy"];
AnimationKeyableNum_get_time    = instance.exports["AnimationKeyableNum#get:time"];
AnimationKeyableNum_get_type    = instance.exports["AnimationKeyableNum#get:type"];
AnimationKeyableNum_get_value   = instance.exports["AnimationKeyableNum#get:value"];
AnimationKeyableNum_linearBlend = instance.exports["AnimationKeyableNum#linearBlend"];
AnimationKeyableNum_set_time    = instance.exports["AnimationKeyableNum#set:time"];
AnimationKeyableNum_set_type    = instance.exports["AnimationKeyableNum#set:type"];
AnimationKeyableNum_set_value   = instance.exports["AnimationKeyableNum#set:value"];

AnimationKeyableNum = function(time, value) {
	time = time || 0.0;
	value = value || 0.0;
	this.ptr = AnimationKeyableNum_constructor(0, time, value);
}

AnimationKeyableNum.wrap = function(ptr) {
	var tmp = Object.create(AnimationKeyableNum.prototype);
	tmp.ptr = ptr;
	return tmp;
}

AnimationKeyableNum.prototype.clone = function() {
	var ptr = AnimationKeyableNum_clone(this.ptr);
	var tmp = AnimationKeyableNum.wrap(ptr);
	return tmp;
}

AnimationKeyableNum.prototype.copy = function(other) {
	AnimationKeyableNum_copy(this.ptr, other.ptr);
}

AnimationKeyableNum.prototype.linearBlend = function(lhs, rhs, alpha) {
	AnimationKeyableNum_linearBlend(this.ptr, lhs.ptr, rhs.ptr, alpha);
}

AnimationKeyableNum.prototype.toString = function() {
	return "new AnimationKeyableNum(" + this.time + ", " + this.value + ");";
}

AnimationKeyableNum.prototype.toStringFixed = function(n) {
	return "new AnimationKeyableNum(" + this.time.toFixed(n) + ", " + this.value.toFixed(n) + ");";
}

Object.defineProperty(AnimationKeyableNum.prototype, 'time', {
	get: function() {
		return AnimationKeyableNum_get_time(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableNum.prototype, 'type', {
	get: function() {
		return AnimationKeyableNum_get_type(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableNum.prototype, 'value', {
	get: function() {
		return AnimationKeyableNum_get_value(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

AnimationKeyableNumCubicSpline_clone             = instance.exports["AnimationKeyableNumCubicSpline#clone"];
AnimationKeyableNumCubicSpline_constructor       = instance.exports["AnimationKeyableNumCubicSpline#constructor"];
AnimationKeyableNumCubicSpline_copy              = instance.exports["AnimationKeyableNumCubicSpline#copy"];
AnimationKeyableNumCubicSpline_cubicHermite      = instance.exports["AnimationKeyableNumCubicSpline#cubicHermite"];
AnimationKeyableNumCubicSpline_get_inTangent     = instance.exports["AnimationKeyableNumCubicSpline#get:inTangent"];
AnimationKeyableNumCubicSpline_get_outTangent    = instance.exports["AnimationKeyableNumCubicSpline#get:outTangent"];
AnimationKeyableNumCubicSpline_get_time          = instance.exports["AnimationKeyableNumCubicSpline#get:time"];
AnimationKeyableNumCubicSpline_get_type          = instance.exports["AnimationKeyableNumCubicSpline#get:type"];
AnimationKeyableNumCubicSpline_get_value         = instance.exports["AnimationKeyableNumCubicSpline#get:value"];
AnimationKeyableNumCubicSpline_set_inTangent     = instance.exports["AnimationKeyableNumCubicSpline#set:inTangent"];
AnimationKeyableNumCubicSpline_set_outTangent    = instance.exports["AnimationKeyableNumCubicSpline#set:outTangent"];
AnimationKeyableNumCubicSpline_set_time          = instance.exports["AnimationKeyableNumCubicSpline#set:time"];
AnimationKeyableNumCubicSpline_set_type          = instance.exports["AnimationKeyableNumCubicSpline#set:type"];
AnimationKeyableNumCubicSpline_set_value         = instance.exports["AnimationKeyableNumCubicSpline#set:value"];

AnimationKeyableNumCubicSpline = function(time, value, inTangent, outTangent) {
	time = time || 0.0;
	value = value || 0.0;
	inTangent = inTangent || 0.0;
	outTangent = outTangent || 0.0;
	this.ptr = AnimationKeyableNumCubicSpline_constructor(0, time, value, inTangent, outTangent);
}

AnimationKeyableNumCubicSpline.wrap = function(ptr) {
	var tmp = Object.create(AnimationKeyableNumCubicSpline.prototype);
	tmp.ptr = ptr;
	return tmp;
}

AnimationKeyableNumCubicSpline.prototype.clone = function() {
	var ptr = AnimationKeyableNumCubicSpline_clone(this.ptr);
	var tmp = AnimationKeyableNumCubicSpline.wrap(ptr);
	return tmp;
}

AnimationKeyableNumCubicSpline.prototype.copy = function(other) {
	AnimationKeyableNumCubicSpline_copy(this.ptr, other.ptr);
}

AnimationKeyableNumCubicSpline.prototype.cubicHermite = function(lhs, rhs, alpha) {
	AnimationKeyableNumCubicSpline_cubicHermite(this.ptr, lhs.ptr, rhs.ptr, alpha);
}

AnimationKeyableNumCubicSpline.prototype.toString = function() {
	tmp += "new AnimationKeyableNumCubicSpline(";
	tmp += this.time + ", ";
	tmp += this.value + ", ";
	tmp += this.inTangent + ", ";
	tmp += this.outTangent;
	tmp += ");";
	return tmp;
}

AnimationKeyableNumCubicSpline.prototype.toStringFixed = function(n) {
	var tmp = "new AnimationKeyableNumCubicSpline(";
	tmp += this.time.toFixed(n) + ", ";
	tmp += this.value.toFixed(n) + ", ";
	tmp += this.inTangent.toFixed(n) + ", ";
	tmp += this.outTangent.toFixed(n);
	tmp += ");";
	return tmp;
}

Object.defineProperty(AnimationKeyableNumCubicSpline.prototype, 'time', {
	get: function() {
		return AnimationKeyableNumCubicSpline_get_time(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableNumCubicSpline.prototype, 'type', {
	get: function() {
		return AnimationKeyableNumCubicSpline_get_type(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableNumCubicSpline.prototype, 'value', {
	get: function() {
		return AnimationKeyableNumCubicSpline_get_value(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

AnimationKeyableQuat_clone        = instance.exports["AnimationKeyableQuat#clone"];
AnimationKeyableQuat_constructor  = instance.exports["AnimationKeyableQuat#constructor"];
AnimationKeyableQuat_copy         = instance.exports["AnimationKeyableQuat#copy"];
AnimationKeyableQuat_get_time     = instance.exports["AnimationKeyableQuat#get:time"];
AnimationKeyableQuat_get_type     = instance.exports["AnimationKeyableQuat#get:type"];
AnimationKeyableQuat_get_value    = instance.exports["AnimationKeyableQuat#get:value"];
AnimationKeyableQuat_linearBlend  = instance.exports["AnimationKeyableQuat#linearBlend"];
AnimationKeyableQuat_set_time     = instance.exports["AnimationKeyableQuat#set:time"];
AnimationKeyableQuat_set_type     = instance.exports["AnimationKeyableQuat#set:type"];
AnimationKeyableQuat_set_value    = instance.exports["AnimationKeyableQuat#set:value"];

AnimationKeyableQuat = function(time, value) {
	time = time || 0.0;
	value = value || new pc.Quat();
	this.ptr = AnimationKeyableQuat_constructor(0, time, value.ptr);
}

AnimationKeyableQuat.wrap = function(ptr) {
	var tmp = Object.create(AnimationKeyableQuat.prototype);
	tmp.ptr = ptr;
	return tmp;
}

AnimationKeyableQuat.prototype.clone = function() {
	var ptr = AnimationKeyableQuat_clone(this.ptr);
	var tmp = AnimationKeyableQuat.wrap(ptr);
	return tmp;
}

AnimationKeyableQuat.prototype.copy = function(other) {
	AnimationKeyableQuat_copy(this.ptr, other.ptr);
}

AnimationKeyableQuat.prototype.linearBlend = function(lhs, rhs, alpha) {
	AnimationKeyableQuat_linearBlend(this.ptr, lhs.ptr, rhs.ptr, alpha);
}

AnimationKeyableQuat.prototype.toString = function() {
	return "new AnimationKeyableQuat(" + this.time + ", " + this.value + ");";
}

AnimationKeyableQuat.prototype.toStringFixed = function(n) {
	return "new AnimationKeyableQuat(" + this.time.toFixed(n) + ", " + this.value.toStringFixed(n) + ");";
}

Object.defineProperty(AnimationKeyableQuat.prototype, 'time', {
	get: function() {
		return AnimationKeyableQuat_get_time(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableQuat.prototype, 'type', {
	get: function() {
		return AnimationKeyableQuat_get_type(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableQuat.prototype, 'value', {
	get: function() {
		var ptr_value = AnimationKeyableQuat_get_value(this.ptr);
		return pc.Quat.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});

AnimationKeyableQuatCubicSpline_clone          = instance.exports["AnimationKeyableQuatCubicSpline#clone"];
AnimationKeyableQuatCubicSpline_constructor    = instance.exports["AnimationKeyableQuatCubicSpline#constructor"];
AnimationKeyableQuatCubicSpline_copy           = instance.exports["AnimationKeyableQuatCubicSpline#copy"];
AnimationKeyableQuatCubicSpline_cubicHermite   = instance.exports["AnimationKeyableQuatCubicSpline#cubicHermite"];
AnimationKeyableQuatCubicSpline_get_inTangent  = instance.exports["AnimationKeyableQuatCubicSpline#get:inTangent"];
AnimationKeyableQuatCubicSpline_get_outTangent = instance.exports["AnimationKeyableQuatCubicSpline#get:outTangent"];
AnimationKeyableQuatCubicSpline_get_time       = instance.exports["AnimationKeyableQuatCubicSpline#get:time"];
AnimationKeyableQuatCubicSpline_get_type       = instance.exports["AnimationKeyableQuatCubicSpline#get:type"];
AnimationKeyableQuatCubicSpline_get_value      = instance.exports["AnimationKeyableQuatCubicSpline#get:value"];
AnimationKeyableQuatCubicSpline_set_inTangent  = instance.exports["AnimationKeyableQuatCubicSpline#set:inTangent"];
AnimationKeyableQuatCubicSpline_set_outTangent = instance.exports["AnimationKeyableQuatCubicSpline#set:outTangent"];
AnimationKeyableQuatCubicSpline_set_time       = instance.exports["AnimationKeyableQuatCubicSpline#set:time"];
AnimationKeyableQuatCubicSpline_set_type       = instance.exports["AnimationKeyableQuatCubicSpline#set:type"];
AnimationKeyableQuatCubicSpline_set_value      = instance.exports["AnimationKeyableQuatCubicSpline#set:value"];

AnimationKeyableQuatCubicSpline = function(time, value) {
	time = time || 0.0;
	value = value || new pc.Quat();
	inTangent = value || new pc.Quat();
	outTangent = value || new pc.Quat();
	this.ptr = AnimationKeyableQuatCubicSpline_constructor(0, time, value.ptr, inTangent.ptr, outTangent.ptr);
}

AnimationKeyableQuatCubicSpline.wrap = function(ptr) {
	var tmp = Object.create(AnimationKeyableQuatCubicSpline.prototype);
	tmp.ptr = ptr;
	return tmp;
}

AnimationKeyableQuatCubicSpline.prototype.clone = function() {
	var ptr = AnimationKeyableQuatCubicSpline_clone(this.ptr);
	var tmp = AnimationKeyableQuatCubicSpline.wrap(ptr);
	return tmp;
}

AnimationKeyableQuatCubicSpline.prototype.copy = function(other) {
	AnimationKeyableQuatCubicSpline_copy(this.ptr, other.ptr);
}

AnimationKeyableQuatCubicSpline.prototype.linearBlend = function(lhs, rhs, alpha) {
	AnimationKeyableQuatCubicSpline_linearBlend(this.ptr, lhs.ptr, rhs.ptr, alpha);
}

AnimationKeyableQuatCubicSpline.prototype.toString = function() {
	return "new AnimationKeyableQuatCubicSpline(" + this.time + ", " + this.value + ");";
}

AnimationKeyableQuatCubicSpline.prototype.toStringFixed = function(n) {
	return "new AnimationKeyableQuatCubicSpline(" + this.time.toFixed(n) + ", " + this.value.toStringFixed(n) + ");";
}

Object.defineProperty(AnimationKeyableQuatCubicSpline.prototype, 'time', {
	get: function() {
		return AnimationKeyableQuatCubicSpline_get_time(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableQuatCubicSpline.prototype, 'type', {
	get: function() {
		return AnimationKeyableQuatCubicSpline_get_type(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableQuatCubicSpline.prototype, 'value', {
	get: function() {
		var ptr_value = AnimationKeyableQuatCubicSpline_get_value(this.ptr);
		return pc.Quat.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableQuatCubicSpline.prototype, 'inTangent', {
	get: function() {
		var ptr_value = AnimationKeyableQuatCubicSpline_get_inTangent(this.ptr);
		return pc.Quat.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableQuatCubicSpline.prototype, 'outTangent', {
	get: function() {
		var ptr_value = AnimationKeyableQuatCubicSpline_get_outTangent(this.ptr);
		return pc.Quat.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});

AnimationKeyableVec_clone         = instance.exports["AnimationKeyableVec#clone"];
AnimationKeyableVec_constructor   = instance.exports["AnimationKeyableVec#constructor"];
AnimationKeyableVec_copy          = instance.exports["AnimationKeyableVec#copy"];
AnimationKeyableVec_get_time      = instance.exports["AnimationKeyableVec#get:time"];
AnimationKeyableVec_get_type      = instance.exports["AnimationKeyableVec#get:type"];
AnimationKeyableVec_get_value     = instance.exports["AnimationKeyableVec#get:value"];
AnimationKeyableVec_linearBlend   = instance.exports["AnimationKeyableVec#linearBlend"];
AnimationKeyableVec_set_time      = instance.exports["AnimationKeyableVec#set:time"];
AnimationKeyableVec_set_type      = instance.exports["AnimationKeyableVec#set:type"];
AnimationKeyableVec_set_value     = instance.exports["AnimationKeyableVec#set:value"];

AnimationKeyableVec = function(time, value) {
	time = time || 0.0;
	value = value || new pc.Vec3();
	this.ptr = AnimationKeyableVec_constructor(0, time, value.ptr);
}

AnimationKeyableVec.wrap = function(ptr) {
	var tmp = Object.create(AnimationKeyableVec.prototype);
	tmp.ptr = ptr;
	return tmp;
}

AnimationKeyableVec.prototype.clone = function() {
	var ptr = AnimationKeyableVec_clone(this.ptr);
	var tmp = AnimationKeyableVec.wrap(ptr);
	return tmp;
}

AnimationKeyableVec.prototype.copy = function(other) {
	AnimationKeyableVec_copy(this.ptr, other.ptr);
}

AnimationKeyableVec.prototype.linearBlend = function(lhs, rhs, alpha) {
	AnimationKeyableVec_linearBlend(this.ptr, lhs.ptr, rhs.ptr, alpha);
}

AnimationKeyableVec.prototype.toString = function() {
	return "new AnimationKeyableVec(" + this.time + ", " + this.value + ");";
}

AnimationKeyableVec.prototype.toStringFixed = function(n) {
	return "new AnimationKeyableVec(" + this.time.toFixed(n) + ", " + this.value.toStringFixed(n) + ");";
}

Object.defineProperty(AnimationKeyableVec.prototype, 'time', {
	get: function() {
		return AnimationKeyableVec_get_time(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableVec.prototype, 'type', {
	get: function() {
		return AnimationKeyableVec_get_type(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableVec.prototype, 'value', {
	get: function() {
		var ptr_value = AnimationKeyableVec_get_value(this.ptr);
		return pc.Vec3.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});


AnimationKeyableVecCubicSpline_clone           = instance.exports["AnimationKeyableVecCubicSpline#clone"];
AnimationKeyableVecCubicSpline_constructor     = instance.exports["AnimationKeyableVecCubicSpline#constructor"];
AnimationKeyableVecCubicSpline_copy            = instance.exports["AnimationKeyableVecCubicSpline#copy"];
AnimationKeyableVecCubicSpline_cubicHermite    = instance.exports["AnimationKeyableVecCubicSpline#cubicHermite"];
AnimationKeyableVecCubicSpline_get_inTangent   = instance.exports["AnimationKeyableVecCubicSpline#get:inTangent"];
AnimationKeyableVecCubicSpline_get_outTangent  = instance.exports["AnimationKeyableVecCubicSpline#get:outTangent"];
AnimationKeyableVecCubicSpline_get_time        = instance.exports["AnimationKeyableVecCubicSpline#get:time"];
AnimationKeyableVecCubicSpline_get_type        = instance.exports["AnimationKeyableVecCubicSpline#get:type"];
AnimationKeyableVecCubicSpline_get_value       = instance.exports["AnimationKeyableVecCubicSpline#get:value"];
AnimationKeyableVecCubicSpline_set_inTangent   = instance.exports["AnimationKeyableVecCubicSpline#set:inTangent"];
AnimationKeyableVecCubicSpline_set_outTangent  = instance.exports["AnimationKeyableVecCubicSpline#set:outTangent"];
AnimationKeyableVecCubicSpline_set_time        = instance.exports["AnimationKeyableVecCubicSpline#set:time"];
AnimationKeyableVecCubicSpline_set_type        = instance.exports["AnimationKeyableVecCubicSpline#set:type"];
AnimationKeyableVecCubicSpline_set_value       = instance.exports["AnimationKeyableVecCubicSpline#set:value"];


AnimationKeyableVecCubicSpline = function(time, value, inTangent, outTangent) {
	time = time || 0.0;
	value = value || new pc.Vec3();
	inTangent = inTangent || new pc.Vec3();
	outTangent = outTangent || new pc.Vec3();
	this.ptr = AnimationKeyableVecCubicSpline_constructor(0, time, value.ptr, inTangent.ptr, outTangent.ptr);
}

AnimationKeyableVecCubicSpline.wrap = function(ptr) {
	var tmp = Object.create(AnimationKeyableVecCubicSpline.prototype);
	tmp.ptr = ptr;
	return tmp;
}

AnimationKeyableVecCubicSpline.prototype.clone = function() {
	var ptr = AnimationKeyableVecCubicSpline_clone(this.ptr);
	var tmp = AnimationKeyableVecCubicSpline.wrap(ptr);
	return tmp;
}

AnimationKeyableVecCubicSpline.prototype.copy = function(other) {
	AnimationKeyableVecCubicSpline_copy(this.ptr, other.ptr);
}

AnimationKeyableVecCubicSpline.prototype.cubicHermite = function(lhs, rhs, alpha) {
	AnimationKeyableVecCubicSpline_cubicHermite(this.ptr, lhs.ptr, rhs.ptr, alpha);
}

AnimationKeyableVecCubicSpline.prototype.toString = function() {
	return "new AnimationKeyableVecCubicSpline(" + this.time + ", " + this.value + ");";
}

AnimationKeyableVecCubicSpline.prototype.toStringFixed = function(n) {
	return "new AnimationKeyableVecCubicSpline(" + this.time.toFixed(n) + ", " + this.value.toStringFixed(n) + ");";
}

Object.defineProperty(AnimationKeyableVecCubicSpline.prototype, 'time', {
	get: function() {
		return AnimationKeyableVecCubicSpline_get_time(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableVecCubicSpline.prototype, 'type', {
	get: function() {
		return AnimationKeyableVecCubicSpline_get_type(this.ptr);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableVecCubicSpline.prototype, 'value', {
	get: function() {
		var ptr_value = AnimationKeyableVecCubicSpline_get_value(this.ptr);
		return pc.Vec3.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableVecCubicSpline.prototype, 'inTangent', {
	get: function() {
		var ptr_value = AnimationKeyableVecCubicSpline_get_inTangent(this.ptr);
		return pc.Vec3.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});

Object.defineProperty(AnimationKeyableVecCubicSpline.prototype, 'outTangent', {
	get: function() {
		var ptr_value = AnimationKeyableVecCubicSpline_get_outTangent(this.ptr);
		return pc.Vec3.wrap(ptr_value);
	},
	set: function(newValue) {
		// todo
	}
});
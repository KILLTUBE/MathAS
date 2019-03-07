

var AnimationKeyableType = {
    NUM              : 0,
    VEC2             : 1,
    VEC              : 2, // todo: rename to VEC3
    VEC4             : 3,
    QUAT             : 4,
    NUM_CUBICSCPLINE : 5,
    VEC2_CUBICSCPLINE: 6,
    VEC_CUBICSCPLINE : 7, // todo: rename to VEC3_CUBICSPLINE
    VEC4_CUBICSCPLINE: 8,
    QUAT_CUBICSCPLINE: 9
}

AnimationKeyableNum_clone       = instance.exports["AnimationKeyableNum#clone"];
AnimationKeyableNum_constructor = instance.exports["AnimationKeyableNum#constructor"];
AnimationKeyableNum_copy        = instance.exports["AnimationKeyableNum#copy"];
//AnimationKeyableNum_get:time    = instance.exports["AnimationKeyableNum#"];
//AnimationKeyableNum_get:type    = instance.exports["AnimationKeyableNum#"];
AnimationKeyableNum_get_value   = instance.exports["AnimationKeyableNum#get:value"];
AnimationKeyableNum_linearBlend = instance.exports["AnimationKeyableNum#linearBlend"];
//AnimationKeyableNum_set:time    = instance.exports["AnimationKeyableNum#"];
//AnimationKeyableNum_set:type    = instance.exports["AnimationKeyableNum#"];
AnimationKeyableNum_set_value   = instance.exports["AnimationKeyableNum#set:value"];

AnimationKeyableNum = function(time, value) {
	time = time || 0.0;
	value = value || 0.0;
	this.type = AnimationKeyableType.AnimationKeyableNum;
	this.ptr = AnimationKeyableNum_constructor(0, time, value);
}

Object.defineProperty(AnimationKeyableNum.prototype, 'value', {
	get: function() {
		return AnimationKeyableNum_get_value(this.ptr);
	},
	set: function(newValue) {
	}
});

AnimationKeyableNumCubicSpline_clone             = instance.exports["AnimationKeyableNumCubicSpline#clone"]  
AnimationKeyableNumCubicSpline_constructor       = instance.exports["AnimationKeyableNumCubicSpline#constructor"]        
AnimationKeyableNumCubicSpline_copy              = instance.exports["AnimationKeyableNumCubicSpline#copy"] 
AnimationKeyableNumCubicSpline_cubicHermite      = instance.exports["AnimationKeyableNumCubicSpline#cubicHermite"]         
//AnimationKeyableNumCubicSpline#get:inTangent     = instance.exports["AnimationKeyableNumCubicSpline#"]          
//AnimationKeyableNumCubicSpline#get:outTangent    = instance.exports["AnimationKeyableNumCubicSpline#"]           
//AnimationKeyableNumCubicSpline#get:time          = instance.exports["AnimationKeyableNumCubicSpline#"]     
//AnimationKeyableNumCubicSpline#get:type          = instance.exports["AnimationKeyableNumCubicSpline#"]     
//AnimationKeyableNumCubicSpline#get:value         = instance.exports["AnimationKeyableNumCubicSpline#"]      
//AnimationKeyableNumCubicSpline#set:inTangent     = instance.exports["AnimationKeyableNumCubicSpline#"]          
//AnimationKeyableNumCubicSpline#set:outTangent    = instance.exports["AnimationKeyableNumCubicSpline#"]           
//AnimationKeyableNumCubicSpline#set:time          = instance.exports["AnimationKeyableNumCubicSpline#"]     
//AnimationKeyableNumCubicSpline#set:type          = instance.exports["AnimationKeyableNumCubicSpline#"]     
//AnimationKeyableNumCubicSpline#set:value         = instance.exports["AnimationKeyableNumCubicSpline#"]      

AnimationKeyableQuat_clone        = instance.exports["AnimationKeyableQuat#clone"];
AnimationKeyableQuat_constructor  = instance.exports["AnimationKeyableQuat#constructor"];
AnimationKeyableQuat_copy         = instance.exports["AnimationKeyableQuat#copy"];
//AnimationKeyableQuat#get:time     = instance.exports["AnimationKeyableQuat#"]    
//AnimationKeyableQuat#get:type     = instance.exports["AnimationKeyableQuat#"]    
//AnimationKeyableQuat#get:value    = instance.exports["AnimationKeyableQuat#"]     
AnimationKeyableQuat_linearBlend  = instance.exports["AnimationKeyableQuat#linearBlend"];
//AnimationKeyableQuat#set:time     = instance.exports["AnimationKeyableQuat#"]    
//AnimationKeyableQuat#set:type     = instance.exports["AnimationKeyableQuat#"]    
//AnimationKeyableQuat#set:value    = instance.exports["AnimationKeyableQuat#"]     

AnimationKeyableQuatCubicSpline_clone          = instance.exports["AnimationKeyableQuatCubicSpline#clone"];
AnimationKeyableQuatCubicSpline_constructor    = instance.exports["AnimationKeyableQuatCubicSpline#constructor"];
AnimationKeyableQuatCubicSpline_copy           = instance.exports["AnimationKeyableQuatCubicSpline#copy"];
AnimationKeyableQuatCubicSpline_cubicHermite   = instance.exports["AnimationKeyableQuatCubicSpline#cubicHermite"];
//AnimationKeyableQuatCubicSpline_get:inTangent  = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_get:outTangent = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_get:time       = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_get:type       = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_get:value      = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_set:inTangent  = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_set:outTangent = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_set:time       = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_set:type       = instance.exports["AnimationKeyableQuatCubicSpline#"];
//AnimationKeyableQuatCubicSpline_set:value      = instance.exports["AnimationKeyableQuatCubicSpline#"];

AnimationKeyableVec_clone         = instance.exports["AnimationKeyableVec#clone"];
AnimationKeyableVec_constructor   = instance.exports["AnimationKeyableVec#constructor"];
AnimationKeyableVec_copy          = instance.exports["AnimationKeyableVec#copy"];
//AnimationKeyableVec#get:time      = instance.exports["AnimationKeyableVec#"];
//AnimationKeyableVec#get:type      = instance.exports["AnimationKeyableVec#"];
AnimationKeyableVec_get_value     = instance.exports["AnimationKeyableVec#get:value"];
AnimationKeyableVec_linearBlend   = instance.exports["AnimationKeyableVec#linearBlend"];
//AnimationKeyableVec#set:time      = instance.exports["AnimationKeyableVec#"];
//AnimationKeyableVec#set:type      = instance.exports["AnimationKeyableVec#"];
AnimationKeyableVec_set_value     = instance.exports["AnimationKeyableVec#set:value"];


AnimationKeyableVec = function(time, value) {
	time = time || 0.0;
	value = value || new pc.Vec3();
	this.type = AnimationKeyableType.AnimationKeyableVec;
	console.log(value.ptr);
	this.ptr = AnimationKeyableVec_constructor(0, time, value.ptr);
}

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
//AnimationKeyableVecCubicSpline#get:inTangent   = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#get:outTangent  = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#get:time        = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#get:type        = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#get:value       = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#set:inTangent   = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#set:outTangent  = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#set:time        = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#set:type        = instance.exports["AnimationKeyableVecCubicSpline#"];
//AnimationKeyableVecCubicSpline#set:value       = instance.exports["AnimationKeyableVecCubicSpline#"];
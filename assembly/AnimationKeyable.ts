import { Vec3 } from "./Vec3";
import { Quat } from "./Quat";

enum AnimationKeyableType {
    NUM               ,
    VEC2              ,
    VEC               , // todo: rename to VEC3
    VEC4              ,
    QUAT              ,
    NUM_CUBICSCPLINE  ,
    VEC2_CUBICSCPLINE ,
    VEC_CUBICSCPLINE  , // todo: rename to VEC3_CUBICSPLINE
    VEC4_CUBICSCPLINE ,
    QUAT_CUBICSCPLINE 
};

/**
 * @summary static method: tangent 1, value 1, tangent 2, value 2, proportion
 */

export function cubicHermite(t1: f32, v1: f32, t2: f32, v2: f32, p: f32): f32 {
    // basis
    var p2 = p * p;
    var p3 = p2 * p;
    var h0 = 2 * p3 - 3 * p2 + 1;
    var h1 = -2 * p3 + 3 * p2;
    var h2 = p3 - 2 * p2 + p;
    var h3 = p3 - p2;

    // interpolation
    return v1 * h0 + v2 * h1 + t1 * h2 + t2 * h3;
};

export class AnimationKeyableNum {
	type: AnimationKeyableType;
	time: f32;
	value: f32;

	constructor(time: f32, value: f32) {
		this.type = AnimationKeyableType.NUM;
		this.time = time;
		this.value = value;
	}

	copy(other: AnimationKeyableNum): AnimationKeyableNum {
		this.time = other.time;
		this.value = other.value;
		return this;
	}

	clone(): AnimationKeyableNum {
		return new AnimationKeyableNum(
			this.time,
			this.value
		);
	}

	linearBlend(lhs: AnimationKeyableNum, rhs: AnimationKeyableNum, alpha: f32) {
		this.value = (1.0 - alpha) * lhs.value + alpha * rhs.value;
	}
};

export class AnimationKeyableVec {
	type: AnimationKeyableType;
	time: f32;
	value: Vec3;

	constructor (time: f32, value: Vec3) {
		this.type  = AnimationKeyableType.VEC;
		this.time  = time;
		this.value = value;
	}
	
	copy(other: AnimationKeyableVec): AnimationKeyableVec {
		this.time = other.time;
		this.value.copy(other.value);
		return this;
	}

	clone(): AnimationKeyableVec {
		return new AnimationKeyableVec(
			this.time,
			this.value.clone()
		);
	}

	linearBlend(lhs: AnimationKeyableVec, rhs: AnimationKeyableVec, alpha: f32) {
		this.value.lerp(lhs.value, rhs.value, alpha);
	}
}

export class AnimationKeyableQuat {
	type: AnimationKeyableType;
	time: f32;
	value: Quat;

	constructor(time: f32, value: Quat) {
		this.type  = AnimationKeyableType.QUAT;
		this.time  = time;
		this.value = value;
	}

	copy(other: AnimationKeyableQuat): AnimationKeyableQuat {
		this.time = other.time;
		this.value.copy(other.value);
		return this;
	}

	clone(): AnimationKeyableQuat {
		return new AnimationKeyableQuat(
			this.time,
			this.value.clone()
		);
	}

	linearBlend(lhs: AnimationKeyableQuat, rhs: AnimationKeyableQuat, alpha: f32) {
		this.value.slerp(lhs.value, rhs.value, alpha);
	}
}

export class AnimationKeyableNumCubicSpline {
	type: AnimationKeyableType;
	time: f32;
	value: f32;
	inTangent: f32;
	outTangent: f32;

	constructor(time: f32, value: f32, inTangent: f32, outTangent: f32) {
		this.type = AnimationKeyableType.NUM_CUBICSCPLINE;
		this.time = time;
		this.value = value;
		this.inTangent = inTangent;
		this.outTangent = outTangent;
	}

	copy(other: AnimationKeyableNumCubicSpline): AnimationKeyableNumCubicSpline {
		this.time = other.time;
		this.value = other.value;
		this.inTangent = other.inTangent;
		this.outTangent = other.outTangent;
		return this;
	}

	clone(): AnimationKeyableNumCubicSpline {
		return new AnimationKeyableNumCubicSpline(
			this.time,
			this.value,
			this.inTangent,
			this.outTangent
		);
	}

	cubicHermite(lhs: AnimationKeyableNumCubicSpline, rhs: AnimationKeyableNumCubicSpline, alpha: f32) {
		var g = rhs.time - lhs.time;
		this.value = cubicHermite(g * lhs.outTangent, lhs.value, g * rhs.inTangent, rhs.value, alpha);
	}
}

export class AnimationKeyableVecCubicSpline {
	type: AnimationKeyableType;
	time: f32;
	value: Vec3;
	inTangent: Vec3;
	outTangent: Vec3;

	constructor(time: f32, value: Vec3, inTangent: Vec3, outTangent: Vec3) {
		this.type = AnimationKeyableType.VEC_CUBICSCPLINE;
		this.time = time;
		this.value = value;
		this.inTangent = inTangent;
		this.outTangent = outTangent;
	}
	
	copy(other: AnimationKeyableVecCubicSpline): AnimationKeyableVecCubicSpline {
		this.time = other.time;
		this.value.copy(other.value);
		this.inTangent.copy(other.inTangent);
		this.outTangent.copy(other.outTangent);
		return this;
	}

	clone(): AnimationKeyableVecCubicSpline {
		return new AnimationKeyableVecCubicSpline(
			this.time,
			this.value.clone(),
			this.inTangent.clone(),
			this.outTangent.clone()
		);
	}

	cubicHermite(lhs: AnimationKeyableVecCubicSpline, rhs: AnimationKeyableVecCubicSpline, alpha: f32) {
		var g = rhs.time - lhs.time;
		this.value.x = cubicHermite(g * lhs.outTangent.x, lhs.value.x, g * rhs.inTangent.x, rhs.value.x, alpha);
		this.value.y = cubicHermite(g * lhs.outTangent.y, lhs.value.y, g * rhs.inTangent.y, rhs.value.y, alpha);
		this.value.z = cubicHermite(g * lhs.outTangent.z, lhs.value.z, g * rhs.inTangent.z, rhs.value.z, alpha);
	}	
}

export class AnimationKeyableQuatCubicSpline {
	type: AnimationKeyableType;
	time: f32;
	value: Quat;
	inTangent: Quat;
	outTangent: Quat;

	constructor(time: f32, value: Quat, inTangent: Quat, outTangent: Quat) {
		this.type = AnimationKeyableType.QUAT_CUBICSCPLINE;
		this.time = time;
		this.value = value;
		this.inTangent = inTangent;
		this.outTangent = outTangent;
	}
	
	copy(other: AnimationKeyableQuatCubicSpline): AnimationKeyableQuatCubicSpline {
		this.time = other.time;
		this.value.copy(other.value);
		this.inTangent.copy(other.inTangent);
		this.outTangent.copy(other.outTangent);
		return this;
	}

	clone(): AnimationKeyableQuatCubicSpline {
		return new AnimationKeyableQuatCubicSpline(
			this.time,
			this.value.clone(),
			this.inTangent.clone(),
			this.outTangent.clone()
		);
	}

	cubicHermite(lhs: AnimationKeyableQuatCubicSpline, rhs: AnimationKeyableQuatCubicSpline, alpha: f32) {
		var g = rhs.time - lhs.time;
		this.value.w = cubicHermite(g * lhs.outTangent.w, lhs.value.w, g * rhs.inTangent.w, rhs.value.w, alpha);
		this.value.x = cubicHermite(g * lhs.outTangent.x, lhs.value.x, g * rhs.inTangent.x, rhs.value.x, alpha);
		this.value.y = cubicHermite(g * lhs.outTangent.y, lhs.value.y, g * rhs.inTangent.y, rhs.value.y, alpha);
		this.value.z = cubicHermite(g * lhs.outTangent.z, lhs.value.z, g * rhs.inTangent.z, rhs.value.z, alpha);
		this.value.normalize();
	}
}

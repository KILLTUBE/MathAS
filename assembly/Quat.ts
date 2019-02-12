/**
 * @constructor
 * @name pc.Quat
 * @classdesc A quaternion.
 * @description Create a new Quat object.
 * @param {f32} [x] The quaternion's x component. Default value 0. If x is an array of length 4, the array will be used to populate all components.
 * @param {f32} [y] The quaternion's y component. Default value 0.
 * @param {f32} [z] The quaternion's z component. Default value 0.
 * @param {f32} [w] The quaternion's w component. Default value 1.
 */
export class Quat {
	x: f32;
	y: f32;
	z: f32;
	w: f32;
	//constructor(x?: any, y?: number, z?: number, w?: number) {
	constructor(x: f32, y: f32, z: f32, w: f32) {
		//if (x && x.length === 4) {
		//	this.x = x[0];
		//	this.y = x[1];
		//	this.z = x[2];
		//	this.w = x[3];
		//} else {
		//	this.x = (x === undefined) ? 0 : x;
		//	this.y = (y === undefined) ? 0 : y;
		//	this.z = (z === undefined) ? 0 : z;
		//	this.w = (w === undefined) ? 1 : w;
		//}
	}
}
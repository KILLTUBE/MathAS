quat_constructor  = instance.exports["Quat#constructor"];

pc.Quat = function() {
	this.ptr = quat_constructor(0, 0,0,0,1);
}

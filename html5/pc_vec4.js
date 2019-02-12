vec4_add          = instance.exports["Vec4#add"];

pc.Vec4 = function(x, y, z, w) {
	if (x && x.length === 4) {
		this.ptr = vec4_constructor(0, x[0], x[1], x[2], x[3]);
	} else {
		this.ptr = vec4_constructor(0, x || 0, y || 0, z || 0, w || 0);
	}
}
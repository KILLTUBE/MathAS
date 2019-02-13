vec2_constructor  = instance.exports["Vec2#constructor"];
vec2_add          = instance.exports["Vec2#add"];

pc.Vec2 = function(x, y) {
	if (x && x.length === 2) {
		this.ptr = vec2_constructor(0, x[0], x[1]);
	} else {
		this.ptr = vec2_constructor(0, x || 0, y || 0);
	}
}
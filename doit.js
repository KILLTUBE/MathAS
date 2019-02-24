const asc = require("assemblyscript/cli/asc");
asc.main([
	"assembly/index.ts",
	"--binaryFile", "build/untouched.wasm",
	//"--optimize",
	"-O3",
	"--sourceMap",
	"--measure"
], {
	stdout: process.stdout,
	stderr: process.stderr
}, function(err) {
	if (err)
		throw err;
});

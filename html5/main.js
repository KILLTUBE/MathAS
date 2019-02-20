function fetch_script(url) {
	return new Promise(function(resolve, reject) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.onload = function () {
			resolve(script);
		};
		script.src = url /* + "?now=" + Date.now()*/;
		document.head.appendChild(script);
	});
}

async function init_mathas(url) {
	await fetch_script(url + "/html5/Loader.js");

	url = url || "";

	response = await fetch(url + "/build/untouched.wasm");
	//buffer = await response.arrayBuffer();
	
	imports = {};
	
	/*
	imports.env = {};
	imports.env.memoryBase = 0;
	imports.env.tableBase = 0;
	if (!imports.env.memory) {
		imports.env.memory = new WebAssembly.Memory({ initial: 20 });
	}
	if (!imports.env.table) {
		imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
	}
	*/
	
	//module = Loader.instantiateBuffer(buffer, imports);
	module = await Loader.instantiateStreaming(response, imports);
	
	//console.log(module.I8.length);
	
	// next three lines just test the auto-generated demangled class, which isn't so useful currently
	// this PR might change it: https://github.com/AssemblyScript/assemblyscript/pull/437
	// a = new module.Vec3(1,2,3)
	// b = new module.Vec3(11,22,33)
	// console.log("a.add(b)", a.add(b)); // returns no class but a raw pointer
	
	pc = {}; // namespace for all pc_*.js files
	await fetch_script(url + "/html5/pc_mat3.js");
	await fetch_script(url + "/html5/pc_mat4.js");
	await fetch_script(url + "/html5/pc_quat.js");
	await fetch_script(url + "/html5/pc_vec2.js");
	await fetch_script(url + "/html5/pc_vec3.js");
	await fetch_script(url + "/html5/pc_vec4.js");
}
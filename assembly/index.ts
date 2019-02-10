// The entry file of your WebAssembly module.

//import "allocator/arena";
import "allocator/tlsf";

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export class Adder {
	sum: number = 0;
	addOne(): number {
		this.sum += 1.0;
		return this.sum;
	}
}

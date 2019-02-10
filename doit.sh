# print the commands via -x/+y
set -x
npx asc assembly/index.ts assembly/Vec3.ts -b build/untouched.wasm -t build/untouched.wat --sourceMap --validate --debug
npx asc assembly/index.ts assembly/Vec3.ts -b build/optimized.wasm -t build/optimized.wat --sourceMap --validate --optimize
set +x

# print the commands via -x/+y
set -x

time npx asc \
assembly/index.ts \
assembly/Mat3.ts \
assembly/Mat4.ts \
assembly/Quat.ts \
assembly/Vec2.ts \
assembly/Vec3.ts \
assembly/Vec4.ts \
-b build/untouched.wasm -t build/untouched.wat --sourceMap --validate --debug

# build times are quite slow for optimized builds (like 5 to 10 seconds) for 2 files, uncomment what you need:

#time npx asc assembly/index.ts assembly/Vec3.ts assembly/Mat4.ts -b build/optimized.wasm -t build/optimized.wat --sourceMap --validate --optimize

# MaxGraey: "Also for best performance I recommend use -O3 instead --optimize flag for production build"
#time npx asc assembly/index.ts assembly/Vec3.ts assembly/Mat4.ts -b build/o3.wasm -t build/o3.wat --sourceMap --validate -O3

set +x

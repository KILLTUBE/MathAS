# MathAS

Live demo: http://mathas.killtube.org/html5/

Discord: https://discord.gg/HSxy24J

**Installation**

Make sure to install node v10 first:

```shell
# tool for easy unpacking:
apt-get install unp

# just download a prebuilt node:
wget https://nodejs.org/dist/v10.15.1/node-v10.15.1-linux-x64.tar.xz

# unpack node
unp node-v10.15.1-linux-x64.tar.xz

# add this to the end of your ~/.bashrc
# otherwise an old/unsupported node version might be used
PATH=~/node-v10.15.0-linux-x64/bin:$PATH

# then restart the shell/terminal/putty/whatever session
# make sure this shows: v10.15.1
node -v
```

After node v10 is installed:

```
git clone https://github.com/KILLTUBE/MathAS
cd MathAS
npm install

# now we can actually generate the `build/untouched.wasm` file:

./doit.sh
```

Currently some unit tests will fail, because this `sin/cos/tan` PR isn't merged yet: 

https://github.com/AssemblyScript/assemblyscript/pull/491

Please overwrite `node_modules/assemblyscript/std/assembly/math.ts` manually with `std/assembly/math.ts` from that PR.

**webserver stuff**

To use the JavaScript unit testing system, please install apache2 or lighttpd and clone MathAS either in `/var/www` or `/home/someUser/public_html`.

Make sure to add `application/wasm wasm` to your `MIME` config, otherwise e.g. the `Chrome` browser doesn't accept the `build/untouched.wasm` file!

`Lighttpd`: add `application/wasm wasm` to `/etc/mime.types` and restart it: `/etc/init.d/lighttpd restart`

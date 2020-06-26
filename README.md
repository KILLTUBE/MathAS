# MathAS

* Live demo: http://mathas.killtube.org/html5/
* Discord: https://discord.gg/assemblyscript
* Donate: https://www.paypal.me/kungfooman/10

**Installation of node**

Make sure to install/activate at least node v10 (that is the recommended minimal version, but even v8.10.0 works for me):

```shell
# Tool for easy unpacking:
apt-get install unp

# Just download a prebuilt node:
wget https://nodejs.org/dist/v10.15.1/node-v10.15.1-linux-x64.tar.xz

# Unpack node:
unp node-v10.15.1-linux-x64.tar.xz

# Add this to the end of your ~/.bashrc
# Otherwise an old/unsupported node version might be used
PATH=~/node-v10.15.0-linux-x64/bin:$PATH

# Then restart the shell/terminal/putty/whatever session
# This should show: v10.15.1
node -v
```

After node is installed:

```
git clone https://github.com/KILLTUBE/MathAS
cd MathAS
npm install

# Now we can actually generate the `build/untouched.wasm` file:

npm run build
```

**Webserver Issues**

To use the JavaScript unit testing system, please install apache2 or lighttpd and clone MathAS either in `/var/www` or `/home/someUser/public_html`.

Make sure to add `application/wasm wasm` to your `MIME` config, otherwise e.g. the `Chrome` browser won't instantiate/load the `build/untouched.wasm` file!

*Lighttpd*

* Open e.g. `/etc/mime.types`
* Add the line `application/wasm wasm`
* Restart lighttpd: `/etc/init.d/lighttpd restart`

*Apache2 / XAMPP*

* Open e.g. `C:\xampp\apache\conf\mime.types`
* Add the line `application/wasm wasm`
* Restart Apache2/XAMPP

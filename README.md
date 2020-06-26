# MathAS

* Live demo: http://mathas.killtube.org/html5/
* Discord: https://discord.gg/HSxy24J
* Donate: https://www.paypal.me/kungfooman/10

**Installation**

Make sure to install at least node v10 (or any newer version):

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

After node is installed:

```
git clone https://github.com/KILLTUBE/MathAS
cd MathAS
npm install

# now we can actually generate the `build/untouched.wasm` file:

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

# MovieApp
A M.E.A.N Web Project

Requires:
+ Install **NodeJS**
+ Install **MongoDB**
+ Install **GruntCLI**: *npm install -g grunt-cli*
+ Install **Bower**: *npm install -g bower*
+ Install **Compass**: *gem install compass*
+ Run **MongoDB**: *mongod.exe*

More about installation:
1) NodeJS: https://nodejs.org/en/download/
2) MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-windows/
3) Compass: https://bungeshea.com/installing-sass-compass-windows/
4) BOOTSTRAPPING THE CLIENT WITH YEOMAN: http://yeoman.io/

REST Support: Postman - REST client (or Restlet Client - REST API Testing)

# Server side
```Require
npm install --save express
npm install --save mongoose
npm install --save resourcejs
npm install --save method-override
npm install --save body-parser
npm install --save lodash
```
# Client side
```
1. Install yo, grunt-cli, bower, generator-angular and generator-karma:

=> npm install -g grunt-cli bower yo generator-karma generator-angular

2. Planning on using Sass, we will need to first install Ruby and Compass:

=> gem install compass

Make a new directory, and cd into it:

3. Run yo angular, optionally passing an app name:

=> yo angular movieapp

4. Run grunt for building and serve for preview:

=> grunt serve
```

# GENERATE THE MOVIES ROUTE
```
PS C:\Users\*\Desktop\MovieApp\client> yo angular:route movies
   invoke   angular:controller:C:\Users\*\AppData\Roaming\npm\node_modules\generator-angular\route\index.js
   create     app\scripts\controllers\movies.js
   create     test\spec\controllers\movies.js
   invoke   angular:view:C:\Users\*\AppData\Roaming\npm\node_modules\generator-angular\route\index.js
   create     app\views\movies.html
```

# [Source for the Youtube URL parser](http://web.archive.org/web/20160926134334/http://lasnv.net/foro/839/Javascript_parsear_URL_de_YouTube)
```
<script type="text/javascript">
function youtube_parser(url){
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);
	if (match && match[7].length == 11){
	    var b = match[7];
	    alert(b);
	} else {
	    alert("Url incorrect");
	}
}
</script>
```
Try Angular YouTube Embed [here](http://brandly.github.io/angular-youtube-embed/#/)

# Regex expression source [Here](https://regexr.com/3dnqv)

# Read more
1. [RestangularJS](https://github.com/mgonto/restangular)
2. [Full tutorial about MEAN project](http://travistidwell.com/blog/2015/01/20/how-to-build-a-mean-web-application/)

# More stuffs need to try:
1. [Animation](https://www.npmjs.com/package/generator-css-animations)
2. Security (login/password?)
3. And so on.
#Example jQuery

This is an jQuery example, the example are taken from the hompage of [http://jquery.com/](http://jquery.com/).

**Quick reminder:**
>Haxe does not allow using `$` as a class name or a function name, but `$` is just a short-hand to jQuery.   
>However, Haxe requires all class names start with capital letter, so it is JQuery not jQuery.   

So in short: you replace `$(...)` with `new JQuery(...)` and it will work fine.

*Read more about this [here](about.md)*


## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		- Main.hx
	- javascript.hxml
```

## Install

Since its put on haxelib, you can install it using the command:

	haxelib install jQueryExtern

and then add `-lib jQueryExtern` in the hxml.



## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder. 

### DOM Traversal and Manipulation

Get the `<button>` element with the class 'continue' and change it's HTML to 'Next Step...'

```
new JQuery( "button.continue" ).html( "Next Step..." );
```

### Event Handling

Show the `#banner-message` element that is hidden with  `display:none` in it's CSS when any button in `#button-container` is clicked.

```
var hiddenBox = new JQuery( "#banner-message" );
new JQuery( "#button-container button" ).on( "click", function( event ) {
	hiddenBox.show();
});
```

### Ajax


Another change you should be looking for: `$.` is a static that should be replaced with `JQuery._static.` 


Call a local script on the server `/api/getWeather` with the query parameter `zipcode=97201` and replace the element `#weather-temp`'s html with the returned text.

```
JQuery._static.ajax({
	url: "/api/getWeather",
	data: {
		zipcode: 97201
	},
	success: function( data ) {
		new Jquery( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );
	}
});
```






So, when you code in JS like:

	$("#myMightyDiv").hide();

now you do the same in haXe:

	new JQuery("#myMightyDiv").hide();

Simple.



It is same as how you use jQuery in JS. But instead of `$`, you refer jQuery as `JQuery`.

eg. Hiding all li object:

```
new JQuery("li").hide(); //same as $("li").hide() in JS
```

Static methods of jQuery can be accessed from JQuery._static.

eg. A ajax example:

````
JQuery._static.get("ajax/test.html", function(data) {
    js.Lib.alert(data);
});
```


## CDN

Remember jQueryExtern is simply an extern, you have to link jQuery in your html file.

You can download the javascript file from [http://jquery.com/](http://jquery.com/) or use CDN.
For this example we will use that


Copy this in the `<head>` or at the bottom of your `<body>`:

```
<!-- from jQuery's CDN (http://jquery.com/download/#using-jquery-with-a-cdn) -->
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- Your Haxe compiled script -->
<script type="text/javascript" src="Main.js"></script>
```
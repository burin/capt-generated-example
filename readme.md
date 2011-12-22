# capt-generated-example

This is an example of the generated app using `capt` https://github.com/burin/capt

`capt` is a tool to help you quickly create backbone.js applications and maintain a good directory structure and give you build tools to help development.

This version of `capt` only includes the `new` and `generate` tasks.

It assumes the project will use [RequireJS](http://requirejs.org/) for module loading and dependency management. JavaScript is the preferred language in this fork.


Directory Structure:

    index.html
    app/
     app.js
     collections/
     models/
     routers/
      templates/
     views/
    css/
    lib/
    spec/

Testing framework:

* Jasmine

Libraries built in (as AMD modules):

* jQuery
* backbone.js
* underscore.js
* require.js
* handlebars.js
* require-handlebars-plugin (https://github.com/SlexAxton/require-handlebars-plugin)


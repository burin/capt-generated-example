# capt-generated-example

This is an example of the generated app using `capt` (this fork: https://github.com/burin/capt) using the commands:

`capt new capt-generated-example`
`cd capt-generated-example`
`capt generate model animal`
`capt generate collection animal`

`capt` is a tool to help you quickly create backbone.js applications and maintain a good directory structure and give you build tools to help development.

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


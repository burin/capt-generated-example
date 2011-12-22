require([
    'jquery', 'backbone', 'routers/ApplicationRouter'
    ],
function($, Backbone, ApplicationRouter) {
    new ApplicationRouter();
    Backbone.history.start();
});

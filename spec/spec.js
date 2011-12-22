// baseUrl has been set to ../app so that module paths work properly
// specs should be referenced here as though you were in `app`
//     app/
//     spec/
require([
// <specs to be run>
    '../spec/views/ApplicationViewSpec'// </lastItem> last item marker, do not remove :)
],
function() {
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
    jasmine.getEnv().execute();
});

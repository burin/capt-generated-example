// register as a module with AMD.
define(['backbone'],function(Backbone) {
    var Animal = Backbone.Model.extend({
        initialize: function() {
            //
        }
    });
    return Animal;
});

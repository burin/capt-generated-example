define(['backbone'], function(Backbone) {
    var ApplicationView = Backbone.View.extend({
        initialize: function() {
            this.el = $(this.el);
        },
        render: function() {
            this.el.append('<section class="appended">well hello there!</section>');
        }
    });

    return ApplicationView;
});

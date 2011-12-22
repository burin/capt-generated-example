define(['backbone', 'views/ApplicationView'], function(Backbone, ApplicationView) {
    describe('ApplicationView', function() {
        it('should handle the truth', function() {
            expect(true).toBeTruthy();
        });

        it('should exist', function() {
            expect(ApplicationView).toBeTruthy();
        });

        it('should instantiate', function() {
            var x = new ApplicationView();
            expect(x instanceof ApplicationView).toBeTruthy();
            expect(x instanceof Backbone.View).toBeTruthy();
        });

        it('should have a render method', function() {
            var x = new ApplicationView();
            x.render();
        });

        it('should render some text', function() {
             var x = new ApplicationView();
            x.render();
            expect(x.$(".appended").html()).toMatch(/well hello there!/);
        });
    });
});



define(['backbone', 'models/Animal'], function(Backbone, Animal) {
    describe('Animal model', function() {
        it('should handle the truth', function() {
            expect(true).toBeTruthy();
        });

        it('should exist', function() {
            expect(Animal).toBeTruthy();
        });

        it('should instantiate', function() {
            var x = new Animal();
            expect(x instanceof Animal).toBeTruthy();
            expect(x instanceof Backbone.Model).toBeTruthy();
        });
    });
});


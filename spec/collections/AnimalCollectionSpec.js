define(['backbone', 'collections/AnimalCollection', 'models/Animal'], function(Backbone, AnimalCollection, Animal) {
    describe('AnimalCollection', function() {
        it('should handle the truth', function() {
            expect(true).toBeTruthy();
        });

        it('should exist', function() {
            expect(AnimalCollection).toBeTruthy();
        });

        it('should instantiate', function() {
            var x = new AnimalCollection();
            expect(x instanceof AnimalCollection).toBeTruthy();
            expect(x instanceof Backbone.Collection).toBeTruthy();
            expect(x.model === Animal).toBeTruthy()
        });
    });
});



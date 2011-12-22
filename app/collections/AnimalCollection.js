// register as a module with AMD, bring in Model as dependency
define(['backbone', 'models/Animal'], function (Backbone, Animal) {
    var AnimalCollection = Backbone.Collection.extend({
        model: Animal
    });
    return AnimalCollection;
});


/*
 Loader for knockout components
 */
define(function() {

    /** @namespace ko.components */
    /** @namespace ko.components.loaders */
    /** @namespace ko.components.defaultLoader */

    ko.components.loaders.push({
        getConfig: function(name, callback){
            require(["components/" + name + "/model", "../js/text!components/" + name + "/view.html"], function(model, view){

                ko.components.register(name, {
                    viewModel: model,
                    template: view
                });

                ko.components.defaultLoader.getConfig(name, callback);
            });
        }
    });
});
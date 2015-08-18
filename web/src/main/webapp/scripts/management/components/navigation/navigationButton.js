/*
 ViewModel for the navigationButton
 */
define(function(require) {

    var navigation = require('common/navigation');

    return function(params) {

        this.viewModel = params.viewModel;
        this.text = params.text;
        this.view = params.view;
        this.navId = params.navId;

        this.navigate = function () {
            navigation.navigateTo(this.viewModel.contentDiv, this.view, this.navId, this.viewModel.navDiv);
        };
    };
});

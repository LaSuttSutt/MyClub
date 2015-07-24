// Entree-Point for requireJS
requirejs.config({
    baseUrl: 'scripts/index'
});

requirejs(['mainPage/indexPageLogic'], function(logic) {
    logic.onPageStartup();
});
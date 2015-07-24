// Entree-Point for requireJS
requirejs.config({
    baseUrl: '../scripts/management'
});

requirejs(['mainPage/mainPageLogic'], function(logic) {
    logic.onPageStartup();
});

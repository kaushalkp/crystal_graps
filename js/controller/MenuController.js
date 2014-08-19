var MenuController = Backbone.Controller.extend({
    initialize: function() {
        var self1 = this;
        var menu = new Menu();
        var menuView = null;
        utils.loadTemplate(['MenuView'], function() {
            menuView = new MenuView({
                model: menu
            });
            $('#menu').html(menuView.el);
            $.mobile.activePage.trigger("create");
        });
    }
}); 
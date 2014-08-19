var LoginController = Backbone.Controller.extend({    
    initialize: function() {
        var self1 = this;
        var login = new Login();
        var loginFormView = null;
        utils.loadTemplate(['LoginFormView'], function() {
            loginFormView= new LoginFormView({
                model: login
            });
            $('#loginForm').html(loginFormView.el);
             $.mobile.activePage.trigger("create");
        });                    
    }
}); 
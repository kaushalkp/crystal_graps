var CustomerPortfolioController = Backbone.Controller.extend({    
    initialize: function() {
        var customerPortfolio = new CustomerPortfolio();
        var customerPortfolioView = null;
        utils.loadTemplate(['CustomerPortfolioView'], function() {
            customerPortfolioView= new CustomerPortfolioView({
                model: customerPortfolio
            });
            $('#customerporfolio-content').html(customerPortfolioView.el);
             console.log('after load called');
             $.mobile.activePage.trigger("create");
             console.log('after crate called');
        });                    
    }
}); 
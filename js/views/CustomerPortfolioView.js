window.CustomerPortfolioView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    reset: function() {

    },
    setForm: function(data) {
        this.model.set(data);
    },
    render: function() {
        console.log(this.model.toJSON());
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
       
    }
});


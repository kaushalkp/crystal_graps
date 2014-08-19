window.MenuView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    reset: function() {
        
    },
    setForm: function(data) {
        this.model.set(data);
    },
    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        
    }

});


window.SalesPerformanceView = Backbone.View.extend({
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
         "click #btn_login": "openProductChart"
       
    },
    
    openProductChart:function ()
    {
        
    }
    
});


window.LoginFormView = Backbone.View.extend({
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
        "click #btn_login": "doLogin"
    },
    doLogin: function() {

        $.mobile.loading("show", {
            textonly: false, 
            textVisible: false
        });
        var input = {
            Email: $("#email").val(), 
            Pwd: $("#password").val()
            }
        //        var serviceCall = serviceHandler('user/login', input, 'POST');
        
        var dashboardController = new DashboardController();
//        alert("call 3");
           
        
        
    //        serviceCall.success(function(res) {
    //            localStorage.setItem("token", res.Data.Token);
    //               
    //            var code = res.Code;
    //            if (code == 202) {
    //                console.log(res);
    //                $(".login-header").show();
    //            } else {
    //                localStorage.setItem("token", res.Data.Token);
    //                var dashboardController = new DashboardController();
    //                $.mobile.changePage("#page-dashboard", {transition: "slide"});
    //            }
    //            $.mobile.loading("hide");
    //      });
    //        serviceCall.error(
    //                function(xhr, ajaxOptions, thrownError) {
    //                    alert("unable to login");
    //                }
    //        );
    }
});


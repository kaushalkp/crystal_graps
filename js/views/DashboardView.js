window.DashboardView = Backbone.View.extend({
    initialize: function() {
        this.render();
        var dashboard = null;
//        _.bindAll(".dash-btn", "getDashboardInner");
    },
//    el:".dash-btn",
    reset: function() {

    },
    setForm: function(data) {
        this.model.set(data);
    },
    render: function() {
        this.dashboard = this.model;

        $(this.el).html(this.template(this.model.toJSON()));
//        console.log(this);
        return this;
    },
    events: {
        "click .ytd-block-btn": "switchBlocka",
        "click .mtd-block-btn": "switchBlockb",
        "click .dash-back": "hideInnerDashboard",
        "click .dash-btn": "getDashboardInner",
        "click .dash-back": "resetDashboard"
       // "click #btn-cust-portfolio":"getPage"
    },
//    getPage:function(){
//        alert("ok");
//    },
    switchBlocka: function() {
        $(".ytd-block").show();
        $(".mtd-block").hide();
        $(".ytd-block-btn").addClass("da-active-btn");
        $(".mtd-block-btn").removeClass("da-active-btn");
    },
    switchBlockb: function() {
        $(".ytd-block").hide();
        $(".mtd-block").show();
        $(".mtd-block-btn").addClass("da-active-btn");
        $(".ytd-block-btn").removeClass("da-active-btn");
    },
    getDashboardInner: function(e) {
        var btnId = $(e.currentTarget).attr("id");
        var self = this;
        var dashboardInnerView = null;
        utils.loadTemplate(['DashboardInner'], function() {
            if (btnId == "sales-aopb-btn") {
                var dashboardInner = new Dashboard(self.dashboard.toJSON().ytd.sales_aopb);
                dashboardInner.set({bg: "bg-l-green"})
                dashboardInner.set({bgd: "bg-d-green"})
            } else if (btnId == "sales-forcast-btn") {
                var dashboardInner = new Dashboard(self.dashboard.toJSON().ytd.sales_aopb);
                dashboardInner.set({bg: "bg-l-green"})
                dashboardInner.set({bgd: "bg-d-green"})
            } else if (btnId == "return-btn") {
                var dashboardInner = new Dashboard(self.dashboard.toJSON().ytd.sales_aopb);
                dashboardInner.set({bg: "bg-l-perpal"})
                dashboardInner.set({bgd: "bg-d-perpal"})
            } else if (btnId == "collection-btn") {
                var dashboardInner = new Dashboard(self.dashboard.toJSON().ytd.sales_aopb);
                dashboardInner.set({bg: "bg-l-orange"})
                dashboardInner.set({bgd: "bg-d-orange"})
            } else if (btnId == "customer-btn") {
                var dashboardInner = new Dashboard(self.dashboard.toJSON().ytd.sales_aopb);
                dashboardInner.set({bg: "bg-l-pink"})
                dashboardInner.set({bgd: "bg-d-pink"})
            } else if (btnId == "due-btn") {
                var dashboardInner = new Dashboard(self.dashboard.toJSON().ytd.sales_aopb);
                dashboardInner.set({bg: "bg-l-blue"})
                dashboardInner.set({bgd: "bg-d-blue"})
            }
            dashboardInnerView = new DashboardInner({model: dashboardInner});
            $('#dash-inner-content').html(dashboardInnerView.el);
            $("#dash-inner-content").toggle("slide", {direction: 'right', duration: '1000'}, function() {
                $("#td-tabs").hide();
            });
            $.mobile.activePage.trigger("create");
            $("#dashboard-title").html($("#" + btnId).attr("title"));
            $(".dash-back").toggle();
//            $("#dashboard-subtitle").html($("#" + btnId).attr("subtitle"));
        });
    },
    hideInnerDashboard: function() {
        $("#dash-inner-content").toggle("slide", {direction: 'left', duration: '1000'});
    },
    resetDashboard: function() {
        $("#td-tabs").show();
        $(".dash-back").hide();
        $("#dashboard-title").html("Dashboard");
        $("#dashboard-subtitle").html("Figures In Lakhs");
        $("#dash-inner-content").toggle("slide", {direction: 'right', duration: '1000'});
    }
});


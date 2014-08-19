var DashboardController = Backbone.Controller.extend({    
    initialize: function() {
        var self1 = this;
        var v = {
            ytd:
            {            
                sales_aopb:{
                    tar:4251,
                    ach:2631,
                    p:63,
                    detail:[
                    [{
                        title:"Retail",
                        val:"675",
                        p:33
                    },{
                        title:"Focus",
                        val:"475",
                        p:31
                    },{
                        title:"Non Focus",
                        val:"200",
                        p:42
                    }],
                    [{
                        title:"Agri Equipment",
                        val:"45",
                        p:33
                    },{
                        title:"Inst. Business",
                        val:"750",
                        p:18
                    }],
                    [{
                        title:"Export",
                        val:"750",
                        p:18
                    }]
                    ]
                },
                sales_forcast:{
                    tar:4251,
                    ach:2631,
                    p:63
                },
                returns:{
                    tar:1250,
                    ach:510,
                    p:16
                },
                collection:{
                    tar:1800,
                    ach:800,
                    p:44
                },
                customer:{
                    tar:200,
                    ach:145,
                    p:72
                },
                due:{
                    tar:400,
                    ach:300,
                    p:95
                },
                dso:{
                    days:12,
                    p:59
                }
            },
            mtd:{}
        };
        var dashboard = new Dashboard(v);
        
        var dashboardView = null;
        //        $.mobile.activePage.trigger("create");
        utils.loadTemplate(['DashboardView'], function() {
            dashboardView= new DashboardView({
                model: dashboard
            });
            $('#page-dashboard-content').html(dashboardView.el);
//            alert("call 1");
            $.mobile.changePage("#page-dashboard", {transition: "slide"});
            $.mobile.activePage.trigger("create");                     
        });
        
    //        $.get('tpl/DashboardView.html',function(res){
    //            console.log(res);
    //            $('#page-dashboard').html(res);
    //            $.mobile.activePage.trigger("create");
    //        });
    }
}); 
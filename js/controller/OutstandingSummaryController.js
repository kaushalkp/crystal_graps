var OutstandingSummaryController = Backbone.Controller.extend({
    initialize: function() {

      //  var OutstandingSummary = new OutstandingSummaryDAO();
        //OutstandingSummary.getProductList(function(res) {
          //  OutstandingSummary = new OutstandingSummary(res);
//            var dashboardView = null;
//            utils.loadTemplate(['DashboardView'], function() {
//                dashboardView = new DashboardView({
//                    model: dashboard
//                });
//                $('#page-dashboard-content').html(dashboardView.el);
//                $.mobile.changePage("#page-dashboard", {transition: "slide"});
//                $.mobile.activePage.trigger("create");
//            });
   //     });

//        var schemePerformance= new OutstandingSummary();
//        var schemePerformanceController = null;
//        utils.loadTemplate(['OutstandingSummaryView'], function() {
//            schemePerformanceController= new OutstandingSummaryView({
//                model: schemePerformance
//            });
//            $('#schemeperformance-content').html(OutstandingSummaryView.el);
//             $.mobile.activePage.trigger("create");
//        }); 

        console.log('OutstandingSummary');
        console.log(OutstandingSummary);
        var data = null;
        var data = [
            {
                ProductName: "SCM-1",
                TotalSale: 120,
                products: [
                    {y: 112, label: "Missile"},
                    {y: 42, label: "Billo"},
                    {y: 70, label: "Tribune"},
                    {y: 60, label: "Niban"},
                    {y: 90, label: "Sure"},
                ]
            },
            {
                ProductName: "SCM-2",
                TotalSale: 98,
                products: [
                    {y: 111, label: "Missile"},
                    {y: 62, label: "Billo"},
                    {y: 40, label: "Tribune"},
                    {y: 80, label: "Niban"},
                    {y: 50, label: "Sure"},
                ]
            },
            {
                ProductName: "SCM-3",
                TotalSale: 89,
                products: [
                    {y: 121, label: "Missile"},
                    {y: 92, label: "Billo"},
                    {y: 49, label: "Tribune"},
                    {y: 99, label: "Niban"},
                    {y: 70, label: "Sure"},
                ]
            },
            {
                ProductName: "SCM-4",
                TotalSale: 102,
                products: [
                    {y: 99, label: "Missile"},
                    {y: 102, label: "Billo"},
                    {y: 80, label: "Tribune"},
                    {y: 40, label: "Niban"},
                    {y: 98, label: "Sure"},
                ]
            },
            {
                ProductName: "SCM-5",
                TotalSale: 83,
                products: [
                    {y: 70, label: "Missile"},
                    {y: 92, label: "Billo"},
                    {y: 100, label: "Tribune"},
                    {y: 89, label: "Niban"},
                    {y: 85, label: "Sure"},
                ]
            },
            {
                ProductName: "SCM-6",
                TotalSale: 70,
                products: [
                    {y: 70, label: "Missile"},
                    {y: 82, label: "Billo"},
                    {y: 123, label: "Tribune"},
                    {y: 80, label: "Niban"},
                    {y: 100, label: "Sure"},
                ]
            },
        ];
//data=OutstandingSummaryDAO.getProductList();
        productData = [];
        console.log('data');
        console.log(data);
        $.each(data, function(key, value) {
            productData.push({
                y: value.TotalSale,
                label: value.ProductName
            });
        });

        var $this = $(this),
                        theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
                        msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
                        textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
                        textonly = !!$this.jqmData("textonly");
                html = $this.jqmData("html") || "";
            $.mobile.loading("show", {
                        text: msgText,
                        textVisible: textVisible,
                        theme: theme,
                        textonly: textonly,
                        html: html
            });




        /*
         *  chart PRODUCT sales
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FC783E",
                ]);
        chartoutstanding_nondue = new CanvasJS.Chart("outstanding_summary_chart_nondue",
                {
                    title: {
                        text: "Values in Lakhs",
                        fontColor: "white",
                        fontSize: 12,
                        horizontalAlign: "left"
                    },
                    legend: {
                        horizontalAlign: "right", // "center" , "right"
                        verticalAlign: "top", // "top" , "bottom"
                        fontSize: 12,
                        fontColor: 'white',
                    },
                    toolTip: {
                        enabled: false, //enable here
                    },
                    zoomEnabled: true,
                    axisX: {
                        gridThickness: 0,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'
                    },
                    axisY: {
                        gridThickness: 0,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "whitecolor",
                    backgroundColor: "#A3A3A3",
                    data: [
                        {
                            indexLabel: "{x}  ",
                            legendText: "Non Due",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "#65D4EA",
                            indexLabelFontSize: 8,
                            type: "bar",
                           dataPoints: [
                               {label: '0-30', y: 101},
                                {label: '31-60', y: 105},
                                {label: '61-90', y: 100},
                                {label: '91-120', y: 105},
                                {label: '121-180', y: 151},
                                {label: '181-360', y: 115},
                                {label: '>360', y: 113},
                                
                            ]
                        },
                        
                    ]
                });
        chartoutstanding_nondue.render();




        /*
         *  chart PRODUCT quantity
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                     '#65D4EA', 
                ]);
        chartoutstanding_over = new CanvasJS.Chart("outstanding_summary_chart_overdue",
                {
                    title: {
                        text: "OVERDUE IN LAKHS",
                        fontColor: "white",
                        fontSize: 12,
                        horizontalAlign: "left"
                    },
                    legend: {
                        horizontalAlign: "right", // "center" , "right"
                        verticalAlign: "top", // "top" , "bottom"
                        fontSize: 12,
                        fontColor: 'white',
                    },
                    toolTip: {
                        enabled: false, //enable here
                    },
                    zoomEnabled: true,
                    axisX: {
                        gridThickness: 0,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'
                    },
                    axisY: {
                        gridThickness: 0,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "whitecolor",
                    backgroundColor: "#A3A3A3",
                    data: [
                        {
                            indexLabel: "{y} ",
                            legendText: "Over Due",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "#65D4EA",
                            indexLabelFontSize: 8,
                            type: "bar",
                           dataPoints: [
                                {label: 'Next 30 Days' , y: 101},
                                {label: 'Next 31-60', y: 105},
                                {label: '61 & above', y: 100},
                                                                
                            ]
                        },
                       
                    ]
                });
        chartoutstanding_over.render();


        $.mobile.loading("hide");
    }


});


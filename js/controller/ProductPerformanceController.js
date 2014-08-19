var ProductPerformanceController = Backbone.Controller.extend({
    initialize: function() {

        var ProductPerformance = new ProductPerformanceDAO();
        ProductPerformance.getProductList(function(res) {
            ProductPerformance = new ProductPerformance(res);
//            var dashboardView = null;
//            utils.loadTemplate(['DashboardView'], function() {
//                dashboardView = new DashboardView({
//                    model: dashboard
//                });
//                $('#page-dashboard-content').html(dashboardView.el);
//                $.mobile.changePage("#page-dashboard", {transition: "slide"});
//                $.mobile.activePage.trigger("create");
//            });
        });

//        var schemePerformance= new ProductPerformance();
//        var schemePerformanceController = null;
//        utils.loadTemplate(['ProductPerformanceView'], function() {
//            schemePerformanceController= new ProductPerformanceView({
//                model: schemePerformance
//            });
//            $('#schemeperformance-content').html(ProductPerformanceView.el);
//             $.mobile.activePage.trigger("create");
//        }); 

        console.log('ProductPerformance');
        console.log(ProductPerformance);
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
//data=ProductPerformanceDAO.getProductList();
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
                    "#FC783E", '#65D4EA', '#86B402'
                ]);
        chartproduct_value = new CanvasJS.Chart("product_performance_chart_value",
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
                            legendText: "sales",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "#65D4EA",
                            indexLabelFontSize: 8,
                            type: "bar",
                           dataPoints: [
                                {label: 'Missile', y: 100},
                                {label: 'Billo', y: 102},
                                {label: 'Tribune', y: 120},
                                {label: 'Nidan', y: 135},
                                {label: 'Sure', y: 135},
                                {label: 'FP-1', y: 138},
                                {label: 'FP-2', y: 138},
                                {label: 'FP-3', y: 129},
                                {label: 'FP-4', y: 124},
                                {label: 'FP-5', y: 122}
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "Target",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 8,
                            type: "bar",
                           dataPoints: [
                                {label: 'Missile', y: 130},
                                {label: 'Billo', y: 135},
                                {label: 'Tribune', y: 141},
                                {label: 'Nidan', y: 145},
                                {label: 'Sure', y: 145},
                                {label: 'FP-1', y: 148},
                                {label: 'FP-2', y: 131},
                                {label: 'FP-3', y: 139},
                                {label: 'FP-4', y: 134},
                                {label: 'FP-5', y: 141}
                            ]
                        },
                    ]
                });
        chartproduct_value.render();




        /*
         *  chart PRODUCT quantity
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FC783E", '#65D4EA', '#86B402'
                ]);
        chartproduct_quantity = new CanvasJS.Chart("product_performance_chart_quantity",
                {
                    title: {
                        text: "Values in Nos",
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
                            legendText: "sales",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "#65D4EA",
                            indexLabelFontSize: 8,
                            type: "bar",
                           dataPoints: [
                                {label: 'Missile', y: 101},
                                {label: 'Billo', y: 105},
                                {label: 'Tribune', y: 100},
                                {label: 'Nidan', y: 105},
                                {label: 'Sure', y: 105},
                                {label: 'FP-1', y: 108},
                                {label: 'FP-2', y: 108},
                                {label: 'FP-3', y: 109},
                                {label: 'FP-4', y: 104},
                                {label: 'FP-5', y: 102}
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "Target",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 8,
                            type: "bar",
                           dataPoints: [
                                {label: 'Missile', y: 110},
                                {label: 'Billo', y: 115},
                                {label: 'Tribune', y: 121},
                                {label: 'Nidan', y: 125},
                                {label: 'Sure', y: 115},
                                {label: 'FP-1', y: 118},
                                {label: 'FP-2', y: 121},
                                {label: 'FP-3', y: 119},
                                {label: 'FP-4', y: 124},
                                {label: 'FP-5', y: 121}
                            ]
                        },
                    ]
                });
        chartproduct_quantity.render();




        /*
         *  chart PRODUCT trend
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FC783E","#595959", '#65D4EA', '#86B402'
                ]);
        chartproduct_trend = new CanvasJS.Chart("product_performance_chart_trend",
                {
//                    title: {
//                        text: "Values in Nos",
//                        fontColor: "white",
//                        fontSize: 12,
//                        horizontalAlign: "left"
//                    },
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
                        labelAngle: -30,
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
                            legendText: "Sales",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            showInLegend: true,
                            type: "column",
                           dataPoints: [
                                {label: 'Missile', y: 11},
                                {label: 'Billo', y: 10},
                                {label: 'Tribune', y: 10},
                                {label: 'Nidan', y: 15},
                                {label: 'Sure', y: 15},
                                {label: 'FP-1', y: 18},
                                {label: 'FP-2', y: 18},
                                {label: 'FP-3', y: 19},
                                {label: 'FP-4', y: 14},
                                {label: 'FP-5', y: 12}
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "Fore Cast",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            type: "line",
                           dataPoints: [
                                {label: 'Missile', y: 50},
                                {label: 'Billo', y: 65},
                                {label: 'Tribune', y: 61},
                                {label: 'Nidan', y: 75},
                                {label: 'Sure', y: 65},
                                {label: 'FP-1', y: 78},
                                {label: 'FP-2', y: 51},
                                {label: 'FP-3', y: 69},
                                {label: 'FP-4', y: 64},
                                {label: 'FP-5', y: 51}
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "AOPB",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            type: "line",
                           dataPoints: [
                                {label: 'Missile', y: 110},
                                {label: 'Billo', y: 115},
                                {label: 'Tribune', y: 121},
                                {label: 'Nidan', y: 125},
                                {label: 'Sure', y: 115},
                                {label: 'FP-1', y: 118},
                                {label: 'FP-2', y: 121},
                                {label: 'FP-3', y: 119},
                                {label: 'FP-4', y: 124},
                                {label: 'FP-5', y: 121}
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "Last Year YTD",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            type: "line",
                           dataPoints: [
                                {label: 'Missile', y: 100},
                                {label: 'Billo', y: 105},
                                {label: 'Tribune', y: 111},
                                {label: 'Nidan', y: 115},
                                {label: 'Sure', y: 105},
                                {label: 'FP-1', y: 108},
                                {label: 'FP-2', y: 111},
                                {label: 'FP-3', y: 109},
                                {label: 'FP-4', y: 114},
                                {label: 'FP-5', y: 111}
                            ]
                        },
                        
                    ]
                });
        chartproduct_trend.render();



        $.mobile.loading("hide");
    }


});


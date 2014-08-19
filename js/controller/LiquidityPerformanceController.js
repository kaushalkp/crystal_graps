var LiquidityPerformanceController = Backbone.Controller.extend({
    initialize: function() {

        var LiquidityPerformance = new LiquidityPerformanceDAO();
        LiquidityPerformance.getLiquidityList(function(res) {
            LiquidityPerformance = new LiquidityPerformance(res);
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

//        var schemePerformance= new LiquidityPerformance();
//        var schemePerformanceController = null;
//        utils.loadTemplate(['LiquidityPerformanceView'], function() {
//            schemePerformanceController= new LiquidityPerformanceView({
//                model: schemePerformance
//            });
//            $('#schemeperformance-content').html(LiquidityPerformanceView.el);
//             $.mobile.activePage.trigger("create");
//        }); 

        console.log('LiquidityPerformance');
        console.log(LiquidityPerformance);
        var data = null;
        var data = [
            {
                LiquidityName: "SCM-1",
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
                LiquidityName: "SCM-2",
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
                LiquidityName: "SCM-3",
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
                LiquidityName: "SCM-4",
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
                LiquidityName: "SCM-5",
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
                LiquidityName: "SCM-6",
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
//data=LiquidityPerformanceDAO.getLiquidityList();
        productData = [];
        console.log('data');
        console.log(data);
        $.each(data, function(key, value) {
            productData.push({
                y: value.TotalSale,
                label: value.LiquidityName
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
         *  chart sales sales
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FFFFFF", '#65D4EA','#86B402'
                ]);
       chartliquidity_product = new CanvasJS.Chart("liquidity_performance_chart_product",
                {
//                    title: {
//                        text: "Values in Lakhs",
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
                        valueFormatString: "MMM",
                        interval: 1,
                        intervalType: "month",
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
                    backgroundColor: "#7D94C7",
                    data: [
                        {
                            type: "column",
                             
                            legendText: "Plan",
                            showInLegend: true,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 450},
                                {x: new Date(2012, 04, 1), y: 430},
                                {x: new Date(2012, 05, 1), y: 510},
                                {x: new Date(2012, 06, 1), y: 440},
                                {x: new Date(2012, 07, 1), y: 480},
                                {x: new Date(2012, 08, 1), y: 450},
                                {x: new Date(2012, 09, 1), y: 510},
                                {x: new Date(2012, 10, 1), y: 430},
                                {x: new Date(2012, 11, 1), y: 500},
                                {x: new Date(2013, 00, 1), y: 450},
                                {x: new Date(2013, 01, 1), y: 434},
                                {x: new Date(2013, 02, 1), y: 520},
                            ]
                        },
                        {
                            type: "line",
                             
                            legendText: "Actual",
                            showInLegend: true,
                            markerColor: '#E88A97',
                            markerBorderColor: '#E88A97',
                            markerBorderThickness: 2,
                            lineThickness: 3,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 460},
                                {x: new Date(2012, 04, 1), y: 450},
                                {x: new Date(2012, 05, 1), y: 500},
                                {x: new Date(2012, 06, 1), y: 480},
                                {x: new Date(2012, 07, 1), y: 480},
                                {x: new Date(2012, 08, 1), y: 410},
                                {x: new Date(2012, 09, 1), y: 500},
                                {x: new Date(2012, 10, 1), y: 480},
                                {x: new Date(2012, 11, 1), y: 510},
                                {x: new Date(2013, 00, 1), y: 450},
                                {x: new Date(2013, 01, 1), y: 414},
                                {x: new Date(2013, 02, 1), y: 520},
                            ]
                        },
                        
                    ]
                });
        chartliquidity_product.render();
        


        /*
         *  chart liquidity trend
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                   "#FFFFFF", '#65D4EA','#86B402'
                ]);
        chartliquidity_month = new CanvasJS.Chart("liquidity_performance_chart_month",
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
                                    backgroundColor: "#7D94C7",
                    data: [
                        {
                            indexLabel: "{y} ",
                            legendText: "Plan",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "#FFFFFF",
                            indexLabelFontSize: 10,
                            type: "column",
                             click: function(e) {
                                console.log(e);
                                var product = e.dataSeries.dataPoints[e.dataPointIndex];
                                console.log(product);
                                openGraphLiquidityPopup(product);
                            },
                           dataPoints: [
                                {label: 'Missile', y: 101},
                                {label: 'Billo', y: 105},
                                {label: 'Tribune', y: 100},
                                {label: 'Nidan', y: 105},
                                {label: 'Sure', y: 105},
                                
                            ]
                        },
                        {
                            indexLabel: "{y} ",
                            legendText: "Actual",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                             markerColor: '#E88A97',
                            markerBorderColor: '#E88A97',
                            type: "line",
                             click: function(e) {
                                console.log(e);
                                var product = e.dataSeries.dataPoints[e.dataPointIndex];
                                console.log(product);
                                openGraphLiquidityPopup(product);
                            },
                           dataPoints: [
                                {label: 'Missile', y: 110},
                                {label: 'Billo', y: 115},
                                {label: 'Tribune', y: 121},
                                {label: 'Nidan', y: 125},
                                {label: 'Sure', y: 115},
                                
                            ]
                        },
                    ]
                });
        chartliquidity_month.render();



        /*
         *  chart PRODUCT trend
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FC783E","#595959", '#65D4EA', '#86B402'
                ]);
        chartliquidity_trend = new CanvasJS.Chart("liquidity_performance_chart_trend",
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
                        //labelAngle: -30,
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
                            legendText: "SOM OS",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            showInLegend: true,
                            type: "stackedBar",
                           dataPoints: [
                                {label: 'Dealer-1', y: 111},
                                {label: 'Dealer-2', y: 110},
                                {label: 'Dealer-3', y: 110},
                                {label: 'Dealer-4', y: 115},
                                {label: 'Dealer-5', y: 115},
                                ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "SS",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            type: "stackedBar",
                           dataPoints: [
                                {label: 'Dealer-1', y: 50},
                                {label: 'Dealer-2', y: 65},
                                {label: 'Dealer-3', y: 61},
                                {label: 'Dealer-4', y: 75},
                                {label: 'Dealer-5', y: 65},
                                
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "EOM CS",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            type: "stackedBar",
                           dataPoints: [
                                {label: 'Dealer-1', y: 110},
                                {label: 'Dealer-2', y: 115},
                                {label: 'Dealer-3', y: 121},
                                {label: 'Dealer-4', y: 125},
                                {label: 'Dealer-5', y: 115},
                               
                            ]
                        },
                        {
                            indexLabel: "{y}  ",
                            legendText: "LSOM",
                            showInLegend: true,
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 10,
                            type: "stackedBar",
                           dataPoints: [
                                {label: 'Dealer-1', y: 100},
                                {label: 'Dealer-2', y: 105},
                                {label: 'Dealer-3', y: 111},
                                {label: 'Dealer-4', y: 115},
                                {label: 'Dealer-5', y: 105},
                                
                            ]
                        },
                        
                    ]
                });
        chartliquidity_trend.render();



        $.mobile.loading("hide");
    }


});


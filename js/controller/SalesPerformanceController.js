var SalesPerformanceController = Backbone.Controller.extend({
    initialize: function() {

        var SalesPerformance = new SalesPerformanceDAO();
        SalesPerformance.getSalesList(function(res) {
            SalesPerformance = new SalesPerformance(res);
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

//        var schemePerformance= new SalesPerformance();
//        var schemePerformanceController = null;
//        utils.loadTemplate(['SalesPerformanceView'], function() {
//            schemePerformanceController= new SalesPerformanceView({
//                model: schemePerformance
//            });
//            $('#schemeperformance-content').html(SalesPerformanceView.el);
//             $.mobile.activePage.trigger("create");
//        }); 

        console.log('SalesPerformance');
        console.log(SalesPerformance);
        var data = null;
        var data = [
            {
                SalesName: "SCM-1",
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
                SalesName: "SCM-2",
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
                SalesName: "SCM-3",
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
                SalesName: "SCM-4",
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
                SalesName: "SCM-5",
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
                SalesName: "SCM-6",
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
//data=SalesPerformanceDAO.getSalesList();
        schemeData = [];
        console.log('data');
        console.log(data);
        $.each(data, function(key, value) {
            schemeData.push({
                y: value.TotalSale,
                label: value.SalesName
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
       chartsales_sales = new CanvasJS.Chart("sales_performance_chart_sales",
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
                            legendText: "sales",
                            showInLegend: true,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 420},
                                {x: new Date(2012, 04, 1), y: 402},
                                {x: new Date(2012, 05, 1), y: 500},
                                {x: new Date(2012, 06, 1), y: 490},
                            ]
                        },
                        {
                            type: "line",
                            legendText: "AOPB",
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
                        {
                            type: "line",
                            legendText: "Fore Cast",
                            showInLegend: true,
                            markerColor: '#C8B631',
                            markerBorderColor: '#C8B631',
                            markerBorderThickness: 2,
                            lineThickness: 3,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 420},
                                {x: new Date(2012, 04, 1), y: 430},
                                {x: new Date(2012, 05, 1), y: 510},
                                {x: new Date(2012, 06, 1), y: 450},
                                {x: new Date(2012, 07, 1), y: 470},
                                {x: new Date(2012, 08, 1), y: 450},
                                {x: new Date(2012, 09, 1), y: 400},
                                {x: new Date(2012, 10, 1), y: 450},
                                {x: new Date(2012, 11, 1), y: 410},
                                {x: new Date(2013, 00, 1), y: 450},
                                {x: new Date(2013, 01, 1), y: 444},
                                {x: new Date(2013, 02, 1), y: 540},
                            ]
                        }
                    ]
                });
        chartsales_sales.render();
        
           

        /*
         *  chart sales total
         */
        CanvasJS.addColorSet("saleschat_total_color",
                [//colorSet Array
                    '#FFFFFF','#65D4EA','#86B402',
                ]);
       chartsales_total = new CanvasJS.Chart("sales_performance_chart_total",
                {
//                    title: {
//                        text: "Values in Lakhs",
//                        fontColor: "white",
//                        fontSize: 12,
//                        horizontalAlign: "left"
//                    },
//                    legend: {
//                        horizontalAlign: "right", // "center" , "right"
//                        verticalAlign: "top", // "top" , "bottom"
//                        fontSize: 12,
//                        fontColor: 'white',
//                    },
                    toolTip: {
                        enabled: false, //enable here
                    },
                    
                    axisX: {
                        valueFormatString: " ",
                        interval: 1,
                        intervalType: "month",
                        gridThickness: 0,
                        tickLength: 0,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'
                    },
                    axisY: {
                        valueFormatString: " ",
                        gridThickness: 0,
                        tickLength: 0,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "saleschat_total_color",
                    backgroundColor: "transparent",
                    data: [
                        {
                            indexLabel: "{y} ",
                            indexLabelPlacement: "outside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 12,
                            type: "column",
                            dataPoints: [
                                {y: 220},
                                {y: 402},
                                ]
                        }
                       
                    ]
                });
        chartsales_total.render();
        
             

        /*
         *  chart sales Trend
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                     '#65D4EA','#86B402'
                ]);
       chartsales_trend = new CanvasJS.Chart("sales_performance_chart_trend",
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
                        interval: 100,
                        gridThickness: 1,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "whitecolor",
                    backgroundColor: "#7D94C7",
                    data: [
                        
                        {
                            type: "line",
                            legendText: "Last Year Sales",
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
                        {
                            type: "line",
                            legendText: "Sales",
                            showInLegend: true,
                            markerColor: '#C8B631',
                            markerBorderColor: '#C8B631',
                            markerBorderThickness: 2,
                            lineThickness: 3,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 420},
                                {x: new Date(2012, 04, 1), y: 430},
                                {x: new Date(2012, 05, 1), y: 510},
                                {x: new Date(2012, 06, 1), y: 450},
                                {x: new Date(2012, 07, 1), y: 470},
                                {x: new Date(2012, 08, 1), y: 450},
                                {x: new Date(2012, 09, 1), y: 400},
                                {x: new Date(2012, 10, 1), y: 450},
                                {x: new Date(2012, 11, 1), y: 410},
                                {x: new Date(2013, 00, 1), y: 450},
                                {x: new Date(2013, 01, 1), y: 444},
                                {x: new Date(2013, 02, 1), y: 540},
                            ]
                        }
                    ]
                });
        chartsales_trend.render();
        
        
        /*
         *  chart sales collection
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FFFFFF", '#65D4EA','#86B402'
                ]);
       chartsales_collection = new CanvasJS.Chart("sales_performance_chart_collection",
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
                            legendText: "Collections",
                            showInLegend: true,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 420},
                                {x: new Date(2012, 04, 1), y: 402},
                                {x: new Date(2012, 05, 1), y: 500},
                                {x: new Date(2012, 06, 1), y: 490},
                            ]
                        },
                        {
                            type: "line",
                            legendText: "Fore Cast",
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
        chartsales_collection.render();
        
           

        /*
         *  chart sales collection total
         */
        CanvasJS.addColorSet("saleschat_total_color",
                [//colorSet Array
                    '#FFFFFF','#65D4EA','#86B402',
                ]);
       chartsales_collectiontotal = new CanvasJS.Chart("sales_performance_chart_collectiontotal",
                {
//                    title: {
//                        text: "Values in Lakhs",
//                        fontColor: "white",
//                        fontSize: 12,
//                        horizontalAlign: "left"
//                    },
//                    legend: {
//                        horizontalAlign: "right", // "center" , "right"
//                        verticalAlign: "top", // "top" , "bottom"
//                        fontSize: 12,
//                        fontColor: 'white',
//                    },
                    toolTip: {
                        enabled: false, //enable here
                    },
                    
                    axisX: {
                        valueFormatString: " ",
                        interval: 1,
                        intervalType: "month",
                        gridThickness: 0,
                        tickLength: 0,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'
                    },
                    axisY: {
                        valueFormatString: " ",
                        gridThickness: 0,
                        tickLength: 0,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "saleschat_total_color",
                    backgroundColor: "transparent",
                    data: [
                        {
                            indexLabel: "{y} ",
                            indexLabelPlacement: "outside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 12,
                            type: "column",
                            dataPoints: [
                                {y: 900},
                                {y: 2000},
                                ]
                        }
                       
                    ]
                });
        chartsales_collectiontotal.render();
        
             

        /*
         *  chart sales collection Trend
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                     '#65D4EA','#86B402'
                ]);
       chartsales_collectiontrend = new CanvasJS.Chart("sales_performance_chart_collectiontrend",
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
                        interval: 100,
                        gridThickness: 1,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "whitecolor",
                    backgroundColor: "#7D94C7",
                    data: [
                        
                        {
                            type: "line",
                            legendText: "Last Year Sales",
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
                                {x: new Date(2012, 08, 1), y: 10},
                                {x: new Date(2012, 09, 1), y: 50},
                                {x: new Date(2012, 10, 1), y: 40},
                                {x: new Date(2012, 11, 1), y: 10},
                                {x: new Date(2013, 00, 1), y: 50},
                                {x: new Date(2013, 01, 1), y: 14},
                                {x: new Date(2013, 02, 1), y: 20},
                            ]
                        },
                        {
                            type: "line",
                            legendText: "Sales",
                            showInLegend: true,
                            markerColor: '#C8B631',
                            markerBorderColor: '#C8B631',
                            markerBorderThickness: 2,
                            lineThickness: 3,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 420},
                                {x: new Date(2012, 04, 1), y: 430},
                                {x: new Date(2012, 05, 1), y: 510},
                                {x: new Date(2012, 06, 1), y: 450},
                                {x: new Date(2012, 07, 1), y: 470},
                                {x: new Date(2012, 08, 1), y: 50},
                                {x: new Date(2012, 09, 1), y: 00},
                                {x: new Date(2012, 10, 1), y: 50},
                                {x: new Date(2012, 11, 1), y: 40},
                                {x: new Date(2013, 00, 1), y: 50},
                                {x: new Date(2013, 01, 1), y: 44},
                                {x: new Date(2013, 02, 1), y: 54},
                            ]
                        }
                    ]
                });
        chartsales_collectiontrend.render();
        
           
        /*
         *  chart sales returns
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FFFFFF", '#65D4EA','#86B402'
                ]);
       chartsales_returns = new CanvasJS.Chart("sales_performance_chart_returns",
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
                    axisY2: {
                        gridThickness: 0,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        suffix: "%",
                        tickcolor: 'white'},
                    colorSet: "whitecolor",
                    backgroundColor: "#7D94C7",
                    data: [
                        {
                            type: "column",
                            legendText: "return",
                            showInLegend: true,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 420},
                                {x: new Date(2012, 04, 1), y: 402},
                                {x: new Date(2012, 05, 1), y: 500},
                                {x: new Date(2012, 06, 1), y: 490},
                            ]
                        },
                        {
                            type: "line",
                            axisYType: "secondary",
                            legendText: "Commulative Return %",
                            showInLegend: true,
                            markerColor: '#E88A97',
                            markerBorderColor: '#E88A97',
                            markerBorderThickness: 2,
                            lineThickness: 3,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 60},
                                {x: new Date(2012, 04, 1), y: 50},
                                {x: new Date(2012, 05, 1), y: 50},
                                {x: new Date(2012, 06, 1), y: 80},
                                {x: new Date(2012, 07, 1), y: 40},
                                {x: new Date(2012, 08, 1), y: 40},
                                {x: new Date(2012, 09, 1), y: 50},
                                {x: new Date(2012, 10, 1), y: 80},
                                {x: new Date(2012, 11, 1), y: 50},
                                {x: new Date(2013, 00, 1), y: 40},
                                {x: new Date(2013, 01, 1), y: 44},
                                {x: new Date(2013, 02, 1), y: 20},
                            ]
                        },
                       
                    ]
                });
        chartsales_returns.render();
        
           

        /*
         *  chart sales total
         */
        CanvasJS.addColorSet("saleschat_total_color",
                [//colorSet Array
                    '#FFFFFF','#65D4EA','#86B402',
                ]);
       chartsales_returntotal = new CanvasJS.Chart("sales_performance_chart_returntotal",
                {
//                    title: {
//                        text: "Values in Lakhs",
//                        fontColor: "white",
//                        fontSize: 12,
//                        horizontalAlign: "left"
//                    },
//                    legend: {
//                        horizontalAlign: "right", // "center" , "right"
//                        verticalAlign: "top", // "top" , "bottom"
//                        fontSize: 12,
//                        fontColor: 'white',
//                    },
                    toolTip: {
                        enabled: false, //enable here
                    },
                    
                    axisX: {
                        valueFormatString: " ",
                        interval: 1,
                        intervalType: "month",
                        gridThickness: 0,
                        tickLength: 0,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'
                    },
                    axisY: {
                        valueFormatString: " ",
                        gridThickness: 0,
                        tickLength: 0,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "saleschat_total_color",
                    backgroundColor: "transparent",
                    data: [
                        {
                            indexLabel: "{y} ",
                            indexLabelPlacement: "outside",
                            indexLabelFontColor: "white",
                            indexLabelFontSize: 12,
                            type: "column",
                            dataPoints: [
                                {y: 10},
                                {y: 2000},
                                ]
                        }
                       
                    ]
                });
        chartsales_returntotal.render();
        
             

        /*
         *  chart sales Trend
         */
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                     '#65D4EA','#86B402'
                ]);
       chartsales_returntrend = new CanvasJS.Chart("sales_performance_chart_returntrend",
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
                        interval: 100,
                        gridThickness: 1,
                        tickLength: 10,
                        labelFontColor: 'white',
                        labelFontSize: 10,
                        tickcolor: 'white'},
                    colorSet: "whitecolor",
                    backgroundColor: "#7D94C7",
                    data: [
                        
                        {
                            type: "line",
                            legendText: "Gross Sales",
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
                                {x: new Date(2012, 08, 1), y: 10},
                                {x: new Date(2012, 09, 1), y: 50},
                                {x: new Date(2012, 10, 1), y: 40},
                                {x: new Date(2012, 11, 1), y: 10},
                                {x: new Date(2013, 00, 1), y: 50},
                                {x: new Date(2013, 01, 1), y: 14},
                                {x: new Date(2013, 02, 1), y: 20},
                            ]
                        },
                        {
                            type: "line",
                            legendText: "Return",
                            showInLegend: true,
                            markerColor: '#C8B631',
                            markerBorderColor: '#C8B631',
                            markerBorderThickness: 2,
                            lineThickness: 3,
                            dataPoints: [
                                {x: new Date(2012, 03, 1), y: 42},
                                {x: new Date(2012, 04, 1), y: 30},
                                {x: new Date(2012, 05, 1), y: 50},
                                {x: new Date(2012, 06, 1), y: 40},
                                {x: new Date(2012, 07, 1), y: 70},
                                {x: new Date(2012, 08, 1), y: 50},
                                {x: new Date(2012, 09, 1), y: 00},
                                {x: new Date(2012, 10, 1), y: 50},
                                {x: new Date(2012, 11, 1), y: 40},
                                {x: new Date(2013, 00, 1), y: 50},
                                {x: new Date(2013, 01, 1), y: 44},
                                {x: new Date(2013, 02, 1), y: 54},
                            ]
                        }
                    ]
                });
        chartsales_returntrend.render();
        
        
        
        $.mobile.loading("hide");
    }


});


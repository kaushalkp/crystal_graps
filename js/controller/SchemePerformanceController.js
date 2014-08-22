var SchemePerformanceController = Backbone.Controller.extend({
    initialize: function() {
        console.log('initialize');
     //   var SchemePerformance = new SchemePerformanceDAO();
      //  SchemePerformance.getSchemeList(function(res) {
         //   SchemePerformance = new SchemePerformance(res);

     
        var schemePerformance= new SchemePerformance();
       
        
        var schemePerformanceView = null;
        utils.loadTemplate(['SchemePerformanceView'], function() {
            console.log('ready to load temp');
            schemePerformanceView= new SchemePerformanceView({
                model: schemePerformance
            });
            $('#scheme-performance-page-content').html(schemePerformanceView.el);
             
             $.mobile.activePage.trigger("create");
             
        //}); 
  // });
        console.log('SchemePerformance');
      //  console.log(SchemePerformance);
        var data = null;
        var data = [
            {
                SchemeName: "SCM-1",
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
                SchemeName: "SCM-2",
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
                SchemeName: "SCM-3",
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
                SchemeName: "SCM-4",
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
                SchemeName: "SCM-5",
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
                SchemeName: "SCM-6",
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
//data=SchemePerformanceDAO.getSchemeList();
        schemeData = [];
        
        $.each(data, function(key, value) {
            schemeData.push({
                y: value.TotalSale,
                label: value.SchemeName
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


        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FFFFFF",
                ]);

        chart = new CanvasJS.Chart("scheme_performance_chart",
                {
                    title: {
                        text: "Values in Lakhs",
                        fontColor: "white",
                        fontSize: 12,
                        horizontalAlign: "right"
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
                            indexLabel: "{y}  ",
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "black",
                            indexLabelFontSize: 12,
                            type: "bar",
                            click: function(e) {
                                console.log(e);
                                var product = e.dataSeries.dataPoints[e.dataPointIndex];
                                console.log(product);
                                openGraphPopup(product);
                            },
                            dataPoints: schemeData,
                        },
                    ]
                });
        chart.render();
        //};

        chart2 = new CanvasJS.Chart("product_performance_chart",
                {
//      title:{
//        text: "scheme",
//        fontColor: "grey",
//     fontSize: 20,
//     margin:20,
//     backgroundColor:'white',
//       padding: 10,
//     horizontalAlign:"left"             
//      },
                    title: {
                        text: "Values in Lakhs",
                        fontColor: "white",
                        fontSize: 12,
                        horizontalAlign: "right"
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
                        tickcolor: 'white'
                    },
                    colorSet: "whitecolor",
                    backgroundColor: "#F099A9",
                    data: [
                        {
                            indexLabel: "{y}  ",
                            indexLabelPlacement: "inside",
                            indexLabelFontColor: "black",
                            indexLabelFontSize: 12,
                            type: "column",
//                                click: function(e) {
//                                    console.log(e);
//                                    var product = e.dataSeries.dataPoints[e.dataPointIndex];
//                                    console.log(product);
//                                    openproduct(product);
//                                },
                            dataPoints: [
                                {y: 112, label: "Missile"},
                                {y: 42, label: "Billo"},
                                {y: 70, label: "Tribune"},
                                {y: 60, label: "Niban"},
                                {y: 90, label: "Sure"},
                            ]
                        },
                    ]
                });
        chart2.render();

        /*
         *  third graph
         */
        
        CanvasJS.addColorSet("whitecolor",
                [//colorSet Array
                    "#FFFFFF", '#65D4EA',
                ]);


        chart3 = new CanvasJS.Chart("scheme_performance_chart2",
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
                        }

                    ]
                });
        chart3.render();
        
        $.mobile.loading("hide");
        
        });
    //    });
    }


});


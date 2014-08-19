window.LiquidityPerformanceDAO = function (db) {
    this.db = db;
};
 
_.extend(window.LiquidityPerformanceDAO.prototype, {
    
    getLiquidityList:function(callback){
        
                var schemeData=[
                    {
                        LiquidityName:"SCM-1",
                        TotalSale:'120',
                        products:[
                                 {y: 112, label: "Missile"},
                                    {y: 42, label: "Billo"},
                                    {y: 70, label: "Tribune"},
                                    {y: 60, label: "Niban"},
                                    {y: 90, label: "Sure"},
                        ]
                    },
                    {
                        LiquidityName:"SCM-2",
                        TotalSale:'98',
                        products:[
                                 {y: 111, label: "Missile"},
                                    {y: 62, label: "Billo"},
                                    {y: 40, label: "Tribune"},
                                    {y: 80, label: "Niban"},
                                    {y: 50, label: "Sure"},
                        ]
                    },
                    {
                        LiquidityName:"SCM-3",
                        TotalSale:'89',
                        products:[
                                 {y: 121, label: "Missile"},
                                    {y: 92, label: "Billo"},
                                    {y: 49, label: "Tribune"},
                                    {y: 99, label: "Niban"},
                                    {y: 70, label: "Sure"},
                        ]
                    },
                    {
                        LiquidityName:"SCM-4",
                        TotalSale:'102',
                        products:[
                                 {y: 99, label: "Missile"},
                                    {y: 102, label: "Billo"},
                                    {y: 80, label: "Tribune"},
                                    {y: 40, label: "Niban"},
                                    {y: 98, label: "Sure"},
                        ]
                    },
                    {
                        LiquidityName:"SCM-5",
                        TotalSale:'83',
                        products:[
                                 {y: 70, label: "Missile"},
                                    {y: 92, label: "Billo"},
                                    {y: 100, label: "Tribune"},
                                    {y: 89, label: "Niban"},
                                    {y: 85, label: "Sure"},
                        ]
                    },
                    {
                        LiquidityName:"SCM-6",
                        TotalSale:'70',
                        products:[
                                 {y: 70, label: "Missile"},
                                    {y: 82, label: "Billo"},
                                    {y: 123, label: "Tribune"},
                                    {y: 80, label: "Niban"},
                                    {y: 100, label: "Sure"},
                        ]
                    },

                ];
                
        
//         var input = {Email: "e2e.pankaj@outlook.com", Pwd: "pass@word1", Guid: "F137FFCA-EB90-407D-8CE3-0D3D11622056"};
        //var input = {Guid: "F137FFCA-EB90-407D-8CE3-0D3D11622056"};
       // var serviceCall = serviceHandler('Dashboard/Territory', input, 'POST');
    //    serviceCall.success(function(res){
    //        callback(res.Data);
     //   });
        //return serviceCall;
        return schemeData;

    }
        
        
});

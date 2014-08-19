window.dashboardDAO = function(db) {
    this.db = db;
};

_.extend(window.dashboardDAO.prototype, {
    findAll: function(callback) {
//         var input = {Email: "e2e.pankaj@outlook.com", Pwd: "pass@word1", Guid: "F137FFCA-EB90-407D-8CE3-0D3D11622056"};
        var input = {Guid: "F137FFCA-EB90-407D-8CE3-0D3D11622056"};
        var serviceCall = serviceHandler('Dashboard/Territory', input, 'POST');
        serviceCall.success(function(res) {
            callback(res.Data);
        });
        return serviceCall;

    }
});

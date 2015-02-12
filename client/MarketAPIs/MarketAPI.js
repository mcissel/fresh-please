MarketAPI = {
  getResults: function (zip) {
    //# getResults(lat, lng) {
    jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      //# submit a get request to the restful service zipSearch or locSearch.
      url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
      //# url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
      dataType: "jsonp",
      jsonpCallback: 'MarketAPI.searchResultsHandler'
    });
  },
  searchResultsHandler: function (obj) {
    var markets = []; // this will be filled up and sent to the UI
    var results = obj.results;
    if (results) {
      for (i = 0, resultCount = results.length; i < resultCount; i++) {
        var marketName = results[i].marketname;
        var distance = parseFloat(marketName); // distance comes prepended
        if (isNaN(distance)) {
          Session.set('zipNotFoundError', {message: marketName});
          break;
        }
        markets.push({
          marketId: results[i].id,
          marketName: marketName.substr(marketName.indexOf(' ') + 1),
          distance: distance.toFixed(1)
        });
      }
    }
    Session.set('markets', markets);
  },
  getDetails: function (marketId) {
    jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      // submit a get request to the restful service mktDetail.
      url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + marketId,
      dataType: 'jsonp',
      jsonpCallback: 'MarketAPI.detailResultHandler'
    });
  },
  //iterate through the JSON result object.
  detailResultHandler: function (detailresults) {
    var results = [];
    for (var outerKey in detailresults) {
      var details = detailresults[outerKey];
      for (var innerKey in details) {
        results.push({name:innerKey,value:details[innerKey]});
      }
    }
    console.log(results);
    console.log(typeof results);
    console.log(results.length);

    Session.set('marketDetails', results);
    //Session.set('marketDetails', [{name:'test', value:'test'}]);
  }
};
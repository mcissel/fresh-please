Router.route('/', {
  name: 'home'
});

Router.route('/dashboard');


Router.route('/market/:id',
{
  data:this.params,
  name: 'market.details'
});
  //function () {

    //this.render('marketDetails', {

      // we don't really need this since we set the data context for the
      // the entire layout above. But this demonstrates how you can set
      // a new data context for each specific region.
      //data: function () {
      //  var response = MarketAPI.getDetails(this.params._id);
      //  console.log(response);
      //  return {
      //    marketDetails: "here:s the details <br/> don't really need this since" +
      //    " we set the data context for the the entire layout above. But this" +
      //    " demonstrates how you can set a new data context for each set",
      //    marketName: "marketName goes here",
      //    marketId: this.params._id
      //  }
    //  }
    //});
  //},
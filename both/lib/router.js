Router.configure({
  layoutTemplate: 'appLayout',
  controller: 'AppController',
  loadingTemplate: 'loading'
});


Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

//***********
//Controllers
//
AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

//******
//Routes
//
Router.route('/', {
  name: 'home'
});

Router.route('/market/:marketName/:id',
  {
    name: 'marketDetails',
    data: function() {
      return {
        name: this.params.marketName,
        id: this.params.id
      }
    },
    onRun: function() {
      console.log('onRun (getting MarketDetails from USDA');
      MarketAPI.getDetails(this.params.id);
      this.next();
    },
    action: function() {
      console.log('rendering to rightPane');
      this.render('marketDetails', {to: 'rightPane'});
    }
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
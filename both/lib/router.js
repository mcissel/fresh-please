Router.configure({
  layoutTemplate: 'appLayout',
  controller: 'AppController'
  //loadingTemplate: 'loading'
});


//Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

//***********
//Controllers
//
AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
  }
});

//******
//Routes
//
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home', {to: 'homePane'});
    $('#contentContainer').removeClass('showRightPane');
  }
});

Router.route('/market/:marketName/:id',
  {
    name: 'marketDetails',
    data: function () {
      return {
        name: this.params.marketName,
        id: this.params.id
      }
    },
    action: function () {
      this.render('marketDetails', {to: 'detailsPane'});
      $('#contentContainer').addClass('showRightPane');
    },
    onAfterAction: function() {
      Session.set('loading', false);
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
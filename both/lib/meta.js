Meteor.startup(function () {
  if (Meteor.isClient) {
    console.log('attempting to set the title...');
    Meta.config({
      options: {
        title: 'Farmer\'s Market Search',
        suffix: 'Farmer\'s Market Search'
      }
    });
    Meta.init(); // is this needed?

    GoogleMaps.load(); // loads the Maps API
  }
});

Template.marketList.helpers
  'markets': ->
    Session.get('markets')
  'selectedMarket': ->
    if @marketId == Session.get('selectedMarketId')
      return "selected"
  'error': ->
    Session.get('zipNotFoundError')

Template.marketList.events
  'click .market': ->
    Session.set('selectedMarketId', @marketId)
    console.log @
    console.log @marketName
    Router.go('marketDetails', {id: @marketId, marketName: @marketName})
#    MarketAPI.id = @.marketId
#    MarketAPI.getDetails()
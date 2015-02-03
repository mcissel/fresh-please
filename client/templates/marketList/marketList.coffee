Template.marketList.helpers
  'markets': ->
    Session.get('markets')
  'selectedMarket': ->
    if @.marketId == Session.get('selectedMarketId')
      return "selected"
  'error': ->
    Session.get('zipNotFoundError')

Template.marketList.events
  'click .market': ->
    console.log(@.marketId)
    Session.set('selectedMarketId', @.marketId)
    MarketAPI.id = @.marketId
    MarketAPI.getDetails()
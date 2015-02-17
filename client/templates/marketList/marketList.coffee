Template.marketList.rendered = () ->
  console.log 'rendered marketList'

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
    console.log 'setting loading to true'
    Session.set('loading', true);
    console.log @
    console.log @marketName

    MarketAPI.getDetails @marketId, () =>
#      $('#contentContainer').addClass('showRightPane');
      Router.go('marketDetails', {id: @marketId, marketName: @marketName})
#    MarketAPI.id = @.marketId
#    MarketAPI.getDetails()
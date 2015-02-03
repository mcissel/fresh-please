Template.marketSearchForm.events
  'submit .searchMarkets': (event) ->
    event.preventDefault()
    Session.set('zipNotFoundError', null)
    zip = event.target.zipCode.value
    MarketAPI.getResults(zip)

  'click .goRight': (event) ->
    event.preventDefault()
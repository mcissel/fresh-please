Template.marketDetails.helpers
  'details': ->
    marketDetails = Session.get('marketDetails')
    for detail, idx in marketDetails
      if (detail.name == "GoogleLink")
        console.log "GoogleLink found: "
        console.log detail.value
        marketDetails[idx].map = true
      if (detail.name == "Schedule")
#        console.log detail.value
#        parsed = detail.value.replace(new RegExp("<[^>]*>"), "\n ")
#        @TODO fix this it's not matching multiple occurrences
        newStr = ""
        loop
          parsed = detail.value.replace(new RegExp("<[^>]*>"), "\n ")
          break if newStr == parsed
          newStr = parsed

#        test = test.replace(";", " ")
        console.log parsed
        marketDetails[idx].value = parsed.replace("\\s+", " ")
    return marketDetails
  exampleMapOptions: ->
    #// Make sure the maps API has loaded
    if (GoogleMaps.loaded())
    #  // Map initialization options
      return {
        center: new google.maps.LatLng(38.886205,-77.141807)
#        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      }

Template.marketDetails.created = () ->
  console.log 'running'  # @TODO fix this, it's not running more than once
  GoogleMaps.ready 'exampleMap', (map) ->
    marker = new google.maps.Marker
      position: map.options.center,
      map: map.instance
+++
title = "Drawing Region Polygons on Google Maps API v.3"
date = "2013-08-06"
tags = ["Javascript", "Google Maps"]
+++

You can "draw" all sorts of stuff on Google Maps using Layers but mor simply you can also directly create polygons and with a bit of extra work make them looks pretty cool. In this case I'm tracing a country using data from the [Natural Earth Google Fusion Tables Dataset](https\://www.google.com/fusiontables/DataSource?docid=1UGwYogqtxVPga_76rxpL38CO1U6tr2s6Z0wSaQ). Here is the final product showing [where New York is](http\://www.iswhere.us/new_york.html).

## Drawing a Polygon
The Natural Earth Dataset provides outline coordinates using the EPSG 4326 projection. We can build our polygon(s) with those points like\:

```javascript
var regionCoords = [];
for(var i=0 ; i < data.length ; i++)
	regionCoords.push(new google.maps.LatLng(data[i][1], data[i][0]);

var overlayOptions = {
  paths\: regionCoords,
  strokeColor\: "#FF0000"
};
var regionOverlay = new google.maps.Polygon(overlayOptions);
regionOverlay.setMap(map);
```
*In the above code we are building an array of LatLng points(notice the Natural Earth Dataset uses Long/Lat format so we need to flip the order of the values). Then we are overlaying them on our map.*


## Positioning and Centering Map
To display the map at a position and scale so that our polygon(s) are visiable we need to create a bounds object that contains our polygon(s).
```javascript
var regionBounds = new google.maps.LatLngBounds();
for(var i=0 ; i < data.length ; i++) {
  var point = new google.maps.LatLng(data[i][1], data[i][0]);
  regionBounds.extend(point);
}

var allPolygonBounds = new google.maps.LatLngBounds();

//combine all of your polygons together into a single bounds object that contains them all using union
allPolygonBounds.union(regionBounds);
```
*In the above code we are creating a combined bounds object that we can center our map on at a scale that all polygons are visiable.*

We center and scale the map like\:
```javascript
map.fitBounds(allPolygonBounds);

```

## Creating Pretty Polygons
You can create some nice looking polygons by drawing multiple polygons on top of each other in conjustion with the [google.maps.StrokePosition](https\://developers.google.com/maps/documentation/javascript/3.exp/reference#StrokePosition). In the case of our [where is British Columbia] example, I'm using two polygons with different stroke opacity and stroke position to create a faded outline and fill.

var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
}),
new ol.layer.Tile({
    'title': 'OpenMapSurfer Roads',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}',
        attributions: [new ol.Attribution({html: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @University of Heidelberg</a> &mdash; Map data:&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),
new ol.layer.Tile({
    'title': 'Thunderforest Transport',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/transport/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_wineries2 = new ol.format.GeoJSON();
var features_wineries2 = format_wineries2.readFeatures(geojson_wineries2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wineries2 = new ol.source.Vector();
jsonSource_wineries2.addFeatures(features_wineries2);var lyr_wineries2 = new ol.layer.Vector({
                source:jsonSource_wineries2, 
                style: style_wineries2,
                title: "wineries2"
            });

lyr_wineries2.setVisible(true);
var layersList = [baseLayer,lyr_wineries2];
lyr_wineries2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Vineyard': 'Vineyard', 'Website': 'Website', 'OpenningHo': 'OpenningHo', 'Address': 'Address', });
lyr_wineries2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Vineyard': 'TextEdit', 'Website': 'TextEdit', 'OpenningHo': 'TextEdit', 'Address': 'TextEdit', });
lyr_wineries2.set('fieldLabels', {'OBJECTID': 'no label', 'Vineyard': 'inline label', 'Website': 'header label', 'OpenningHo': 'no label', 'Address': 'no label', });

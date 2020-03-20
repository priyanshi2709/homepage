var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bblayer_1 = new ol.format.GeoJSON();
var features_bblayer_1 = format_bblayer_1.readFeatures(json_bblayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bblayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bblayer_1.addFeatures(features_bblayer_1);
var lyr_bblayer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bblayer_1, 
                style: style_bblayer_1,
                interactive: true,
                title: '<img src="styles/legend/bblayer_1.png" /> bblayer'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_bblayer_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bblayer_1];
lyr_bblayer_1.set('fieldAliases', {'Sr_No': 'Sr_No', 'Blood_Bank': 'Blood_Bank', 'State_': 'State_', 'District': 'District', 'City': 'City', 'Address': 'Address', 'Pincode': 'Pincode', 'Contact_No': 'Contact_No', 'Mobile': 'Mobile', 'Helpline': 'Helpline', 'Fax': 'Fax', 'Email': 'Email', 'Website': 'Website', 'Nodal_Offi': 'Nodal_Offi', 'Contact__1': 'Contact__1', 'Mobile_Nod': 'Mobile_Nod', 'Email_Noda': 'Email_Noda', 'Qualificat': 'Qualificat', 'Category': 'Category', 'Blood_Comp': 'Blood_Comp', 'Apheresis': 'Apheresis', 'Service_Ti': 'Service_Ti', 'License': 'License', 'Date_Licen': 'Date_Licen', 'Date_of_Re': 'Date_of_Re', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_bblayer_1.set('fieldImages', {'Sr_No': 'Hidden', 'Blood_Bank': 'TextEdit', 'State_': 'TextEdit', 'District': 'Hidden', 'City': 'Hidden', 'Address': 'TextEdit', 'Pincode': 'TextEdit', 'Contact_No': 'TextEdit', 'Mobile': 'Hidden', 'Helpline': 'Hidden', 'Fax': 'Hidden', 'Email': 'Hidden', 'Website': 'Hidden', 'Nodal_Offi': 'Hidden', 'Contact__1': 'Hidden', 'Mobile_Nod': 'Hidden', 'Email_Noda': 'Hidden', 'Qualificat': 'Hidden', 'Category': 'Hidden', 'Blood_Comp': 'Hidden', 'Apheresis': 'Hidden', 'Service_Ti': 'Hidden', 'License': 'Hidden', 'Date_Licen': 'Hidden', 'Date_of_Re': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_bblayer_1.set('fieldLabels', {'Blood_Bank': 'header label', 'State_': 'header label', 'Address': 'header label', 'Pincode': 'header label', 'Contact_No': 'header label', });
lyr_bblayer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
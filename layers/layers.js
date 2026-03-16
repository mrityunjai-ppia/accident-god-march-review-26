var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlehybridsattelite_1 = new ol.layer.Tile({
            'title': 'Google hybrid sattelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AccidentData_Jan26Jan26_Heatmap_2 = new ol.format.GeoJSON();
var features_AccidentData_Jan26Jan26_Heatmap_2 = format_AccidentData_Jan26Jan26_Heatmap_2.readFeatures(json_AccidentData_Jan26Jan26_Heatmap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccidentData_Jan26Jan26_Heatmap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccidentData_Jan26Jan26_Heatmap_2.addFeatures(features_AccidentData_Jan26Jan26_Heatmap_2);
var lyr_AccidentData_Jan26Jan26_Heatmap_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_AccidentData_Jan26Jan26_Heatmap_2, 
                radius: 10 * 2,
                gradient: ['#fcfdbf', '#fcf4b6', '#fdebac', '#fde2a3', '#fed89a', '#fecf92', '#fec68a', '#febd82', '#feb47b', '#feaa74', '#fea16e', '#fd9869', '#fc8e64', '#fb8560', '#f97b5d', '#f7725c', '#f4695c', '#f1605d', '#ec5860', '#e75263', '#e04c67', '#d9466b', '#d2426f', '#ca3e72', '#c23b75', '#ba3878', '#b2357b', '#aa337d', '#a1307e', '#992d80', '#912b81', '#892881', '#812581', '#792282', '#721f81', '#6a1c81', '#621980', '#5a167e', '#52137c', '#4a1079', '#420f75', '#390f6e', '#311165', '#29115a', '#21114e', '#1a1042', '#140e36', '#0e0b2b', '#090720', '#050416', '#02020b', '#000004'],
                blur: 15,
                shadow: 250,
                title: 'Accident Data_Jan 26-Jan26_Heatmap'
            });
var format_AccidentData_Nov25Jan26_Heatmap_3 = new ol.format.GeoJSON();
var features_AccidentData_Nov25Jan26_Heatmap_3 = format_AccidentData_Nov25Jan26_Heatmap_3.readFeatures(json_AccidentData_Nov25Jan26_Heatmap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccidentData_Nov25Jan26_Heatmap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccidentData_Nov25Jan26_Heatmap_3.addFeatures(features_AccidentData_Nov25Jan26_Heatmap_3);
var lyr_AccidentData_Nov25Jan26_Heatmap_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_AccidentData_Nov25Jan26_Heatmap_3, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
                title: 'Accident Data_Nov25-Jan26_Heatmap'
            });
var format_Block_RP_4 = new ol.format.GeoJSON();
var features_Block_RP_4 = format_Block_RP_4.readFeatures(json_Block_RP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Block_RP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Block_RP_4.addFeatures(features_Block_RP_4);
var lyr_Block_RP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Block_RP_4, 
                style: style_Block_RP_4,
                popuplayertitle: 'Block_RP',
                interactive: false,
                title: '<img src="styles/legend/Block_RP_4.png" /> Block_RP'
            });
var format_RoadType_5 = new ol.format.GeoJSON();
var features_RoadType_5 = format_RoadType_5.readFeatures(json_RoadType_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadType_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadType_5.addFeatures(features_RoadType_5);
var lyr_RoadType_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadType_5, 
                style: style_RoadType_5,
                popuplayertitle: 'Road Type',
                interactive: true,
    title: 'Road Type<br />\
    <img src="styles/legend/RoadType_5_0.png" /> City Road<br />\
    <img src="styles/legend/RoadType_5_1.png" /> District Road<br />\
    <img src="styles/legend/RoadType_5_2.png" /> Foot Path<br />\
    <img src="styles/legend/RoadType_5_3.png" /> National Highway<br />\
    <img src="styles/legend/RoadType_5_4.png" /> State Highway<br />\
    <img src="styles/legend/RoadType_5_5.png" /> Village Road<br />' });
var format_AccidentData_Jan25Jan26_6 = new ol.format.GeoJSON();
var features_AccidentData_Jan25Jan26_6 = format_AccidentData_Jan25Jan26_6.readFeatures(json_AccidentData_Jan25Jan26_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccidentData_Jan25Jan26_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccidentData_Jan25Jan26_6.addFeatures(features_AccidentData_Jan25Jan26_6);
var lyr_AccidentData_Jan25Jan26_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AccidentData_Jan25Jan26_6, 
                style: style_AccidentData_Jan25Jan26_6,
                popuplayertitle: 'Accident Data_Jan 25-Jan26',
                interactive: true,
                title: '<img src="styles/legend/AccidentData_Jan25Jan26_6.png" /> Accident Data_Jan 25-Jan26'
            });
var format_AccidentData_Nov25Jan26_7 = new ol.format.GeoJSON();
var features_AccidentData_Nov25Jan26_7 = format_AccidentData_Nov25Jan26_7.readFeatures(json_AccidentData_Nov25Jan26_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccidentData_Nov25Jan26_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccidentData_Nov25Jan26_7.addFeatures(features_AccidentData_Nov25Jan26_7);
var lyr_AccidentData_Nov25Jan26_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AccidentData_Nov25Jan26_7, 
                style: style_AccidentData_Nov25Jan26_7,
                popuplayertitle: 'Accident Data_Nov 25-Jan26 ',
                interactive: true,
                title: '<img src="styles/legend/AccidentData_Nov25Jan26_7.png" /> Accident Data_Nov 25-Jan26 '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlehybridsattelite_1.setVisible(true);lyr_AccidentData_Jan26Jan26_Heatmap_2.setVisible(true);lyr_AccidentData_Nov25Jan26_Heatmap_3.setVisible(true);lyr_Block_RP_4.setVisible(true);lyr_RoadType_5.setVisible(true);lyr_AccidentData_Jan25Jan26_6.setVisible(true);lyr_AccidentData_Nov25Jan26_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlehybridsattelite_1,lyr_AccidentData_Jan26Jan26_Heatmap_2,lyr_AccidentData_Nov25Jan26_Heatmap_3,lyr_Block_RP_4,lyr_RoadType_5,lyr_AccidentData_Jan25Jan26_6,lyr_AccidentData_Nov25Jan26_7];
lyr_Block_RP_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'source_nam': 'source_nam', 'source_mdd': 'source_mdd', 'source_geo': 'source_geo', 'mdds_PLCN': 'mdds_PLCN', 'official_n': 'official_n', 'source_pop': 'source_pop', 'population': 'population', 'populati_1': 'populati_1', 'name_lrc': 'name_lrc', 'is_in_coun': 'is_in_coun', 'is_in_co_1': 'is_in_co_1', 'alt_name_a': 'alt_name_a', 'alt_name': 'alt_name', 'wikipedia_': 'wikipedia_', 'wikipedi_1': 'wikipedi_1', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'ref': 'ref', 'name_zh': 'name_zh', 'name_ur': 'name_ur', 'name_uk': 'name_uk', 'name_ta': 'name_ta', 'name_sd': 'name_sd', 'name_ru': 'name_ru', 'name_ps': 'name_ps', 'name_pnb': 'name_pnb', 'name_pa-Ar': 'name_pa-Ar', 'name_pa': 'name_pa', 'name_ml': 'name_ml', 'name_ku': 'name_ku', 'name_ks': 'name_ks', 'name_ko': 'name_ko', 'name_kn': 'name_kn', 'name_ja': 'name_ja', 'name_hi': 'name_hi', 'name_fr': 'name_fr', 'name_fa': 'name_fa', 'name_es': 'name_es', 'name_eo': 'name_eo', 'name_en': 'name_en', 'name_de': 'name_de', 'name_cs': 'name_cs', 'name_azb': 'name_azb', 'name_az-Ar': 'name_az-Ar', 'name_ar': 'name_ar', 'name': 'name', 'admin_leve': 'admin_leve', 'ISO3166-2': 'ISO3166-2', });
lyr_RoadType_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'Categories': 'Categories', 'Type': 'Type', 'Status': 'Status', 'PI_Classif': 'PI_Classif', 'Shape_STLe': 'Shape_STLe', });
lyr_AccidentData_Jan25Jan26_6.set('fieldAliases', {'fid': 'fid', 'S. No.': 'S. No.', 'District': 'District', 'Police Station': 'Police Station', 'F.I.R Number': 'F.I.R Number', 'Date Of FIR': 'Date Of FIR', 'Date Of Accident': 'Date Of Accident', 'Place Of Accident': 'Place Of Accident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Geo Location': 'Geo Location', 'Collision': 'Collision', 'Killed': 'Killed', 'G.I': 'G.I', 'M.I': 'M.I', 'Road Location': 'Road Location', 'Remarks': 'Remarks', });
lyr_AccidentData_Nov25Jan26_7.set('fieldAliases', {'fid': 'fid', 'S. No.': 'S. No.', 'District': 'District', 'Police Station': 'Police Station', 'F.I.R Number': 'F.I.R Number', 'Date Of FIR': 'Date Of FIR', 'Date Of Accident': 'Date Of Accident', 'Place Of Accident': 'Place Of Accident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Geo Location': 'Geo Location', 'Collision': 'Collision', 'Killed': 'Killed', 'G.I': 'G.I', 'M.I': 'M.I', 'Road Location': 'Road Location', 'Remarks': 'Remarks', });
lyr_Block_RP_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'source_nam': 'TextEdit', 'source_mdd': 'TextEdit', 'source_geo': 'TextEdit', 'mdds_PLCN': 'TextEdit', 'official_n': 'TextEdit', 'source_pop': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'name_lrc': 'TextEdit', 'is_in_coun': 'TextEdit', 'is_in_co_1': 'TextEdit', 'alt_name_a': 'TextEdit', 'alt_name': 'TextEdit', 'wikipedia_': 'TextEdit', 'wikipedi_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'ref': 'TextEdit', 'name_zh': 'TextEdit', 'name_ur': 'TextEdit', 'name_uk': 'TextEdit', 'name_ta': 'TextEdit', 'name_sd': 'TextEdit', 'name_ru': 'TextEdit', 'name_ps': 'TextEdit', 'name_pnb': 'TextEdit', 'name_pa-Ar': 'TextEdit', 'name_pa': 'TextEdit', 'name_ml': 'TextEdit', 'name_ku': 'TextEdit', 'name_ks': 'TextEdit', 'name_ko': 'TextEdit', 'name_kn': 'TextEdit', 'name_ja': 'TextEdit', 'name_hi': 'TextEdit', 'name_fr': 'TextEdit', 'name_fa': 'TextEdit', 'name_es': 'TextEdit', 'name_eo': 'TextEdit', 'name_en': 'TextEdit', 'name_de': 'TextEdit', 'name_cs': 'TextEdit', 'name_azb': 'TextEdit', 'name_az-Ar': 'TextEdit', 'name_ar': 'TextEdit', 'name': 'TextEdit', 'admin_leve': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_RoadType_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'Categories': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'PI_Classif': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_AccidentData_Jan25Jan26_6.set('fieldImages', {'fid': 'TextEdit', 'S. No.': 'Range', 'District': 'TextEdit', 'Police Station': '', 'F.I.R Number': '', 'Date Of FIR': '', 'Date Of Accident': '', 'Place Of Accident': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Geo Location': '', 'Collision': 'TextEdit', 'Killed': 'Range', 'G.I': 'TextEdit', 'M.I': 'TextEdit', 'Road Location': '', 'Remarks': 'TextEdit', });
lyr_AccidentData_Nov25Jan26_7.set('fieldImages', {'fid': 'TextEdit', 'S. No.': 'Range', 'District': 'TextEdit', 'Police Station': 'TextEdit', 'F.I.R Number': 'TextEdit', 'Date Of FIR': 'TextEdit', 'Date Of Accident': 'TextEdit', 'Place Of Accident': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Geo Location': 'TextEdit', 'Collision': 'TextEdit', 'Killed': 'Range', 'G.I': 'Range', 'M.I': 'CheckBox', 'Road Location': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Block_RP_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'source_nam': 'no label', 'source_mdd': 'no label', 'source_geo': 'no label', 'mdds_PLCN': 'no label', 'official_n': 'no label', 'source_pop': 'no label', 'population': 'no label', 'populati_1': 'no label', 'name_lrc': 'no label', 'is_in_coun': 'no label', 'is_in_co_1': 'no label', 'alt_name_a': 'no label', 'alt_name': 'no label', 'wikipedia_': 'no label', 'wikipedi_1': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref': 'no label', 'name_zh': 'no label', 'name_ur': 'no label', 'name_uk': 'no label', 'name_ta': 'no label', 'name_sd': 'no label', 'name_ru': 'no label', 'name_ps': 'no label', 'name_pnb': 'no label', 'name_pa-Ar': 'no label', 'name_pa': 'no label', 'name_ml': 'no label', 'name_ku': 'no label', 'name_ks': 'no label', 'name_ko': 'no label', 'name_kn': 'no label', 'name_ja': 'no label', 'name_hi': 'no label', 'name_fr': 'no label', 'name_fa': 'no label', 'name_es': 'no label', 'name_eo': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name_cs': 'no label', 'name_azb': 'no label', 'name_az-Ar': 'no label', 'name_ar': 'no label', 'name': 'no label', 'admin_leve': 'no label', 'ISO3166-2': 'no label', });
lyr_RoadType_5.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'Layer': 'hidden field', 'Categories': 'hidden field', 'Type': 'header label - always visible', 'Status': 'inline label - always visible', 'PI_Classif': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_AccidentData_Jan25Jan26_6.set('fieldLabels', {'fid': 'hidden field', 'S. No.': 'hidden field', 'District': 'hidden field', 'Police Station': 'inline label - visible with data', 'F.I.R Number': 'inline label - visible with data', 'Date Of FIR': 'inline label - visible with data', 'Date Of Accident': 'inline label - visible with data', 'Place Of Accident': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Geo Location': 'hidden field', 'Collision': 'inline label - visible with data', 'Killed': 'inline label - visible with data', 'G.I': 'inline label - visible with data', 'M.I': 'inline label - visible with data', 'Road Location': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', });
lyr_AccidentData_Nov25Jan26_7.set('fieldLabels', {'fid': 'hidden field', 'S. No.': 'hidden field', 'District': 'hidden field', 'Police Station': 'inline label - visible with data', 'F.I.R Number': 'inline label - visible with data', 'Date Of FIR': 'inline label - visible with data', 'Date Of Accident': 'inline label - visible with data', 'Place Of Accident': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Geo Location': 'hidden field', 'Collision': 'inline label - visible with data', 'Killed': 'inline label - visible with data', 'G.I': 'inline label - visible with data', 'M.I': 'inline label - visible with data', 'Road Location': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', });
lyr_AccidentData_Nov25Jan26_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
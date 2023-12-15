var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_colonias_numcarp_1 = new ol.format.GeoJSON();
var features_colonias_numcarp_1 = format_colonias_numcarp_1.readFeatures(json_colonias_numcarp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_numcarp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_numcarp_1.addFeatures(features_colonias_numcarp_1);
var lyr_colonias_numcarp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colonias_numcarp_1, 
                style: style_colonias_numcarp_1,
                interactive: true,
    title: 'colonias_numcarp<br />\
    <img src="styles/legend/colonias_numcarp_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/colonias_numcarp_1_1.png" /> 1 - 5<br />\
    <img src="styles/legend/colonias_numcarp_1_2.png" /> 5 - 14<br />\
    <img src="styles/legend/colonias_numcarp_1_3.png" /> 14 - 40<br />'
        });
var format_carpetasFGJ_2023_robo_transeunte_con_violencia_2 = new ol.format.GeoJSON();
var features_carpetasFGJ_2023_robo_transeunte_con_violencia_2 = format_carpetasFGJ_2023_robo_transeunte_con_violencia_2.readFeatures(json_carpetasFGJ_2023_robo_transeunte_con_violencia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carpetasFGJ_2023_robo_transeunte_con_violencia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carpetasFGJ_2023_robo_transeunte_con_violencia_2.addFeatures(features_carpetasFGJ_2023_robo_transeunte_con_violencia_2);
var lyr_carpetasFGJ_2023_robo_transeunte_con_violencia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_carpetasFGJ_2023_robo_transeunte_con_violencia_2, 
                style: style_carpetasFGJ_2023_robo_transeunte_con_violencia_2,
                interactive: false,
                title: '<img src="styles/legend/carpetasFGJ_2023_robo_transeunte_con_violencia_2.png" /> carpetasFGJ_2023_robo_transeunte_con_violencia'
            });
var format_poligonos_alcaldias_cdmx_3 = new ol.format.GeoJSON();
var features_poligonos_alcaldias_cdmx_3 = format_poligonos_alcaldias_cdmx_3.readFeatures(json_poligonos_alcaldias_cdmx_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonos_alcaldias_cdmx_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonos_alcaldias_cdmx_3.addFeatures(features_poligonos_alcaldias_cdmx_3);
var lyr_poligonos_alcaldias_cdmx_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligonos_alcaldias_cdmx_3, 
                style: style_poligonos_alcaldias_cdmx_3,
                interactive: false,
                title: '<img src="styles/legend/poligonos_alcaldias_cdmx_3.png" /> poligonos_alcaldias_cdmx'
            });

lyr_Positron_0.setVisible(true);lyr_colonias_numcarp_1.setVisible(true);lyr_carpetasFGJ_2023_robo_transeunte_con_violencia_2.setVisible(true);lyr_poligonos_alcaldias_cdmx_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_colonias_numcarp_1,lyr_carpetasFGJ_2023_robo_transeunte_con_violencia_2,lyr_poligonos_alcaldias_cdmx_3];
lyr_colonias_numcarp_1.set('fieldAliases', {'ENT': 'ENT', 'CVEDT': 'CVEDT', 'NOMDT': 'NOMDT', 'DTTOLOC': 'DTTOLOC', 'CVEUT': 'CVEUT', 'NOMUT': 'NOMUT', 'ID': 'ID', 'totalcarp': 'totalcarp', });
lyr_carpetasFGJ_2023_robo_transeunte_con_violencia_2.set('fieldAliases', {'anio_hecho': 'anio_hecho', 'mes_hecho': 'mes_hecho', 'fecha_hecho': 'fecha_hecho', 'hora_hecho': 'hora_hecho', 'delito': 'delito', 'categoria': 'categoria', 'competencia': 'competencia', 'fiscalia': 'fiscalia', 'agencia': 'agencia', 'unidad_investigacion': 'unidad_investigacion', 'anio_inicio': 'anio_inicio', 'mes_inicio': 'mes_inicio', 'fecha_inicio': 'fecha_inicio', 'hora_inicio': 'hora_inicio', 'colonia_catalogo': 'colonia_catalogo', 'colonia_hecho': 'colonia_hecho', 'alcaldia_hecho': 'alcaldia_hecho', 'municipio_hecho': 'municipio_hecho', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_poligonos_alcaldias_cdmx_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_colonias_numcarp_1.set('fieldImages', {'ENT': 'TextEdit', 'CVEDT': 'TextEdit', 'NOMDT': 'TextEdit', 'DTTOLOC': 'TextEdit', 'CVEUT': 'TextEdit', 'NOMUT': 'TextEdit', 'ID': 'Range', 'totalcarp': 'TextEdit', });
lyr_carpetasFGJ_2023_robo_transeunte_con_violencia_2.set('fieldImages', {'anio_hecho': 'Range', 'mes_hecho': 'TextEdit', 'fecha_hecho': 'TextEdit', 'hora_hecho': 'TextEdit', 'delito': 'TextEdit', 'categoria': 'TextEdit', 'competencia': 'TextEdit', 'fiscalia': 'TextEdit', 'agencia': 'TextEdit', 'unidad_investigacion': 'TextEdit', 'anio_inicio': 'Range', 'mes_inicio': 'TextEdit', 'fecha_inicio': 'TextEdit', 'hora_inicio': 'DateTime', 'colonia_catalogo': 'TextEdit', 'colonia_hecho': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'municipio_hecho': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_poligonos_alcaldias_cdmx_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_colonias_numcarp_1.set('fieldLabels', {'ENT': 'no label', 'CVEDT': 'no label', 'NOMDT': 'no label', 'DTTOLOC': 'no label', 'CVEUT': 'no label', 'NOMUT': 'no label', 'ID': 'no label', 'totalcarp': 'no label', });
lyr_carpetasFGJ_2023_robo_transeunte_con_violencia_2.set('fieldLabels', {'anio_hecho': 'no label', 'mes_hecho': 'no label', 'fecha_hecho': 'no label', 'hora_hecho': 'no label', 'delito': 'no label', 'categoria': 'no label', 'competencia': 'no label', 'fiscalia': 'no label', 'agencia': 'no label', 'unidad_investigacion': 'no label', 'anio_inicio': 'no label', 'mes_inicio': 'no label', 'fecha_inicio': 'no label', 'hora_inicio': 'no label', 'colonia_catalogo': 'no label', 'colonia_hecho': 'no label', 'alcaldia_hecho': 'no label', 'municipio_hecho': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_poligonos_alcaldias_cdmx_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_poligonos_alcaldias_cdmx_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
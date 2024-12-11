var map = L.map('map', {
    center: [-17.636820406063077, -71.33716587942136],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-17.8681,-71.5245], [-15.9593,-69.9777]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var polygon = L.polygon([
        [-17.642763084448454, -71.34309672112597],
[-17.64301431296549, -71.3421522102742],
[-17.642914906040204, -71.34193030712227],
[-17.64278838805597, -71.3417899581202],
[-17.641978670852854, -71.34153201941368],
[-17.641705751957673, -71.34241583880511],
[-17.641783470625555, -71.34244239131901],
[-17.641727440891625, -71.34265481143026],
[-17.641781663215067, -71.3426832605523],
[-17.64177985580454, -71.3427458486208],
[-17.642652832974257, -71.34301137375985],
[-17.642647410768873, -71.34306447878767],
[-17.642759469647096, -71.34309861773411]
    ]).addTo(map);

    L.marker([-17.6172356, -71.3416496], {draggable: true}).addTo(map);
    L.marker([-17.6176444, -71.3415013], {draggable: true}).addTo(map);
    L.marker([-17.6498341, -71.3342476], {draggable: true}).addTo(map);
    L.marker([-17.6221538, -71.2679914], {draggable: true}).addTo(map);
    L.marker([-17.6016981, -71.3457006], {draggable: true}).addTo(map);
    L.marker([-17.6145869, -71.3347971], {draggable: true}).addTo(map);
    L.marker([-17.6581669, -71.3356242], {draggable: true}).addTo(map);
    L.marker([-17.6568886, -71.3401616], {draggable: true}).addTo(map);
    L.marker([-17.6582935, -71.3485649], {draggable: true}).addTo(map);
    L.marker([-17.6441447, -71.3153619], {draggable: true}).addTo(map);
    L.marker([-17.6473116, -71.3228841], {draggable: true}).addTo(map);
    L.marker([-17.6418494, -71.3210669], {draggable: true}).addTo(map);
    L.marker([-17.6407963, -71.3169605], {draggable: true}).addTo(map);
    L.marker([-17.6305512, -71.3390525], {draggable: true}).addTo(map);
    L.marker([-17.6313424, -71.3390565], {draggable: true}).addTo(map);
    L.marker([-17.632467, -71.3374924], {draggable: true}).addTo(map);
    L.marker([-17.6326882, -71.338807], {draggable: true}).addTo(map);
    L.marker([-17.6327381, -71.3414396], {draggable: true}).addTo(map);
    L.marker([-17.6310216, -71.3416851], {draggable: true}).addTo(map);
    L.marker([-17.6296858, -71.3419632], {draggable: true}).addTo(map);
    L.marker([-17.629782, -71.3421928], {draggable: true}).addTo(map);
    L.marker([-17.6246526, -71.3397874], {draggable: true}).addTo(map);
    L.marker([-17.6431849, -71.3253424], {draggable: true}).addTo(map);
    L.marker([-17.6425702, -71.3402064], {draggable: true}).addTo(map);
    L.marker([-17.6424807, -71.3404949], {draggable: true}).addTo(map);
    L.marker([-17.6433869, -71.3431388], {draggable: true}).addTo(map);
    L.marker([-17.6336623, -71.3354031], {draggable: true}).addTo(map);
    L.marker([-17.6528606, -71.3307269], {draggable: true}).addTo(map);
    L.marker([-17.65352, -71.3275123], {draggable: true}).addTo(map);
    L.marker([-17.6537711, -71.3321504], {draggable: true}).addTo(map);
    L.marker([-17.6496388, -71.3445108], {draggable: true}).addTo(map);
    L.marker([-17.6512356, -71.3413736], {draggable: true}).addTo(map);
    L.marker([-17.6510532, -71.3426322], {draggable: true}).addTo(map);
    

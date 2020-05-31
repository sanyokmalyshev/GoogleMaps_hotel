window.addEventListener("load", function () {
    let hotel = document.getElementsByClassName("hotel");
    for (i = 0; i < hotel.length; i++) {
        let hotelmap = hotel[i].querySelector(".hotel-map");
        let classmap = hotel[i].querySelector(".map");
        hotelmap.addEventListener("click", function () {
            
            classmap.classList.toggle("map_active");

            // задание координат объекта новой карты (широта, долгота)
            let coordsLat = this.dataset.coordsLat;
            let coordsLng = this.dataset.coordsLng;
            let name = this.dataset.name;
            var position = new google.maps.LatLng(coordsLat, coordsLng);

            // параметры для карты.
            var options = {
                zoom: 17,
                center: position, // позиция расположения на карте
                mapTypeId: google.maps.MapTypeId.ROADMAP // тип карты - ROADMAP, SATELLITE, HYBRID and TERRAIN
            };

            // объект карты.
            var map = new google.maps.Map(classmap, options);


            // маркер на карте
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: name
            });

            // объект всплывающей подсказки.
            var infowindow = new google.maps.InfoWindow({
                content: name
            });

            // присвоение обработчика на нажатие по маркеру.
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

        })
    }
})
function initMap() {

    var uluru = {
        lat: 50.209167,
        lng: -5.490909
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
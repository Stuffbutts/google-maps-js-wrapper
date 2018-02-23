const defaultOptions = {

};

const placesServiceStatus = () => google.maps.places.PlacesServiceStatus;

class Places {
    places;
    static PlacesServiceStatus = placesServiceStatus();

    constructor(map){
        this.places = new google.maps.places.PlacesService(map);
    }
}

export default Places;
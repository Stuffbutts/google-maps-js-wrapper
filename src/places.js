const defaultOptions = {

};

class Places {
    static places;

    constructor(map){
        this.places = new google.maps.places.PlacesService(map);
    }
}

export default Places;
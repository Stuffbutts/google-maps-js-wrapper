const mapDefaults = {

};

const markerDefaults = {

};

class Maps {
    static mapElm;
    static map;
    static options;
    static markers;

    constructor(ele, options = mapDefaults){
        this.markers = [];

        if(ele && options){
            this.createMap(ele, options);
        }
    }

    createMap(ele, options = mapDefaults){
        this.mapElm = ele;
        this.options = options;

        this.setMap(new google.maps.Map(this.mapElm, this.options));
    }

    setMap(map){
        this.map = map;
    }

    clearMap(){
        this.mapElm.parentNode.removeChild(this.mapElm);
        this.map = null;
    }

    latLngBounds(se,nw){
        return new google.maps.LatLngBounds(se,nw)
    }

    latLng(lat,lng){
        return new google.maps.LatLng(lat,lng);
    }

    addMarker(result, options, map){
        let mapObj, markerArray, markerOptions, marker, labelOptions, currentMarkers = this.markers;

        if(!map && this.map){
            mapObj = this.map;
        } else if (map){
            this.setMap(map);
            this.addMarker(options);
        }

        const {label} = options;

        if(typeof label === "string"){
            // If label is a string, use the string as the label text
            labelOptions = {
                text: label,
                ...markerDefaults.label
            }
        } else if (typeof label === "object" && !Array.isArray(label)){
            // Otherwise if label is an object, merge with the default configuration
            labelOptions = {
                ...label,
                ...markerDefaults.label
            }
        } else {
            // Otherwise, use the default options
            labelOptions = {
                ...markerDefaults.label
            }
        }

        markerOptions = {...markerDefaults, ...options, label: {...labelOptions}};

        marker = new google.maps.Marker(markerOptions);

        marker.setPlace({
            location: result.geometry.location,
            placeId: result.id
        });

        markerArray = currentMarkers.concat(marker);

        this.markers = markerArray;
    }

    dropMarker(i){
        const that = this;
        i = !i ? 0 : i;
        return () => {
            that.markers[i].setMap(that.map);
        }
    }

    dropAllMarkers(){
        const that = this;
        that.markers.forEach((v,k) => {
            setTimeout(that.dropMarker(k), 100 * k)
        });
    }

    clearMarkers() {
        this.markers.forEach(v => {
            v.setMap(null);
        });

        this.markers = [];
    }

    clearMarker(id) {
        const marker = this.markers.reduce((acc, val) => {
            if(val.id === id){
                acc = val;
            }

            return acc;
        }, {});

        const filteredMarkers = this.markers.filter(v => {
            return v.id !== id
        });

        marker.setMap(null);

        this.markers = filteredMarkers;
    }

    drawSearchRadius(options, location){
        const map = this.map;
        const defaultOptions = {
            map: map
        };
        const center = location || map.getCenter();
        const circle = new google.maps.Circle({...defaultOptions, ...options});
    }
}

export default Maps;
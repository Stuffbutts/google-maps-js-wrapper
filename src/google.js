import Maps from './maps';
import Autocomplete from './autocomplete';
import Places from './places';
import search from './search';

class Google {
    static Maps = Maps;
    static Places = Places;
    static Autocomplete = Autocomplete;
    static search = search;

    static Size(w,h,wunit, hunit){
        return new google.maps.Size(w,h,wunit,hunit)
    }
}

export default Google;
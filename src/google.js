import Maps from './maps';
import Autocomplete from './autocomplete';
import Places from './places';
import search from './search';

class Google {
    static Maps;
    static Places;
    static Autocomplete;
    static search;

    constructor(){
        this.Maps = Maps;
        this.Places = Places;
        this.Autocomplete = Autocomplete;
        this.search = search;
    }
}

const instance = new Google();

export default instance;
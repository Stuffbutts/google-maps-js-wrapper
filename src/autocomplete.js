import Places from './places';
const defaultOptions = {};

class Autocomplete {
    inputElm;
    options;
    autocomplete;
    service;

    constructor(inputElm, options, service){
        const autocompleteOptions = {...defaultOptions, ...options};
        let node;

        if(service){

        } else if(inputElm){
            if(typeof inputElm === "string"){
                node = document.getElementById(inputElm);
            } else {
                node = inputElm;
            }
            this.createAutocomplete(node, autocompleteOptions);
        } else {
            this.options = autocompleteOptions;
        }
        
        // this.getAutocomplete = this.getAutocomplete.bind(this);
        // this.addListener = this.addListener.bind(this);
        // this.getPlace = this.getPlace.bind(this);

        return this;
    }

    createAutocomplete(inputElm, options){
        if(!inputElm){
            throw new Error('input element required');
        }

        this.inputElm = inputElm;
        // some options are set in constructor so if options are passed, merge the options with the current options
        this.options = this.options ? {...this.options, ...options} : options;
        this.autocomplete = new google.maps.places.Autocomplete(
            inputElm,
            this.options
        );

        return this.autocomplete;
    }

    createAutocompleteService(){
        this.service = new google.maps.places.AutocompleteService();

        return this.service;
    }

    getPlacesPredictions(options, callback){
        if(this.hasInput(options) && this.hasService()){
            this.service.getPlacesPredictions(options, callback);
        }
    }

    getQueryPredictions(options, callback){
        if(this.hasInput(options) && this.hasService()){
            this.service.getQueryPredictions(options, callback);
        }
    }

    displaySuggestions(parentNode) {
        let parent;

        if(!parentNode){
            parent = document.getElementsByTagName('body');
        } else {
            parent = parentNode;
        }

        return function (predictions, status){
            if(status === Places.PlacesServiceStatus.OK){

            }
        }
    }

    hasService(){
        if(!this.service){
            throw new Error('AutocompleteServices have not been instantiated');
        }

        return true;
    }

    hasInput(obj){
        if(typeof obj.input === "undefined"){
            throw new Error('Input value is required to get AutocompleteService predictions');
        }

        return true;
    }

    addListener(event, callback){
        return this.autocomplete.addListener(event, callback);
    }

    getPlace(){
        return this.autocomplete.getPlace();
    }
}

export default Autocomplete;
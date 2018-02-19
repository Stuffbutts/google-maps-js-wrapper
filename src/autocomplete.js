const defaultOptions = {};

class Autocomplete {
    inputElm;
    options;
    autocomplete;

    constructor(inputElm, options){
        const autocompleteOptions = {...defaultOptions, ...options};
        let node;

        if(inputElm){
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

    addListener(event, callback){
        return this.autocomplete.addListener(event, callback);
    }

    getPlace(){
        return this.autocomplete.getPlace();
    }
}

export default Autocomplete;
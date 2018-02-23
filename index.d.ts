/// <reference types="google" />

export = Google;

class Google {
    static Size(w: number, h: number, wunit?: string, hunit?: string): google.maps.Size;
}


namespace Google {
    export class Maps {
        mapElm: HTMLElement;
        map: google.maps.Map;
        options: google.maps.MapOptions;
        markers: object[];

        constructor(ele?: HTMLDivElement | Element, options?: google.maps.MapOptions);

        createMap(ele: HTMLElement, options: google.maps.MapOptions): google.maps.Map;

        setMap(map: google.maps.Map): void;

        clearMap(): void;

        latLngBound(se?: number, nw?: number): google.maps.LatLngBounds;

        latLng(lat: number, lng: number): google.maps.LatLng;
    }

    export class Autocomplete {
        inputElm: HTMLInputElement;
        options: google.maps.places.AutocompleteOptions;
        autocomplete: google.maps.places.Autocomplete;

        constructor(inputElm: Element | HTMLInputElement | string, options: google.maps.places.AutocompleteOptions, service?: boolean);

        createAutocomplete(inputElm: HTMLInputElement, options: google.maps.places.AutocompleteOptions): google.maps.places.Autocomplete;

        createAutocompleteService(): google.maps.places.AutocompleteService;

        getPlacePredictions(options: google.maps.places.AutocompletionRequest, callback: Function): void;

        getQueryPredictions(options: google.maps.places.QueryAutocompletionRequest, callback: Function): void;

        displaySuggestions(parentNode: HTMLElement): Function;

        hasService(): boolean;

        hasInput(): boolean;

        addListener(event: string, callback: Function);

        getPlace(): google.maps.places.PlaceResult;
    }
}
















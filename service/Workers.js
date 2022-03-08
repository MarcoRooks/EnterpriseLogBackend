
class Workers {

    #nameDescription;
    #photo; 
    #record; 

    #text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
    #image = "https://www.latercera.com/resizer/ZwYtLBDucTx2GhRF45twlp7Ikxs=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IWE35XK3SFCNBGJYGC65NCEONA.jpg";

    constructor() {
        this.#nameDescription = this.#text;
        this.#photo = this.#image;
        this.#record = this.#text;
    }


    get nameDescription() {
        return this.#nameDescription;
    }

    set nameDescription(newDescription) {
        this.#nameDescription = newDescription;
    }

    get photo() {
        return this.#photo;
    }

    set photo(newPhoto) {
        this.#photo = newPhoto;
    }

    get record() {
        return this.#record;
    }

    set record(newRecord) {
        this.#record = newRecord;
    }  
}


module.exports = Workers;  
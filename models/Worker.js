class Workers{
    #idcompany
    #idworker
    #name_description
    #photo
    #record
    #time_modification

    constructor(props){
        this.#idcompany = props.idcompany;
        this.#idworker = props.idworker;
        this.#name_description = props.name_description;
        this.#photo = props.photo;
        this.#record = props.record;
        this.#time_modification = this.props;
    }

    get idcompany(){
        return this.#idcompany;
    }

    set idcompany(newCompId) {
        this.#idcompany = newCompId;
    }

    get idworker() {
        return this.#idworker;
    }

    set idworker(newId) {
        this.#idworker = newId;
    }

    get name_description() {
        return this.#name_description;
    }

    set name_description(newName) {
        this.#name_description = newName;
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

    get time_modification() {
        return this.#time_modification;
    }

    set time_modification (newTime) {
        this.#time_modification = newTime;
    }

}


module.exports = Workers
class Workers{
    #idcompany
    #idworker
    #name_description
    #foto
    #historial
    constructor(props){
        this.#idcompany = props.idcompany
        this.#idworker = props.idworker
        this.#name_description = props.name_description;
        this.#foto = props.foto;
        this.#historial = props.historial;
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

    
    get foto() {
        return this.#foto;
    }

    set foto(newFoto) {
        this.#foto = newfoto;
    }

    get historial() {
        return this.#historial;
    }

    set historial(newHis) {
        this.#historial = newHis;
    }

}


export default Worker
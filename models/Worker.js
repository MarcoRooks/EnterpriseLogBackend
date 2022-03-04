class Workers{
    #idcompany
    #idworker
    #name_description
    #foto
    #historial
    #time_modification
    constructor(props){
        this.#idcompany = props.idcompany
        this.#idworker = props.idworker
        this.#name_description = props.name_description;
        this.#foto = props.foto;
        this.#historial = props.historial;
        this.#time_modificaton = props.time_modification
    }
}


export default Worker
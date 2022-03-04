class User{
    #iduser
    #username
    #userpass
    #email
    #name_description
    #avatar
    #time_modification
    constructor(props){
        this.#iduser = props.iduser
        this.#username = props.username;
        this.#userpass = props.userpass;
        this.#email = props.email;
        this.#name_description= props.name_description;
        this.#avatar = props.avatar;
        this.#time_modification = props.time_modification;
    }
}

module.exports = User
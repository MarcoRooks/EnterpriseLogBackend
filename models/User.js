class User {

    #iduser;
    #userName;
    #userPass;
    #userEmail;
    #name_description;
    #avatar;

    constructor(props) {
        this.#iduser = this.props; 
        this.#userName = this.props;
        this.#userPass = this.props;
        this.#userEmail = this.props;
        this.#name_description = this.props;
        this.#avatar = this.props;
    }

    get iduser() {
        return this.#iduser;
    }

    set iduser(newId) {
        this.#iduser = newId;
    }

    get userName() {
        return this.#userName;
    }

    set userName(newName) {
        this.#userName = newName;
    }

    get userPass() {
        return this.#userPass;
    }

    set userPass(newPass) {
        this.#userPass = newPass;
    }

    get userEmail() {
        return this.#userEmail;
    }

    set userEmail(newMail) {
        this.#userEmail = newMail;
    }

    get name_description() {
        return this.#name_description;
    }

    set name_description(newDescription) {
        this.#name_description = newDescription;
    }

    get avatar() {
        return this.#avatar;
    }

    set avatar(newAvatar) {
        this.#avatar = newAvatar;
    }

}


module.exports = User;  
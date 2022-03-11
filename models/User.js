const { v4: uuidv4 } = require("uuid");

class User {
    #iduser;
    #userName;
    #userPass;
    #userEmail;
    #name_description;
    #avatar;
    #time_modification;

    #mockDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    #mockLogo = "https://www.latercera.com/resizer/ZwYtLBDucTx2GhRF45twlp7Ikxs=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IWE35XK3SFCNBGJYGC65NCEONA.jpg"

    constructor(props) {
        this.#iduser = uuidv4();;
        this.#userName = props.userName;
        this.#userPass = props.userPass;
        this.#userEmail = props.userEmail;
        this.#name_description = this.#mockDescription;
        this.#avatar = this.#mockLogo;
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

    get time_modification() {
        return this.#time_modification;
    }

    set time_modification(newTime) {
        this.#time_modification = newTime;
    }

}


module.exports = User;  
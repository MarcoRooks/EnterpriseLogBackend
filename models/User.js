const { v4: uuidv4 } = require("uuid");

class User {
    #iduser;
    #userName;
    #userPass;
    #userEmail;
    #name_description;
    #avatar;
    #founds;
    #time_modification;

    #mockDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    #mockLogo = "https://www.latercera.com/resizer/ZwYtLBDucTx2GhRF45twlp7Ikxs=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IWE35XK3SFCNBGJYGC65NCEONA.jpg"

    constructor(props) {
        this.#iduser = props.iduser || uuidv4();
        this.#userName = props.username;
        this.#userPass = props.userpass;
        this.#userEmail = props.email;
        this.#name_description = props.name_description || this.#mockDescription;
        this.#avatar = props.avatar || this.#mockLogo;
        this.#founds = props.founds;
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
    get founds() {
        return this.#founds;
    }

    set founds(newFounds) {
        this.#founds = newFounds;
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

    toString() {
        return this.#iduser + " " + this.#userName + " " + this.#userPass
    }

}


module.exports = User;  
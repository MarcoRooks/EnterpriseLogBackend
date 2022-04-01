

class User {

    #iduser;
    #userName;
    #userPass;
    #userEmail;
    #name_description;
    #avatar;
    #founds;

    #text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
    #image = "https://www.latercera.com/resizer/ZwYtLBDucTx2GhRF45twlp7Ikxs=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IWE35XK3SFCNBGJYGC65NCEONA.jpg";
    #credit = 100000000;
    constructor() {
        this.#userName = this.#generateRandomName();
        this.#userPass = this.#generateRandomPass();
        this.#userEmail = this.#generateRandomEmail();
        this.#name_description = this.#text;
        this.#avatar = this.#image;
        this.#founds = this.#credit;
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

    get founds() {
        return this.#founds;
    }

    set founds(newFounds) {
        this.#founds = newFounds;
    }

    #generateRandomName() {
        const arr = ["Mohamed", "Mary", "Santiago", "Sophie", "Emma", "John", "Ali", "Anna", "Lily", "William"];
        return arr[Math.round(Math.random() * arr.length)]
    }

    #generateRandomPass() {
        let result = "";
        for (let j = 0; j < 9; j++) {
            result += Math.floor(Math.random() * 9)
        }
        result = result.toString();
        return result
    }

    #generateRandomEmail() {
        const arr = ["Mohamed", "Mary", "Santiago", "Sophie", "Emma", "John", "Ali", "Anna", "Lily", "William"];

        return arr[Math.round(Math.random() * arr.length)]
            + "_"
            + [Math.round(Math.random() * arr.length)]
            + "@gmail.com"
    }
}


module.exports = User;  
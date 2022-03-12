const { v4: uuidv4 } = require("uuid");

class Company {
    #idcompany
    #iduser
    #name_description
    #sector
    #creation_date
    #logo
    #webpage
    #phone_number
    #social_media
    #company_description
    #company_value
    #num_employees
    #images
    #time_modification

    constructor(props) {
        this.#idcompany = props.idcompany || uuidv4();
        this.#iduser = props.iduser;
        this.#name_description = props.name_description;
        this.#sector = props.sector;
        this.#creation_date = props.creation_date;
        this.#logo = props.logo;
        this.#webpage = props.webpage;
        this.#phone_number = props.phone_number;
        this.#social_media = props.social_media;
        this.#company_description = props.company_description;
        this.#company_value = props.company_value;
        this.#num_employees = props.num_employees;
        this.#images = props.images;
        this.#time_modification = props.time_modification;
    }

    get idcompany() {
        return this.#idcompany;
    }

    set idcompany(newCompId) {
        this.#idcompany = newCompId;
    }

    get iduser() {
        return this.#iduser;
    }

    set iduser(newId) {
        this.#iduser = newId;
    }

    get name_description() {
        return this.#name_description;
    }

    set name_description(newName) {
        this.#name_description = newName;
    }

    get sector() {
        return this.#sector;
    }

    set sector(newSector) {
        this.#sector = newSector;
    }

    get creation_date() {
        return this.#creation_date;
    }

    set creation_date(newDate) {
        this.#creation_date = newDate;
    }

    get logo() {
        return this.#logo;
    }

    set logo(newLogo) {
        this.#logo = newLogo;
    }

    get webpage() {
        return this.#webpage
    }

    set webpage(newWeb) {
        this.#webpage = newWeb;
    }

    get phone_number() {
        return this.#phone_number;
    }

    set phone_number(newPhone) {
        this.#phone_number = newPhone;
    }

    get social_media() {
        return this.#social_media;
    }

    set social_media(newSoc) {
        this.#social_media = newSoc;
    }

    get company_description() {
        return this.#company_description;
    }

    set company_description(newDesc) {
        this.#company_description = newDesc;
    }

    get company_value() {
        return this.#company_value;
    }

    set company_value(newValue) {
        this.#company_value = newValue;
    }

    get num_employees() {
        return this.#num_employees;
    }

    set num_employees(newNum) {
        this.#num_employees = newNum;
    }

    get images() {
        return this.#images;
    }

    set images(newImage) {
        this.#images = newImage;
    }

    get time_modification() {
        return this.#time_modification;
    }

    set time_modification(newTime) {
        this.#time_modification = newTime;
    }

}

module.exports = Company
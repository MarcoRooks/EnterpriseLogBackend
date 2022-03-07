
class Company {

    #nameDescription;
    #sector;
    #creationDate;
    #logo;
    #webpage;
    #phoneNumber; 
    #socialMedia;
    #companyDescription;
    #companyValue;
    #numEmployees;
    #images; 

    #text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
    #image = "https://www.latercera.com/resizer/ZwYtLBDucTx2GhRF45twlp7Ikxs=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IWE35XK3SFCNBGJYGC65NCEONA.jpg";
    #phone = '112'
    #social = 'Que coño va aki???!!!';

    constructor() {
        this.#nameDescription = this.#generateRandomName();
        this.#sector = this.#generateRandomSector();
        this.#creationDate = this.#generateRandomCreationDate();
        this.#logo = this.#image;
        this.#webpage = this.#image;
        this.#phoneNumber = this.#phone; 
        this.#socialMedia = this.#social;
        this.#companyDescription = this.#text;
        this.#companyValue = this.#generateRandomValue();
        this.#numEmployees = this.#generateRandomNumEmployees();
        this.#images = this.#generateRandomImages(); 
        console.log(this.#nameDescription, this.#sector);
    }

    /* get nameDescription() {
        return this.#nameDescription;
    }

    set nameDescription(newDescription) {
        this.#nameDescription = newDescription;
    }

    get sector() {
        return this.#sector;
    }

    set sector(newSector) {
        this.#sector = newSector;
    }

    get creationDate() {
        return this.#creationDate;
    }

    set creationDate(newCreationDate) {
        this.#creationDate = newCreationDate;
    }

    get logo() {
        return this.#logo;
    }

    set logo(newLogo) {
        this.#logo = newLogo;
    }

    get webpage() {
        return this.#webpage;
    }

    set webpage(newWebpage) {
        this.#webpage = newWebpage;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    set phoneNumber(newPhoneNumber) {
        this.#phoneNumber = newPhoneNumber;
    }

    get socialMedia() {
        return this.#socialMedia;
    }

    set socialMedia(newSocialMedia) {
        this.#socialMedia = newSocialMedia;
    }

    get companyDescription() {
        return this.#companyDescription;
    }

    set companyDescription(newCompanyDescription) {
        this.#companyDescription = newCompanyDescription;
    }

    get companyValue() {
        return this.#companyValue;
    }

    set companyValue(newCompanyValue) {
        this.#companyValue = newCompanyValue;
    }

    get numEmployees() {
        return this.#numEmployees;
    }

    set numEmployees(newNumEmployees) {
        this.#numEmployees = newNumEmployees;
    }

    get images() {
        return this.#images;
    }

    set images(newImages) {
        this.#images = newImages;
    } */

    #generateRandomName() {
        console.log('generateRandomName');
        const arr = ["Mostruos S.A.", "Monsters, Inc.", "Lilo & Stitch", "Manolo & Comp.", "Josemi's doubts", "Albert from home", "No hair no future", "Richi and his little ball", "Venezuelan fuckers", "And this is over"];
        console.log(arr[Math.round(Math.random() * arr.length)]);
        return arr[Math.round(Math.random() * arr.length)]
    }

    #generateRandomSector() {
        console.log('generateRandomSector');
        const arr = ["Real Estate", "Bungling", "Stock Exchange", "IT", "Smuggling", "Drugs", "Life insurances", "Feeding", "Theft", "Transport"];
        console.log(arr[Math.round(Math.random() * arr.length)]);
        return arr[Math.round(Math.random() * arr.length)]
    }

    #generateRandomCreationDate() {
        console.log('generateRandomCreationDate');
        const randomDay = between(1, 28);
        const randomMonth = between(1,13);
        const randomYear = between(1980,2022);
        console.log(`${randomDay}/${randomMonth}/${randomYear}`);
        return `${randomDay}/${randomMonth}/${randomYear}`;
    }

    #generateRandomValue() {
        console.log('generateRandomValue');
        const randomValue = between(100000, 999999999);
        console.log(randomValue);
        return randomValue;
    }

    #generateRandomNumEmployees() {
        console.log('generateRandomNumEmployees');
        const randomNumEmployees = between(1, 9999);
        console.log(randomNumEmployees);
        return randomNumEmployees;
    }

    #generateRandomImages() {
        console.log('generateRandomImages');
        const arr = ["https://pics.filmaffinity.com/Monstruos_S_A-311404013-large.jpg", "https://m.media-amazon.com/images/I/512JkmGDpNL.jpg", "https://cnnespanol.cnn.com/wp-content/uploads/2018/10/181018064715-01-food-meme-screengrab-restricted-exlarge-169.jpg?quality=100&strip=info", "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2022/02/04/meme-sobre-la-surrealista-votacion-de-alberto-casero.jpeg", "https://www.isdi.education/uploads/media/21-9-medium/07/557-meme_marketing_0.png?v=1-0", "https://images.ecestaticos.com/b6-sEhGD-1pYFlvmiU_yLqIgWDo=/0x66:500x362/1338x794/filters:fill(white):format(.JPG)/f.elconfidencial.com/original/887/846/3d5/8878463d5d094e2edb94022d45eb2808.jpg"];
        let arrReturn = [];
        const numImg = between(0, (arr.length-1));
        for (let j = 0; j < numImg; j++) {
            arrReturn.push(arr[Math.round(Math.random() * arr.length)]);
        }
        console.log(arrReturn.toString());
        return arrReturn.toString();
    }
}

function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

let k = new Company();
console.log(k);

module.exports = Company;  
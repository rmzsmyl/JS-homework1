class User {
    constructor(ad, soyad, password) {
        this.ad = ad;
        this.soyad = soyad;
        this.password = password;
    }

    fullname() {
        return `${this.ad} ${this.soyad}`;
    }

    toHtml() {
        const fullname = this.fullname().toUpperCase();
        return fullname; 
    }
}


const user = new User("John", "Doe", "password123");
const fullname = user.toHtml();
const userFullName = document.getElementById("userFullName");
userFullName.textContent = fullname; 
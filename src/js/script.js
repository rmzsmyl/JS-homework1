class User {
  constructor(ad, soyad, password) {
      this.ad = ad;
      this.soyad = soyad;
      this.password = password;
  }

  fullname() {
      return this.ad + ' ' + this.soyad;
  }
  
  showFullnameInUpperCase() {
      const fullName = this.fullname().toUpperCase();
      document.getElementById('userFullName').textContent = fullName;
  }
}

const user = new User('John', 'Doe', 'password123');

user.showFullnameInUpperCase();

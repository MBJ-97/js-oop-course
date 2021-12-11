// here we are creating class (Blueorint)
class User {
// constructor method constructs the object
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    // here come the methods ! 
    login() {
        console.log(this.name, 'Just logged in');
        return this;
    }
    logout() {
        console.log(this.name, 'Just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.name , 'score is now' , this.score);
        return this;
    }
}

// Here we will cover Inheritance, an admin is also a user with some extras!
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email; // yelzem ykoun meshi equal bech nkhrjouh
        })
    }
}





// 'new' key word : Creates empty object, set this to the new empty obj & calls constructor method
var userOne = new User ('mahdi@mial.co', 'Mahdi');
var userTwo = new User ('amouya@mial.co', 'Amouya');
var admin = new Admin ('admin@mail.co', 'Jefe');

// Store users here
var users = [userOne, userTwo]

userOne.login().updateScore().updateScore().logout(); // we can chain them (methods) now bc we are returning the obj each time we call a method!


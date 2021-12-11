// object literals using curly braces
var userOne = {
    // these are encapsulated props
    email: 'mahdie@mail.com',
    name: 'Mahdi',

    //Now we can create methods such as login & logout
    login(){
        console.log(this.email, 'has logged in'); // here this refers to this object that it lives in. If outside it would refer to the window object
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
}


class AppUser {

    id;
    name;
    username;
    phone;
    email;
    password;
    avatar;

    constructor(id, name, username, phone, email, password, avatar) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }

}

export default AppUser;
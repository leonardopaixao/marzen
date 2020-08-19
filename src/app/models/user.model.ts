export class User{
    public uid ?: string;
    public email ?: string;
    public username ?: string;
    public password ?: string;

    constructor( uid ?: string, email ?: string, username ?: string, password ?: string ){
        this.uid = uid;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    // _getters
    public getId(): string{
        return this.uid;
    }

    public getEmail(): string{
        return this.email;
    }

    public getUsername(): string{
        return this.username;
    }

    public getPassword(): string{
        return this.password;
    }

    // _setters
    public setId(uid: string){
        this.uid = uid;
    }

    public setEmail(email: string){
        this.email = email;
    }

    public setUsername(username: string){
        this.username = username;
    }

    public setPassword(password: string){
        this.password = password;
    }

}
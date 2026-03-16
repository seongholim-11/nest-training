class User {
    readonly id: number;
    username: string;
    email: string;
    isActive: boolean

    constructor(id: number, username: string, email: string, isActive: boolean) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.isActive = isActive
    }
}

class UserService {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUsers(): User[] {
        return this.users
    }

    findActiveUsers(): User[] {
        return this.users.filter(v => v.isActive)
    }
}

const userService = new UserService();
userService.addUser({
    id: 123,
    username: '안녕',
    email: '123@gmail.com',
    isActive: true
})

console.log(userService.findActiveUsers());
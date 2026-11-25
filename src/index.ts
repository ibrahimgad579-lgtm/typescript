

class User {
    public Id: number;
    public name: string;
    public email: string;
    private Password: string;
    protected Phone: string;
    private age: number;

    public notebooks: NoteBook[] = [];

    constructor(
        Id: number,
        name: string,
        email: string,
        Password: string,
        Phone: string,
        age: number
    ) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;

        if (age >= 18 && age <= 60) {
            this.age = age;
        } else {
            throw new Error("Age must be between 18 and 60");
        }
    }

    public displayInfo(): void {
        console.log(this.name, this.email, this.Phone, this.age);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}



class Admin extends User {

    public manageNotes(): void {
        console.log("Admin is managing notes");
    }

}

class Note {
    public Id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(
        Id: number,
        title: string,
        content: string,
        userId: User
    ) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    public preview(): string {
        return this.content.substring(0, 30) ;
    }
}


class NoteBook {
    private notes: Note[] = [];

    public addNote(note: Note): void {
        this.notes.push(note);
        console.log("Note added successfully");
    }

    public removeNote(Id: number): void {
        this.notes = this.notes.filter(note => note.Id !== Id);
        console.log("Note removed successfully");
    }

    public displayNotes(): void {
        console.log(this.notes);
    }
}

class Storage<T> {
    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    public getAllItems(): T[] {
        return this.items;
    }
}

const names = new Storage<string>();

names.addItem("Ibrahim");


console.log(names.getAllItems());

const numbers = new Storage<number>();

numbers.addItem(10);


console.log(numbers.getAllItems());


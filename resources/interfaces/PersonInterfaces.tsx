export interface Adress{
    colony: string;
    cp: string;
    inNumber: string;
    municipality: string;
    outNumber: string;
    state: string;
    street: string;
}

export interface Childrens {
    idChildren: string;
}

export interface Contact { 
    phone?: string;
    email?: string;
    password?: string;
    passwordVerify?: string;
}

export interface NewPerson { 
    uuid: string;
    photo: string;
    name: string;
    lastname: string;
    secondLastname: string;
    birthdate: string;
    adress: Adress;
    childrens?: Array<Childrens>;
    typePerson?: string;
    contactData?: Contact;
}
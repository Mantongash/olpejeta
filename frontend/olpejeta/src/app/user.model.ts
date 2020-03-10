export class User{
    id:number;
    username:string;
    password:null;
    email:string;
    contacts:number;
    type:string;
}

export class Birds{
    id:number;
    common_name:string;
    scientific_name:string;
    bird_age:number;
    general_status:string;
    conservation_status:string;
    species:string;
    category:1;
    image:string;
    description:string;
    sound:string;
}

export class Sighting{
    id:number;
    location_id:number;
    user_id:number;
    no_of_birds:number;
    date_taken:number;
}
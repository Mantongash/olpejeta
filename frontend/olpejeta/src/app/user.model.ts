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
    bird_image_url:string;
    bird_description:string;
    bird_sound_url:string;
}

export class Sightings{
    id:number;
    location_id:number;
    user_id:number;
    no_of_birds:number;
    date_taken:Date;
}
export class User{
    id:number;
    user_name:string;
}

export class Bird{
    id: number;
    common_name:string;
    scientific_name:string;
    bird_age:number;
    general_status:string;
    conservation_status:string;
    species:string;
    category:1;
    bird_image_url:string;
    bird_description:string;
}

export class Sightings{
    id:number;
    sighting_location:number;
    user_id:number;
    birds_count:number;
    date_taken:number;
    updated_at:number;
    created_at:number;
}

export class Species{
    id:number;
    species_name:string;
}
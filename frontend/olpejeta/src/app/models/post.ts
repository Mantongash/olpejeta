export class Bird {
    id: number;
    common_name:string;
    scientific_name:string;
    general_status:string;
    conservation_status:string;
    species_name:string;
    category:string;
    image_url:string;
    bird_description:string;
    bird_sound:string;
    constructor(
        id: number,
        common_name:string,
        scientific_name:string,
        general_status:string,
        conservation_status:string,
        species_name:string,
        category:string,
        image_url:string,
        bird_description:string,
        bird_sound:string
    ){
        this.id = id;
        this.common_name = common_name;
        this.scientific_name = scientific_name;
        this.general_status = general_status;
        this.conservation_status = conservation_status;
        this.species_name = species_name;
        this.category = category;
        this.image_url = image_url;
        this.bird_description = bird_description;
        this.bird_sound = bird_sound;
    }
}

export interface Sighting {
    id: number,
    birds_count: string,
    date_taken: number,
}
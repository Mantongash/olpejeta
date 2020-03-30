import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-species-add',
  templateUrl: './species-add.component.html',
  styleUrls: ['./species-add.component.css']
})

export class SpeciesAddComponent implements OnInit {

 common_name:string;
 scientific_name:string;
 general_status:string;
 conservation_status:string;
 species_name:string;
 category:string;
 image_url:string;
 bird_description:string;
 bird_sound:string;

  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<SpeciesAddComponent>) { }

  addBird(){
    const bird = {
      common_name: this.common_name,
      scientific_name:this.scientific_name,
      general_status: this.general_status,
      conservation_status: this.conservation_status,
      species_name: this.species_name,
      category: this.category,
      bird_image_url: this.image_url,
      bird_description: this.bird_description,
      bird_sound_url: this.bird_sound
    }
    console.log(bird);
  }
  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

  
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";
import { DataService } from "../../service/data.service";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialogRef } from "@angular/material/dialog";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-species-add",
  templateUrl: "./species-add.component.html",
  styleUrls: ["./species-add.component.css"]
})
export class SpeciesAddComponent implements OnInit {
  birdForm: FormGroup;
  submitted = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SpeciesAddComponent>
  ) {}

  
  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.birdForm = this.formBuilder.group({
      id:[],
      common_name: [""],
      scientific_name: [""],
      bird_age: [""],
      general_status: [""],
      conservation_status: [""],
      species: [],
      category: [],
      bird_image_url: [""],
      bird_description: [""],
      bird_sound_url: [""]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.birdForm.valid){
      this.dataService.addBird(this.birdForm.value)
      .subscribe( data => {
        console.log(data);
      });
    }

}
}

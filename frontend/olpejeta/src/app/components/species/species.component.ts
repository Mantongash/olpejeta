import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Bird } from 'src/app/models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SpeciesAddComponent } from '../species-add/species-add.component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})

export class SpeciesComponent implements OnInit {
  bird:Bird[];

  displayedColumns: string[] = ['common_name', 'scientific_price'];
  data: Bird[] = [];
  isLoadingResults = true;

  constructor(private dataService: DataService, public matDialog: MatDialog) {}

  openAddBird() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "650px";
    dialogConfig.width = "600px";
   // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SpeciesAddComponent, dialogConfig);
  }

  ngOnInit() {
    this.dataService.getBirds()
    .subscribe(birds => {
      this.bird = birds
      this.dataService.birdsData = birds
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });//bird
  }

  details($event){
    alert("Niaje msee")
  }

  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.bird = this.dataService.filteredListOptions();
    else {
      this.bird = this.dataService.birdsData;
    }
  }
}
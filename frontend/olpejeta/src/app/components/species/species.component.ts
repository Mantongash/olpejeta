import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Bird } from 'src/app/post';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})

export class SpeciesComponent implements OnInit {
  bird:Bird[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBirds().subscribe(birds => {
      this.bird = birds
      this.dataService.birdsData = birds
    });
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
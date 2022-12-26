import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchGroup!: FormGroup;
  nameControl!: FormControl

  ngOnInit(): void {
    this.searchGroup = new FormGroup()
  }
  constructor(private formBuilder: FormBuilder) { }

  search() {
    
  }
}

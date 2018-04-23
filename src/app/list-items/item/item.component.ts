import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Item } from '../../models/item.model';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  


  @Input()
  item: Item;
  constructor() { }

  ngOnInit() {
  }

}

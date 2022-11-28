import { Component, Input, OnInit, } from '@angular/core';
import { Account } from '../../../classes/Account';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() account:Account;
  constructor() { }

  ngOnInit(): void {
  }

}

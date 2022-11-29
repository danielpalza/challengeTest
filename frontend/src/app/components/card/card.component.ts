import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Account } from '../../../classes/Account';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() account:Account;
  @Output() sAccount = new EventEmitter<Account>();

  open:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  showAccount(){
    this.sAccount.emit(this.account)
  }

}

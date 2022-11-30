import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Account } from '../../../classes/Account';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() account:any;
  @Output() sAccount = new EventEmitter<Account>();
  @Output() changeIndex = new EventEmitter<number>();

  open:boolean=true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.account)

  }

  showAccount(){
    this.sAccount.emit(this.account)
  }

  cIndex(index:number){
    this.changeIndex.emit(index)
  }

}

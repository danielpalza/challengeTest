import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Account } from '../../../classes/Account';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {
  @Input() account:Account;
  @Output() close = new EventEmitter<Account>();
  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.close.emit()
  }
}

import { Component, OnInit } from '@angular/core';
import { Account } from '../../../classes/Account';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements OnInit {
  load:boolean=false
  cards:any
  
  showAccount:boolean=false
  account:Account;

  constructor(public accountService: AccountsService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((res:any)=>{
      if(res.status=='OK'){
        this.setAccounts(res.accounts)

      }
      
    })
  }

  setAccounts(accounts:Account){
   /* if(accounts.length>6){
      this.cards= accounts.map()

    }
    else{

    }*/
    this.cards=accounts
    this.load=true
  }

  setAccount(account:any){
    this.account=account;
    this.showAccount=true;
  }

  closeModal(){
    this.showAccount=false;
  }

}

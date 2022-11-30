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
  index:number=0
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

  setAccounts(accounts:any[]){

   if(accounts.length>6){
      let array=[]
      let auxA=[] 
      let aux=accounts[0];
      for(let a=0;a < accounts.length ; a++){
       
        if( auxA.length==4 ){
          array.push(auxA)
          auxA=[]
          auxA.push(accounts[a])
          
        }
        else{
          auxA.push(accounts[a])
        }
      }
      if(auxA.length>0){
        array.push(auxA)
      }
      array[0].unshift(aux)
      array[0].push({button:true,name:"Mas opciones >>",val:1})

      for(let a=1; a<array.length;a++){
        array[a].unshift({button:true,name:'<< Opciones anteriores',val:a-1})
        if(array[a+1]!=undefined){
          array[a].push({button:true,name:"Mas opciones >>", val:a+1})
        }
      }
      this.cards=array
    }
    else{
      this.cards=accounts
    }
    
   
    this.load=true
  }

  setAccount(account:any){
    this.account=account;
    this.showAccount=true;
  }

  closeModal(){
    this.showAccount=false;
  }

  setIndex(index:number){
    this.index=index
  }

}


export class Account{
    n:number
    t:number
    saldo:number
    moneda:string
    tipo_letras:string

    constructor(account:Account) {
        {
          this.n = account.n;
          this.t = account.t ;
          this.saldo = account.saldo ;
          this.moneda = account.moneda;
          this.tipo_letras = account.tipo_letras
        }
    }
}
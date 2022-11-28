export class Account{

    n
    t
    saldo
    moneda
    tipo_letras
    constructor(account) {
        {
          this.n = account.n;
          this.t = account.t ;
          this.saldo = account.saldo ;
          this.moneda = account.moneda;
          this.tipo_letras = account.tipo_letras
        }
    }
}
import { Account } from "../classes/Account.js";

export class AccountHelper {
  static filterAccounts = (accounts) => {
    //para este filtro, se considera $ como pesos, y u$s como dolares.
    let r = accounts.cuentas
      .filter((a) => a.tipo_letras == "CA" || a.tipo_letras == "CC")
      .filter((b) => b.moneda == "u$s" || b.moneda == "$");
    let arr = r.map((c) => {
      c.saldo = c.saldo.replace(/\D/g, "");
      return new Account(c);
    });
    return arr;
  };
}

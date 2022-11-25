import https from "https";
import { AccountHelper } from "../helper/accounts.helper.js";

export class AccountController {
  static get = async (req, res, Next) => {
    try {

      //get info about the accounts in the api
      let re = res;
      let url= "https://api.npoint.io/97d89162575a9d816661"
      https
        .get(url, (resp) => {
          let data = "";

          resp.on("data", (chunk) => {
            data += chunk;
          });
          resp.on("end", () => {
            let accounts= AccountHelper.filterAccounts(JSON.parse(data))
            re.json({status:"OK",accounts});
          });
        })
        .on("error", (err) => {
          console.log("Error: " + err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
}

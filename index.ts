import { Chain } from "./Chain";
import { Wallet } from "./Wallet";

new Chain();

const agustin = new Wallet();
const nicolas = new Wallet();
const satoshi = new Wallet();

agustin.sendMoney(200, nicolas.publicKey);
nicolas.sendMoney(300, satoshi.publicKey);
satoshi.sendMoney(123, agustin.publicKey);

console.log(Chain.instance);

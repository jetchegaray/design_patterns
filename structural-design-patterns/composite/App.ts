import { MobilePhone } from "./MobilePhone";
import { Laptop } from "./Laptop";
import { Catalog } from "./Catalog";

const iphoneXS = new MobilePhone("apple iphone xr", "white", 1000);
const iphoneS = new MobilePhone("apple iphone s", "black", 1200);
const galaxyM20 = new MobilePhone("galaxy m20", "blue", 850);

const phonesCatalog = new Catalog("new catalog of phones");
phonesCatalog.addItem(iphoneXS);
phonesCatalog.addItem(iphoneS);
phonesCatalog.addItem(galaxyM20);

const macbook = new Laptop("Apple", "Macbook", 1500);
const dell = new Laptop("dell", "Macbook", 1200);

const laptpsCatalog = new Catalog("new catalog of laptops");
laptpsCatalog.addItem(macbook);
laptpsCatalog.addItem(dell);

console.log(phonesCatalog.getDetails());
console.log(laptpsCatalog.getDetails());

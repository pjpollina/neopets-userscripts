// ==UserScript==
// @name         Beta Layout Inventory/SDB Quick Links
// @namespace    https://github.com/pjpollina/neopets-userscripts
// @version      0.2.0
// @description  A custom update of Piotr Kardovsky's 2020 Inventory Button
// @author       PJ Pollina (aeugchad)
// @match        http*://www.neopets.com/*
// @icon         https://www.neopets.com//favicon.ico
// @grant        none
// ==/UserScript==

// Add necessary CSS
let css = document.createElement("style")
css.innerHTML = `
  .navsub-inv-icon__2020, .navsub-sdb-icon__2020, .navsub-til-icon__2020 {
    width: 25px;
    height: 25px;
    margin: auto 4px auto 0;
    float: left;
    vertical-align: middle
   }
   .navsub-sdb-icon__2020 {
     background:url(https://images.neopets.com/themes/h5/basic/images/v3/safetydeposit-icon.svg) center center/100% auto no-repeat;
   }
   .navsub-inv-icon__2020 {
     background:url(https://images.neopets.com/themes/h5/basic/images/v3/inventory-icon.svg) center center/100% auto no-repeat;
   }
   .navsub-til-icon__2020 {
     background:url(https://images.neopets.com/themes/h5/basic/images/myshop-icon.png) center center/100% auto no-repeat;
   }`;
document.body.appendChild(css);

// Inject buttons
let menu = document.querySelector(".navsub-right__2020");
if(menu) {
  let inv = document.createElement("a");
  inv.href = "https://www.neopets.com/inventory.phtml";
  inv.innerHTML =`
    <div class="navsub-np-meter__2020" style="display: inline-block; margin-bottom: 0px;">
    <div class="navsub-inv-icon__2020"></div>
    <span class="np-text__2020">Inventory</span>
    </div>`;
  let sdb = document.createElement("a");
  sdb.href = "https://www.neopets.com/safetydeposit.phtml";
  sdb.innerHTML =`
    <div class="navsub-np-meter__2020" style="display: inline-block; margin-bottom: 0px;">
    <div class="navsub-sdb-icon__2020"></div>
    <span class="np-text__2020">SDB</span>
    </div>`;
  let til = document.createElement("a");
  til.href = "https://www.neopets.com/market.phtml?type=till";
  til.innerHTML =`
    <div class="navsub-np-meter__2020" style="display: inline-block; margin-bottom: 0px;">
    <div class="navsub-til-icon__2020"></div>
    <span class="np-text__2020">Till</span>
    </div>`;
  menu.prepend(inv);
  menu.prepend(sdb);
  menu.prepend(til);
}

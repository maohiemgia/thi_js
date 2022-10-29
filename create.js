import { dbCreate, dbDelete, dbGet, dbUpdate, dbUrl, getIdByUrl, displayErr } from "./all.js";

let tableName = 'products';

let form = document.querySelector('#form');
let inpFileds = document.querySelectorAll('.inpField');

let iname = document.querySelector('#name');
let icate = document.querySelector('#cate');
let ides = document.querySelector('#des');
let iprice = document.querySelector('#price');
let irawprice = document.querySelector('#rawprice');
let irating = document.querySelector('#rating');

form.onsubmit = function (e) {
     e.preventDefault();

     inpFileds.forEach(function (ele) {
          displayErr('', ele.id);
     })

     let check = true;
     inpFileds.forEach(function (ele) {
          if (ele.value == '') {
               displayErr('Không được để trống', ele.id);
               check = false;
          }
     })

     if (check) {
          let data = {
               "name": iname.value,
               "cate": icate.value,
               "des": ides.value,
               "price": iprice.value,
               "rawprice": irawprice.value,
               "rating": irating.value
          };

          dbCreate(tableName, data).then(function () {
               location.href = './index.html';
          })
     }

}
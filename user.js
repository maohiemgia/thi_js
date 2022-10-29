import { dbCreate, dbDelete, dbGet, dbUpdate, dbUrl, getIdByUrl, displayErr } from "./all.js";

let tableName = 'products';

let show = document.querySelector('#show');
let arrEle = [];

dbGet(tableName).then(function (res) {
     let data = '';
     let rate = '';

     res.forEach(function (ele) {
          arrEle.push(ele);

          rate = '';
          for (let index = 0; index < ele.rating; index++) {
               rate += '*';
          }

          data += `
               <tr>
                    <td>${ele.name}</td>
                    <td>${ele.cate}</td>
                    <td>${rate}</td>
                    <td>${ele.des}</td>
               </tr>
          `;
     });
     if (data.length > 1) {
          show.innerHTML = data;
     }
});

let searchBtn = document.querySelector('#search');

searchBtn.onkeypress = function (e) {
     let data = '';
     let rate = '';
     if (e.key == 'Enter') {
          arrEle.forEach(function (ele) {
               if (ele.name.match(searchBtn.value) ||
                    ele.des.match(searchBtn.value)) {
                    rate = '';
                    for (let index = 0; index < ele.rating; index++) {
                         rate += '*';
                    }

                    data += `
                    <tr>
                         <td>${ele.name}</td>
                         <td>${ele.cate}</td>
                         <td>${rate}</td>
                         <td>${ele.des}</td>
                    </tr>
               `;
               }
          });
          if (data.length > 1) {
               show.innerHTML = data;
          } else {
               show.innerHTML = `
               <tr>
                 <td colspan="999">dont have any records match</td>
               </tr>
               `;
               alert('not found!!!');
          }
     }
}

let icate = document.querySelector('#cate');

icate.onchange = function () {
     let data = '';
     let rate = '';

     arrEle.forEach(function (ele) {
          if (ele.cate.match(icate.value)) {
               rate = '';
               for (let index = 0; index < ele.rating; index++) {
                    rate += '*';
               }

               data += `
                    <tr>
                         <td>${ele.name}</td>
                         <td>${ele.cate}</td>
                         <td>${rate}</td>
                         <td>${ele.des}</td>
                    </tr>
               `;
          }
     });
     if (data.length > 1) {
          show.innerHTML = data;
     } else {
          show.innerHTML = `
               <tr>
                 <td colspan="999">dont have any records match</td>
               </tr>
               `;
          alert('not found!!!');
     }
}

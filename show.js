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
                    <td></td>
                    <td>
                         <a href="./delete.html?id=${ele.id}" onclick="return confirm('xóa thật không?')"><button>xóa</button></a>
                         <a href="./update.html?id=${ele.id}"><button>cập nhật</button></a>
                    </td>
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
                         <td></td>
                         <td>
                         <a href="./delete.html?id=${ele.id}" onclick="return confirm('xóa thật không?')"><button>xóa</button></a>
                         <a href="./update.html?id=${ele.id}"><button>cập nhật</button></a>
                         </td>
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

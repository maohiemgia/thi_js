import { dbCreate, dbDelete, dbGet, dbUpdate, dbUrl, getIdByUrl, displayErr } from "./all.js";

let tableName = 'products';

let id = getIdByUrl();

dbDelete(id, tableName).then(function () {
     location.href = './index.html';
})

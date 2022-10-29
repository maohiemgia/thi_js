const dbUrl = "http://localhost:4000";

function dbGet(tableName, id = -999) {
     tableName = '/' + tableName + '/';
     if (id == -999) {
          return fetch(dbUrl + tableName).then(function (res) {
               return res.json();
          })
     }
     return fetch(dbUrl + tableName + id).then(function (res) {
          return res.json();
     })
}

function dbDelete(id, tableName) {
     tableName = '/' + tableName + '/';
     return fetch(dbUrl + tableName + id, {
          method: "DELETE",
          headers: {
               "Content-Type": "application/json"
          }
     }).then(function (res) {
          alert('Deleted!!!');
          return res.json();
     })
}

function dbUpdate(id, tableName, data) {
     tableName = '/' + tableName + '/';
     return fetch(dbUrl + tableName + id, {
          method: "PUT",
          headers: {
               "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
     }).then(function (res) {
          alert('Updated!!!');
          return res.json();
     })
}

function dbCreate(tableName, data) {
     tableName = '/' + tableName + '/';
     return fetch(dbUrl + tableName, {
          method: "POST",
          headers: {
               "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
     }).then(function (res) {
          alert('Created!!!');
          return res.json();
     })
}

function getIdByUrl() {
     var querystring = location.search;
     var param = new URLSearchParams(querystring);
     var id = param.get('id');

     return id;
}

function displayErr(errContent, errId) {
     if (errContent.length < 1) {
          return document.querySelector('#' + errId).nextElementSibling.innerText = '';
     }
     return document.querySelector('#' + errId).nextElementSibling.innerText = errContent;
}

export { dbCreate, dbDelete, dbGet, dbUpdate, dbUrl, getIdByUrl, displayErr };
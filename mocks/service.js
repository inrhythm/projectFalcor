var fs = require("fs");

var data = fs.readFileSync("./mocks/mock_data.json");

var jsonData = JSON.parse(data);

const getList = () => {
   return jsonData.people.map(a => {
      return {
         id: a.id,
         image_url1: a.image_url1,
         image_url2: a.image_url2,
         name: a.name,
         title: a.title,
         department: a.department

      }
   })
}

const getPerson = (id) => {
   return jsonData.people.find(function (a) {
      return a.id === id;
   });
}

const getAdminList = (id) => {
   return jsonData.people.filter(function (a) {
      return a.is_active === false;
   });
}

const addPerson = (person) => {
   jsonData.people.push(person)
}


module.exports = {
   getList: getList,
   getPerson: getPerson,
   getAdminList: getAdminList,
   addPerson: addPerson
}

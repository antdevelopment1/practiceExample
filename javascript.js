const fetch = require('node-fetch');
// const idType = "oclc";
// const idValue = "616385";
// function hathiApiCall(idType, idValue) {
    
//     const hathiApi = "http://catalog.hathitrust.org/api/volumes/full/" + idType + "/" + idValue + ".json";
//     console.log(hathiApi);
//     fetch(hathiApi)
//     .then( r => {
//         return r.json();
//     })
//     .then ( response => {
//         return response;
//     })
// };
// hathiApiCall(idType,idValue)

const idType = "oclc";
const idValue = "616385";
function hathiApiCall(idType, idValue) {
    
    const hathiApi = "http://catalog.hathitrust.org/api/volumes/full/" + idType + "/" + idValue + ".json";
    console.log(hathiApi);
    fetch(hathiApi)
        .then(r => r.json())
};
hathiApiCall(idType,idValue);

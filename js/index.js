// get the references to the active parts of the webpages
/*
// GET THE REFERENCES
const container = document...
const links = ...
let url = ...
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent ...
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
   // RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 
// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
// const selectContent ...
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE


const dd = document.querySelector('.dynamic-data');

const url = 'partials/home.html';

fetch(url)

    .then(function(rsp) {
    
        if (rsp.ok) {
            return rsp.text();
        }
        // handel error
        throw new Error(rsp.statusText);
    })
    .then(function (data) {
        dd.innerHTML = data;
    })
    .catch(function (err) {
        console.log(err.message);
    });







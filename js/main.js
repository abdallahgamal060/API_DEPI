// API >>>>>>>>>>> Application Programming Interface >>>> Represents Database

// Array Of Object

// id   name   quantity
// 1    ali        5
// 2    omar       10
// 3    ahmed      15
// 4    nour        20

// [
//     {
//         id:1,
//         name:"ali",
//         quantity:5
//     },
//     {
//         id:2,
//         name:"ali",
//         quantity:5
//     },
//     {
//         id:3,
//         name:"ali",
//         quantity:5
//     },
//     {
//         id:4,
//         name:"ali",
//         quantity:5
//     },
// ]

// json >>>>>> Array of Object

// ------------------------------------------------------------------------------------------

// Ajax >>>>>>>>>>>>>>> XMLHttpRequest   Communication between browser and server
// onreadystatechange = true;
// readyState =4;
// status = 200;

// respnseText >>>> String

// ------------------------------------------------------------------------------------------

// sync             توالي         تزامن 
// async                توازي عدم تزامن


function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;   // string

            var json = JSON.parse(result); // string to json

            var basket = "";
            for (var i = 0; i < json.length; i++) {
                var cartona = `<div class="md:col-4  text-center">
                <img src="${json[i].url}" class="w-100">
                    <h4>${json[i].title}</h4>
                    <h6>${json[i].id}</h6>
            </div>`;
                basket = basket + cartona;

            }
            document.querySelector(".test").innerHTML = basket;

        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true /*async*/);            // link
    xhttp.send();           //send request
}
getApi();



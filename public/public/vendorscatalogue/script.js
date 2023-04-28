const firebaseConfig = {
  apiKey: "AIzaSyC_ASuN2kwY5mEwGiL3MqZUqiZEawbu2oU",
  authDomain: "xyztyyt-ad7ba.firebaseapp.com",
  databaseURL: "https://xyztyyt-ad7ba-default-rtdb.firebaseio.com",
  projectId: "xyztyyt-ad7ba",
  storageBucket: "xyztyyt-ad7ba.appspot.com",
  messagingSenderId: "103140153198",
  appId: "1:103140153198:web:3736edf9dc8ac3fb45d37f"
};

firebase.initializeApp(firebaseConfig);


var weight, price, product;
price= document.querySelector(".");

function readFom() {
  // price= document.querySelectorAll(".prices");
  price= document.querySelectorAll(".prices");
  weight = document.querySelectorAll(".weight");
  product = document.querySelectorAll(".product-name");
  console.log(price);
  console.log(weight);
  console.log(product.length);
  // genderV = document.getElementById("gender").value;
  // addressV = document.getElementById("address").value;
  // console.log(User_IdV, nameV, addressV, genderV);
}

var fruit;
// document.getElementById("insert").onclick =
 function callfirebase(fruit) {
  readFom();
  for( var i=0;i<product.length;i++){
    if(product[i].innerText==fruit){
      break;
    }
  }
  console.log(price[i].value);
  console.log(weight[i].value);
  firebase
    .database()
    .ref("xyztyyt/" + fruit)
    .set({
      price: price[i].value,
      weight: weight[i].value,
      // gender: genderV,
      // address: addressV,
    });
  alert(`price of ${fruit} set to ${price[i].value} and weight carry is ${weight[i].value}`);
  price[i].value='';
  weight[i].value='';
  // document.getElementByClassName("weight").value = "";
  // document.getElementByClassName("prices").value = "";
};



// -------------------------------form reading----------------


// document.getElementById("read").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("xyztyyt/" + User_IdV)
//     .on("value", function (snap) {
//       document.getElementById("User").value = snap.val().User_Id;
//       document.getElementById("name").value = snap.val().name;
//       // document.getElementById("gender").value = snap.val().gender;
//       // document.getElementById("address").value = snap.val().address;
//     });
// };




// ------------------form updation-------------------



// document.getElementById("update").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("xyztyyt/" + User_IdV)
//     .update({
//       //   rollNo: User_IdV,
//       name: nameV,
//       // gender: genderV,
//       // address: addressV,
//     });
//   alert("Data Update");
//   document.getElementById("User").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };



// ---------------------delete-------------------


document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("xyztyyt/" + product)
    .remove();
  alert("Data Deleted");
  document.getElementByClassName("wght").value = "";
  document.getElementByClassName("prices").value = "";
  // document.getElementById("gender").value = "";
  // document.getElementById("address").value = "";
};











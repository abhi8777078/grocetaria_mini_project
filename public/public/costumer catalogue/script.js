const firebaseConfig = {
  apiKey: "AIzaSyC_ASuN2kwY5mEwGiL3MqZUqiZEawbu2oU",
  authDomain: "xyztyyt-ad7ba.firebaseapp.com",
  databaseURL: "https://xyztyyt-ad7ba-default-rtdb.firebaseio.com",
  projectId: "xyztyyt-ad7ba",
  storageBucket: "xyztyyt-ad7ba.appspot.com",
  messagingSenderId: "103140153198",
  appId: "1:103140153198:web:3736edf9dc8ac3fb45d37f",
};

firebase.initializeApp(firebaseConfig);

var weight, price, product;
product = document.querySelectorAll(".product-name");
l=product.length
console.log(l);
function readFom() {
  price = document.querySelectorAll(".prices");
  rupee = document.querySelectorAll(".₹");
  weight = document.querySelectorAll(".weight");
  product = document.querySelectorAll(".product-name");
 
}


function readData(i) {
  readFom();
    firebase
      .database()
      .ref("xyztyyt/" + product[i].innerText)
      .on("value", function (snap) {
        if(snap.val()!=null)
        document.querySelectorAll(".price")[i].innerText=(snap.val().price)+'₹/kgs';
        else{
        document.querySelectorAll(".price")[i].innerText='NOT AVAILAIBLE';
        document.querySelectorAll(".price")[i].classList.remove('price2');
        }
      })
  }


for(var i=0;i<l;i++){
readData(i);}

price = document.querySelectorAll(".prices");
price.innerText='ashjashs'
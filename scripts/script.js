//Global Variables
const navBarCart = document.getElementById("navBarCart");

const navBarElectro = document.getElementById("navBarElectro");

const navBarJewelz = document.getElementById("navBarJewelz");

const navBarMenz = document.getElementById("navBarMenz");

const navBarWomenz = document.getElementById("navBarWomenz");

const display = document.getElementById("display");

const baseURL = "https://fakestoreapi.com";

let products = [];

let cart = [];



// -------------------------------------Functions------------------------------------------------- //
//Async fakeStore
const fakeStore = async (endpoint) => {
  await fetch(baseURL + endpoint)
    .then((res) => res.json())

    // .then(json=>console.log(json))
    .then((data) => {
      let item = data; //pathway to an item from the API.
      products = item;
      console.log(item);

      displayCards();
    })
    .catch((err) => console.error(err));
};

const removeElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const displayCards = (obj) => {
  removeElements(display);
  products.map((obj) => {
    //* Create
    let col = document.createElement("div"); //col
    let card = document.createElement("div"); //card
    let img = document.createElement("img"); //img
    let body = document.createElement("div"); //body
    let title = document.createElement("h5"); //title
    let accordion = document.createElement("div"); //accordion start
    let accItem1 = document.createElement("div"); //accordion item
    let accHead1 = document.createElement("h2"); //accordion header
    let accBtn1 = document.createElement("button"); //accordion-button collapsed
    let accClpsdTxt1 = document.createElement("div"); //flush-collapseOne
    let accClpsdBody1 = document.createElement("div"); //text
    let accItem2 = document.createElement("div"); //accordion item
    let accHead2 = document.createElement("h2"); //accordion header
    let accBtn2 = document.createElement("button"); //accordion-button collapsed
    let accClpsdTxt2 = document.createElement("div"); //flush-collapseOne
    let accClpsdBody2 = document.createElement("div"); //text
    let cartBtn = document.createElement("button"); //add to cart function

    //* Attributes
    col.className = "col";

    col.style.width = "18rem";

    card.className = "card";
    // card.style.maxHeight = "36rem";

    img.className = "card-img-top";
    img.src = obj.image; //src from an object from array
    img.alt = `Picture of: ${obj.title}`; // src from an object from array

    body.className = "card-body";

    title.className = "card-title";
    title.textContent = obj.title; // from object

    accordion.className = "accordion accordion-flush";
    accordion.setAttribute("id", `accDesc${obj.id}`);

    accItem1.className = "accordion-item";
    accItem2.className = "accordion-item";

    accHead1.className = "accordion-header";
    accHead2.className = "accordion-header";

    accBtn1.className = "accordion-button collapsed";
    accBtn1.type = "button";
    accBtn1.setAttribute("data-bs-toggle", "collapse");
    accBtn1.setAttribute("data-bs-target", `#flush-collapseOne${obj.id}`);
    accBtn1.setAttribute("aria-expanded", "false");
    accBtn1.setAttribute("aria-controls", `flush-collapseOne${obj.id}`);
    accBtn1.textContent = "Description";

    accBtn2.className = "accordion-button collapsed";
    accBtn2.type = "button";
    accBtn2.setAttribute("data-bs-toggle", "collapse");
    accBtn2.setAttribute("data-bs-target", `#flush-collapseTwo${obj.id}`);
    accBtn2.setAttribute("aria-expanded", "false");
    accBtn2.setAttribute("aria-controls", `flush-collapseTwo${obj.id}`);
    accBtn2.textContent = "Price";

    accClpsdTxt1.className = "accordion-collapse collapse";
    accClpsdTxt1.setAttribute("id", `flush-collapseOne${obj.id}`);
    accClpsdTxt1.setAttribute("data-bs-parent", `#accDesc${obj.id}`);

    accClpsdBody1.textContent = obj.description;
    accClpsdBody1.className = "card-text";

    accClpsdTxt2.className = "accordion-collapse collapse";
    accClpsdTxt2.setAttribute("id", `flush-collapseTwo${obj.id}`);
    accClpsdTxt2.setAttribute("data-bs-parent", `#accDesc${obj.id}`);

    accClpsdBody2.textContent = `$${obj.price.toFixed(2)}`;
    accClpsdBody2.className = "card-text";

    cartBtn.className = "btn btn-primary";
    cartBtn.textContent = "Add to Cart";
    cartBtn.onclick = () => {
      // console.log(obj.title);
      let cartItem = {
        id: obj.id,
        title: obj.title,
        cost: obj.price,
        quantity: 1,
      };
      submitToCart(cartItem);
      console.log(`attempt to buy ${obj.title}`)
      
    };

    //* Attach
    accHead1.appendChild(accBtn1);
    accHead2.appendChild(accBtn2);
    accClpsdTxt1.appendChild(accClpsdBody1);
    accClpsdTxt2.appendChild(accClpsdBody2);
    accClpsdTxt2.appendChild(cartBtn);
    accItem1.appendChild(accHead1);
    accItem1.appendChild(accClpsdTxt1);
    accItem2.appendChild(accHead2);
    accItem2.appendChild(accClpsdTxt2);
    accordion.appendChild(accItem1);
    accordion.appendChild(accItem2);
    body.appendChild(title);
   
    col.appendChild(card);
    col.appendChild(img);
    col.appendChild(body);
    col.appendChild(accordion);

    display.appendChild(col);
  });
};

function submitToCart(item) {
 
// cart.length > 0 ?
// cart.forEach(object => {
//   if (object.id === item.id) {
//     object.quantity = object.quantity + 1
//   } else {
//     cart.push(item)
//   }
// }): cart.push(item)
// console.log(cart)

  // if (cart.length > 0) {
   
const cartItem = cart.find((cartItem) => cartItem.id === item.id);
// const found = array1.find(element => element > 10);

    if (cartItem) {
      console.log(cartItem.quantity)
    cartItem.quantity ++;
    console.log("quantity add")
    console.log(cart)

       
    } else { 
    cart.push(item);
    console.log(`${item.title} added to cart`);
    console.log(cart)
    }
  };
   
 
// }



navBarCart.addEventListener("submit", (event) => {
  event.preventDefault();
  
});

navBarElectro.addEventListener("click", (event) => {
  products = [];
  fakeStore("/products/category/electronics?limit=5");
});

navBarJewelz.addEventListener("click", (event) => {
  products = [];
  fakeStore("/products/category/jewelery?limit=5");
});

navBarMenz.addEventListener("click", (event) => {
  products = [];
  fakeStore("/products/category/men's clothing?limit=5");
});

navBarWomenz.addEventListener("click", (event) => {
  products = [];
  fakeStore("/products/category/women's clothing?limit=5");
});

window.onload = fakeStore("/products?sort=asc&limit=8");

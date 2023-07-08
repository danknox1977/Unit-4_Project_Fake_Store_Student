//Global Variables
const navBarCart = document.getElementById("navBarCart");

const navBarElectro = document.getElementById("navBarElectro");

const navBarJewelz = document.getElementById("navBarJewelz");

const navBarMenz = document.getElementById("navBarMenz");

const navBarWomenz = document.getElementById("navBarWomenz");

const display = document.getElementById("display");

const baseURL = "https://fakestoreapi.com";

//Async fakeStore
const fakeStore = async endpoint => {

  await fetch(baseURL + endpoint)
  .then(res=>res.json())
  .then(json=>console.log(json))
  .catch((err) => console.error(err));
  console.log(endpoint)
}

// fakeStore("/products/1");




// {myScript}
// **On Load:**
// - **Given** the user loads the page.
// - **Then** target the window object.
// - **And** use an `onload` method that will invoke the `fakeStore` function.
// - **And** provide an argument that will be the endpoint for the URL fetch.

// **Event Listeners:**
// - **Given** the page has loaded with data being returned.
// - **Then** create event listeners using the proper method for each global variable assigned to each navbar category.
// - **And** for each callback function, invoke the `fakeStore` function.
// - **And** pass in the associated endpoint to that will return that categories inventory.

// navBarCart.addEventListener('onclick', (e) => {
//   console.log('cart')
// })

navBarElectro.addEventListener('onclick', fakeStore('/products/category/electronics?limit=5'));

navBarJewelz.addEventListener('onclick', fakeStore('/products/category/jewelery?limit=5'));

navBarMenz.addEventListener('onclick', fakeStore('/products/category/men\'s\ clothing?limit=5'));

navBarWomenz.addEventListener('onclick', fakeStore('/products/category/women\'s\ clothing?limit=5'));


// **Notes:**
// - Be sure to look over the documentation as to how you are to pull data in different manners.
//   - Descending, ascending, item, category, etc.
// - Consider Scope and Hoisting when writing various aspects of your code, such as event listeners.

// **Ticket Requirements:**
// - gloabl variables should not have the capability to change later in the code.
// - The `fakeStore()` function should be written as a block body arrow function.
// - The window onload should provide an endpoint that returns **all** data from the API in ascending order.
//   - This should be set to the very bottom of the file.
// - At this point, all data should be at least displayed within the `console`.

window.onload = fakeStore("/products?sort=asc");

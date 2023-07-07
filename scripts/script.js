//Global Variables
const navBarCart = document.getElementsByClassName("navBarCart");

const navBarElectro = document.getElementsByClassName("navBarElectro");

const navBarJewelz = document.getElementsByClassName("navBarJewelz");

const navBarMenz = document.getElementsByClassName("navBarMenz");

const navBarWomenz = document.getElementsByClassName("navBarWomenz");

const display = document.getElementById("display");

const baseURL = "https://fakestoreapi.com";

//Async fakeStore
async function fakeStore(endpoint) {
  await fetch(baseURL + endpoint)
  .then(res=>res.json())
  .then(json=>console.log(json))
    .catch((err) => console.error(err));
}

fakeStore("/products/1");

window.onload = fakeStore("/products/1"){myScript};

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

let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let salePage = document.getElementById('sales-page');
let tableElem = document.getElementById('sales-table'); // table container


// method that takes in min and max and generates random number of customers
function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let sales = [];

// Make a constructor function 
function Citysales(location, minCustomer, maxCustomer, avgCookie){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.hourlyCookieSold = [];
  this.totalCookiesSold = 0;

  sales.push(this);
}

// Create prototypes for objects to inherit methods

// This method finds the total cookies sold in an hour and total daily sold
Citysales.prototype.soldCookies = function(){
  for (let i = 0; i < storeHours.length; i++){
    let numberOfCustomer = randomCustomer(this.minCustomer, this.maxCustomer);
    this.hourlyCookieSold.push(Math.ceil(numberOfCustomer * this.avgCookie));
    // console.log(this.hourlyCookieSold);
    this.totalCookiesSold += this.hourlyCookieSold[i];
  }
}

// create stand alone function for header and foot row for table
function thead(){  
  let thead = document.createElement('thead');
  tableElem.appendChild(thead);
  let trElem1 = document.createElement('tr'); // header row 
  thead.appendChild(trElem1);
  let thElem = document.createElement('th');
  thElem.textContent = 'City'; // add extra cell for city
  trElem1.appendChild(thElem);

  for (let i = 0; i < storeHours.length; i++){ // display store hours row
    thElem = document.createElement('th');
    thElem.textContent = storeHours[i];
    trElem1.appendChild(thElem);
  }
  thElem.textContent = 'Daily Location Total';
  trElem1.appendChild(thElem);
}
thead();

// each cookie stand should have it's own render method
Citysales.prototype.render = function(){

  let trElem2 = document.createElement('tr'); // 2nd row for seattle sales
  tableElem.appendChild(trElem2);
  let tdElemSeattle = document.createElement('td');
  tdElemSeattle.textContent = this.location;
  trElem2.appendChild(tdElemSeattle);

  for(let j = 0; j < this.hourlyCookieSold.length; j++){ // td for hourly sales
    tdElemSeattle = document.createElement('td');
    tdElemSeattle.textContent = this.hourlyCookieSold[j];
    trElem2.appendChild(tdElemSeattle);
  }

  tdElemSeattle.textContent = this.totalCookiesSold;
  trElem2.appendChild(tdElemSeattle);
}

// last footer row
function footer(){
  // add variables
  let hourlySales = 0;
  let totalStoreSales = 0;
  let hourlySalesArray = [];

  // create footer
  let tfoot = document.createElement('tfoot');
  tableElem.appendChild(tfoot);
  let trFoot = document.createElement('tr');
  tfoot.appendChild(trFoot);
  let tdFoot = document.createElement('td');
  tdFoot.textContent = 'Totals';
  trFoot.appendChild(tdFoot);

  // find daily totals of hourly sales 
  for(let i = 0; i < storeHours.length; i++){
      // console.log(sales[j].hourlyCookieSold[0]);
    for (let j = 0; j < sales.length; j++){
      hourlySales += sales[j].hourlyCookieSold[i];
      totalStoreSales += sales[j].hourlyCookieSold[i];
    }
    hourlySalesArray.push(hourlySales);
    hourlySales = 0;
  }
  console.log(hourlySalesArray);
  console.log(totalStoreSales);
  // add array of hourly sales to td elements
  for (let n = 0; n < hourlySalesArray.length; n++){
    tdFoot = document.createElement('td');
    tdFoot.textContent = hourlySalesArray[n];
    trFoot.appendChild(tdFoot);
  }
  tdFoot.textContent = totalStoreSales;
  trFoot.appendChild(tdFoot);
} 


// instantiate sales for seattle
new Citysales('Seattle', 23, 65, 6.3);
new Citysales('Tokyo', 3, 24, 1.2);
new Citysales('Dubai', 11, 38, 3.7);
new Citysales('Paris', 20, 38, 2.3);
new Citysales('Lima', 2, 16, 46);
// console.log(sales[0]);

function renderAllSales(){
  for (let i = 0; i < sales.length; i++){
    sales[i].soldCookies();
    sales[i].render();
    // console.log('render');
    // console.log(sales[i].totalCookiesSold);
  }
}
renderAllSales();
footer();

// create event handler for form
let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

// this method handles submit
let newStore = {};
function handleSubmit(event){
  event.preventDefault();

  let city = event.target.city.value;
  let minCustomer = +event.target.minCust.value;
  let maxCustomer = +event.target.maxCust.value;
  let averageCookie = +event.target.avgCookie.value;

  test(city, minCustomer, maxCustomer, averageCookie);

  console.log(sales);
}
// sales.push(newStore);
// console.log(sales);

function test(city, minCustomer, maxCustomer, averageCookie){
  for(let i = 0; i < sales.length; i++){
    if (sales[i].location.toLowerCase() === city.toLowerCase()){
      console.log('hello');
      alert('City location taken.');
      form.reset();
      return;
    } 
  }
    tableElem.deleteRow(-1);
    newStore = new Citysales(city, minCustomer, maxCustomer, averageCookie);
    newStore.soldCookies();
    console.log(newStore.hourlyCookieSold);
    newStore.render();
    footer();
    form.reset();
};
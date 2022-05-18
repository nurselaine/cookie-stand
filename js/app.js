/*
Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called
 with the ‘new’ keyword, it creates a new instance.

 Replace the lists of your data for each store and build a single table of data instead. 
 It should look similar to the following:

 Each cookie stand location should have a separate render() method that creates and appends its row to the table

 The header row and footer row are each created in their own stand-alone function
  NOTE: Please use a header cell for both the header row ( containing store hours ), and the 
  footer row ( hourly and grand totals across all stores ).
*/

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
    this.hourlyCookieSold.push(Math.round(numberOfCustomer * this.avgCookie));
    // console.log(this.hourlyCookieSold);
    this.totalCookiesSold += this.hourlyCookieSold[i];
  }
}

// create stand alone function for header and foot row for table
function thead(){
  
  let trElem1 = document.createElement('tr'); // header row 
  tableElem.appendChild(trElem1);
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

// Add stretch goal for last footer row
function footer(){
  let tfoot = document.createElement('tfoot');
  tableElem.appendChild(tfoot);
  let trFoot = document.createElement('tr');
  tfoot.appendChild(trFoot);
  let tdFoot = document.createElement('td');
  tdFoot.textContent = 'Totals';
  trFoot.appendChild(tdFoot);
  let hourlySales = 0;
  let totalStoreSales = 0;
  let hourlySalesArray = [];
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
  // console.log(hourlySalesArray);
  // add array of hourly sales to td elements
  for (let n = 0; n < hourlySalesArray.length; n++){
    tdFoot = document.createElement('td');
    tdFoot.textContent = hourlySalesArray[n];
    trFoot.appendChild(tdFoot);
  }
  tdFoot.textContent = totalStoreSales;
  trFoot.appendChild(tdFoot);

} 

// find hourly cookies sold 
function totalHourlySales(){
  // use sales array to access city objects
  // each city object stores hourly cookie array 
  // use the array from each city to find the hourly sum off all the cities 
  // store sums in an array 
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
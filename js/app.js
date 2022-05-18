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
Citysales.prototype.renderSeattle = function(){

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

Citysales.prototype.renderTokyo = function(){

  let trElem3 = document.createElement('tr'); // 2nd row for Tokyo sales
  tableElem.appendChild(trElem3);
  let tdElemTokyo = document.createElement('td');
  tdElemTokyo.textContent = this.location;
  trElem3.appendChild(tdElemTokyo);

  for(let j = 0; j < this.hourlyCookieSold.length; j++){ // td for hourly sales
    tdElemTokyo = document.createElement('td');
    tdElemTokyo.textContent = this.hourlyCookieSold[j];
    trElem3.appendChild(tdElemTokyo);
  }
  tdElemTokyo.textContent = this.totalCookiesSold;
    trElem3.appendChild(tdElemTokyo);
}

Citysales.prototype.renderDubai = function(){

  let trElem4 = document.createElement('tr'); // 2nd row for Dubai sales
  tableElem.appendChild(trElem4);
  let tdElemDubai = document.createElement('td');
  tdElemDubai.textContent = this.location;
  trElem4.appendChild(tdElemDubai);

  for(let j = 0; j < this.hourlyCookieSold.length; j++){ // td for hourly sales
    tdElemDubai = document.createElement('td');
    tdElemDubai.textContent = this.hourlyCookieSold[j];
    trElem4.appendChild(tdElemDubai);
  }
  tdElemDubai.textContent = this.totalCookiesSold;
  trElem4.appendChild(tdElemDubai);
}

Citysales.prototype.renderParis = function(){

  let trElem5 = document.createElement('tr'); // 2nd row for Dubai sales
  tableElem.appendChild(trElem5);
  let tdElemParis = document.createElement('td');
  tdElemParis.textContent = this.location;
  trElem5.appendChild(tdElemParis);

  for(let j = 0; j < this.hourlyCookieSold.length; j++){ // td for hourly sales
    tdElemParis = document.createElement('td');
    tdElemParis.textContent = this.hourlyCookieSold[j];
    trElem5.appendChild(tdElemParis);
  }
  tdElemParis.textContent = this.totalCookiesSold;
  trElem5.appendChild(tdElemParis);
}

Citysales.prototype.renderLima = function(){

  let trElem6 = document.createElement('tr'); // 2nd row for Dubai sales
  tableElem.appendChild(trElem6);
  let tdElemLima = document.createElement('td');
  tdElemLima.textContent = this.location;
  trElem6.appendChild(tdElemLima);

  for(let j = 0; j < this.hourlyCookieSold.length; j++){ // td for hourly sales
    tdElemLima = document.createElement('td');
    tdElemLima.textContent = this.hourlyCookieSold[j];
    trElem6.appendChild(tdElemLima);
  }
  tdElemLima.textContent = this.totalCookiesSold;
  trElem6.appendChild(tdElemLima);
}

// Add stretch goal for last footer row
function footer(){
  let trElem7 = document.createElement('tr');
  tableElem.appendChild(trElem7);
  let tdElemFooter = document.createElement('tfoot');
  tdElemFooter.textContent = 'Totals';
  trElem7.appendChild(tdElemFooter);

  // get daily totals of all store cookie sales per hour
  for (let i = 0; i < sales.length; i++){
  }
} 
footer();


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
    // console.log('render');
    console.log(sales[i].totalCookiesSold);
  }
}
renderAllSales();
// is there a better way to do this?
sales[0].renderSeattle();
sales[1].renderTokyo();
sales[2].renderDubai();
sales[3].renderParis();
sales[4].renderLima();
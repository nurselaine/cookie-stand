/*
Stores the min/max hourly customers, and the average cookies per customer, in object properties
Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array… perhaps as a property of the object representing that location
Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals; your output for each location should look like this:
*/

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let salePage = document.getElementById('sales-page');

// method that takes in min and max and generates random number of customers
function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create an object for Seattle 
let seattle = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  hourlyCookieSold: [],
  totalCookiesSold: 0,

  // create method to generate random number of cookies and return values in an array
  soldCookies: function(){
    for (let i = 0; i < storeHours.length; i++){
      let numberOfCustomer = randomCustomer(this.minCustomer, this.maxCustomer);
      this.hourlyCookieSold.push(Math.round(numberOfCustomer * this.avgCookie));
      console.log(this.hourlyCookieSold);
      this.totalCookiesSold += this.hourlyCookieSold[i];
    }
  },

  // Render to browser method
  render: function(){
    let articleElem = document.createElement('article'); // create element from DOM
    salePage.appendChild(articleElem); // add to DOM 

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = `${this.location}`;
    articleElem.appendChild(h1Elem);

    // add ul and li elements
    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.hourlyCookieSold.length; i++){
      let liElem = document.createElement('li');
      // let liString = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`
      liElem.textContent = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
    ulElem.appendChild(liElem);
  
  }

};
// console.log(randomCustomer(1,10));
// console.log(seattle.soldCookies());
// console.log('hourlyCookieSold: ' + seattle.hourlyCookieSold);
seattle.soldCookies();
// seattle.getTotalCookies();
console.log("total cookies " + seattle.totalCookiesSold);
seattle.render();

// create object for Tokyo	min 3	max 24	avg 1.2
let tokyo = {
  location: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  hourlyCookieSold: [],
  totalCookiesSold: 0,

  // create method to generate random number of cookies and return values in an array
  soldCookies: function(){
    for (let i = 0; i < storeHours.length; i++){
      let numberOfCustomer = randomCustomer(this.minCustomer, this.maxCustomer);
      this.hourlyCookieSold.push(Math.round(numberOfCustomer * this.avgCookie));
      console.log(this.hourlyCookieSold);
      this.totalCookiesSold += this.hourlyCookieSold[i];
    }
  },

  // Render to browser method
  render: function(){
    let articleElem = document.createElement('article'); // create element from DOM
    salePage.appendChild(articleElem); // add to DOM 

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = `${this.location}`;
    articleElem.appendChild(h1Elem);

    // add ul and li elements
    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.hourlyCookieSold.length; i++){
      let liElem = document.createElement('li');
      // let liString = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`
      liElem.textContent = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
    ulElem.appendChild(liElem);
  
  }

};
tokyo.soldCookies();
tokyo.render();

// create list for Dubai	min 11	max 38	avg 3.7
let dubai = {
  location: 'Dubai',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  hourlyCookieSold: [],
  totalCookiesSold: 0,

  // create method to generate random number of cookies and return values in an array
  soldCookies: function(){
    for (let i = 0; i < storeHours.length; i++){
      let numberOfCustomer = randomCustomer(this.minCustomer, this.maxCustomer);
      this.hourlyCookieSold.push(Math.round(numberOfCustomer * this.avgCookie));
      console.log(this.hourlyCookieSold);
      this.totalCookiesSold += this.hourlyCookieSold[i];
    }
  },

  // Render to browser method
  render: function(){
    let articleElem = document.createElement('article'); // create element from DOM
    salePage.appendChild(articleElem); // add to DOM 

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = `${this.location}`;
    articleElem.appendChild(h1Elem);

    // add ul and li elements
    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.hourlyCookieSold.length; i++){
      let liElem = document.createElement('li');
      // let liString = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`
      liElem.textContent = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
    ulElem.appendChild(liElem);
  
  }

};
dubai.soldCookies();
dubai.render();

// add sales for Paris	min 20	max 38	avg 2.3
let paris = {
  location: 'Paris',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  hourlyCookieSold: [],
  totalCookiesSold: 0,

  // create method to generate random number of cookies and return values in an array
  soldCookies: function(){
    for (let i = 0; i < storeHours.length; i++){
      let numberOfCustomer = randomCustomer(this.minCustomer, this.maxCustomer);
      this.hourlyCookieSold.push(Math.round(numberOfCustomer * this.avgCookie));
      console.log(this.hourlyCookieSold);
      this.totalCookiesSold += this.hourlyCookieSold[i];
    }
  },

  // Render to browser method
  render: function(){
    let articleElem = document.createElement('article'); // create element from DOM
    salePage.appendChild(articleElem); // add to DOM 

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = `${this.location}`;
    articleElem.appendChild(h1Elem);

    // add ul and li elements
    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.hourlyCookieSold.length; i++){
      let liElem = document.createElement('li');
      // let liString = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`
      liElem.textContent = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
    ulElem.appendChild(liElem);
  
  }

};
paris.soldCookies();
paris.render();

// Add city of Lima min 2	max 16	avg 4.6 sales 
let lima = {
  location: 'Lima',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  hourlyCookieSold: [],
  totalCookiesSold: 0,

  // create method to generate random number of cookies and return values in an array
  soldCookies: function(){
    for (let i = 0; i < storeHours.length; i++){
      let numberOfCustomer = randomCustomer(this.minCustomer, this.maxCustomer);
      this.hourlyCookieSold.push(Math.round(numberOfCustomer * this.avgCookie));
      console.log(this.hourlyCookieSold);
      this.totalCookiesSold += this.hourlyCookieSold[i];
    }
  },

  // Render to browser method
  render: function(){
    let articleElem = document.createElement('article'); // create element from DOM
    salePage.appendChild(articleElem); // add to DOM 

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = `${this.location}`;
    articleElem.appendChild(h1Elem);

    // add ul and li elements
    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);
    for (let i = 0; i < this.hourlyCookieSold.length; i++){
      let liElem = document.createElement('li');
      // let liString = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`
      liElem.textContent = `${storeHours[i]}: ${this.hourlyCookieSold[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookiesSold}`;
    ulElem.appendChild(liElem);
  
  }

};
lima.soldCookies();
lima.render();
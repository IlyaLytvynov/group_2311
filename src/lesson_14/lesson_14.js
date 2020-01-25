import './lesson_14.scss';
import { trafficLighter } from '../common/traffic-lighter/traffic-lighter';
import { commentForm } from './comment-form';
import { garland } from './garland';

garland(500);
commentForm();

function User(name) {
  this.name = name;
  this.hello = 'world';
}

User.prototype.greet = function() {
  console.log(this.name);
};

// const user1 = new User('Ilya');
// const user2 = new User('John');
// console.log(user1);
// console.log(user2);
// user1.greet();
// user2.greet();

// test.greet();
// function greeting() {
//   console.log(this);
//   console.log('hello ' + this.name);
//   this.test = 'Data from function!!';
// }
// const user = {
//   name: 'Ilya',
//   greet: greeting
// };

// const user2 = {
//   name: 'John',
//   greet: greeting
// };

// user.greet();
// user2.greet();

// trafficLighter();
// const template = `
//   <article class="hello">
//     <h1 class="header">${prompt('Header')}</h1>
//     <p class="test">${prompt('content')}</p>
//   </article>
// `;
// const header = document.createElement('h1');
// const article = document.createElement('article');
// const p = document.createElement('p');

// const body = document.querySelector('body');
// body.innerHTML = template;

// body.appendChild(article);

// console.log(header);

import './lesson_16.scss';
import { Feed } from '../common/feed/feed';
const body = document.querySelector('body');
const feed = new Feed(body);
feed.init();

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/movies');
xhr.send();

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    const data = JSON.parse(xhr.response);
    console.log(data);
  }
};

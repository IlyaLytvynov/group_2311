import './lesson_17.scss';
import { SlideShow } from './slideshow';
import { SlideShowNew } from './slideshowClasses';
import { Feed } from '../common/feed/feed';
const mySlideShow = new SlideShow(
  document.querySelector('.here-will-be-slider')
);
mySlideShow.init();
window.mySlideShow = mySlideShow;
const mySlideShow2 = new SlideShowNew(document.querySelector('#test'));
mySlideShow2.init();
window.mySlideShow2 = mySlideShow2;

const newsFeed = new Feed(document.querySelector('.feed-container'));
newsFeed.init();

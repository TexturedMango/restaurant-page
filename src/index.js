import _ from 'lodash';
import './style.css';
import Icon from './pancakes.jpg';


function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['fucking', 'images bro'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
  
    return element;
}
  
document.body.appendChild(component());
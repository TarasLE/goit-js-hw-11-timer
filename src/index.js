// import { days } from './constData';
// import { hours } from './constData';
// import { mins } from './constData';
// import { secs } from './constData';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});



const time = targetDate - Date.now();
 const days = Math.floor(time / (1000 * 60 * 60 * 24));
 const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
 const secs = Math.floor((time % (1000 * 60)) / 1000);
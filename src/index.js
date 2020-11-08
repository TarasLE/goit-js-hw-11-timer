import './styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;


        this.refs = {
        dispDays: document.querySelector(`${this.selector} [data-value="days"]`),
        dispHours: document.querySelector(`${this.selector} [data-value="hours"]`),
        dispMins: document.querySelector(`${this.selector} [data-value="mins"]`),
        dispSecs: document.querySelector(`${this.selector} [data-value="secs"]`),
      }
    }
    
    

      startTimer() {
          setInterval(() => {
                const currentTime = Date.now();
                const time = this.targetDate - currentTime;
                const {days, hours, mins, secs} = getTimeComponents(time)
            //   console.log(`${ days }days ${ hours }:${ mins }:${secs}`);
              this.updateTimerFace(getTimeComponents(time));
           
            },1000)
    }
    updateTimerFace({ days, hours, mins, secs }) {
        this.refs.dispDays.innerHTML = days;
        this.refs.dispHours.innerHTML = hours;
        this.refs.dispMins.innerHTML = mins;
        this.refs.dispSecs.innerHTML = secs;
    }
}
 

function getTimeComponents(time){
 const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
 const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
 const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
 const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return{days, hours, mins, secs}
}
    
function pad(value) {
    return String(value).padStart(2, '0');
    
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 25, 2020'),
});


timer.startTimer();
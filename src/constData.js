
 const days = Math.floor(time / (1000 * 60 * 60 * 24));
 const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
 const secs = Math.floor((time % (1000 * 60)) / 1000);
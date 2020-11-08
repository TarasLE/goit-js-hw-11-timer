export const time = targetdate - Date.now;
export const days = Math.floor(time / (1000 * 60 * 60 * 24));
export const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
export const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
export const secs = Math.floor((time % (1000 * 60)) / 1000);
//import './style.css'

const urlParams = new URLSearchParams(window.location.search);
const print = urlParams.get('print');

if(print != null) {
  document.querySelectorAll('.no-print').forEach((e) => {
    e.style.display = 'none';
  })
  document.querySelectorAll('.top-link').forEach((e) => {
    e.style.display = 'none';
  })
  document.querySelectorAll('details').forEach((e) => {
    e.style.display = 'none';
  })
}


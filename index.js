let toggle = document.getElementById('toggle');
let flex = document.getElementById('flex');

toggle.addEventListener('change', (e) => {
   flex.classList.toggle('show-monthly');

});
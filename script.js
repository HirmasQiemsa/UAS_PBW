

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.baris .seat:not(.huruf');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.value;
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}



function updateSelectedCount() {
    const seletedSeats = document.querySelectorAll('.baris .seat.dipilih');
}
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if (selectedSeats !== null && selectedSeats.lenght > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('dipilih');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}


movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('huruf'))
    e.target.classList.toggle('dipilih');
  

  
});


'use strict';

document.getElementById('age').addEventListener('click', movieAgeRating)

function movieAgeRating () {
  const rating = document.getElementById('age').value;
  if (rating >= 17) {
    alert('You can watch R-rated movies.')
  } else if (rating >= 13) {
    alert('You can watch PG-13 rated movies.')
  } else if (rating >= 5) {
    alert('You can watch G or PG rated movies.')
  } else {
    alert('Sorry, you are too young to view most movies.')
  }
  alert('Thank you for verifying your age!')
}
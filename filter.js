const difficulty = document.getElementById('difficulty')
let difficultyVal = difficulty.value
const capacity = document.getElementById('capacity')
let capacityVal = capacity.value

window.onload = (event) => {
  showDifficulty()
}

function showDifficulty() {
  let difficultyArray = new Array()
  if (difficultyVal === '0') {
    difficultyArray.push('book-of-magic')
    difficultyArray.push('lockwood-manor')
    difficultyArray.push('underground')
    difficultyArray.push('midnight-express')
    difficultyArray.push('labyrinth')
  } else if (difficultyVal === '1') {
    difficultyArray.push('book-of-magic')
  } else if (difficultyVal === '2') {
    difficultyArray.push('lockwood-manor')
    difficultyArray.push('underground')
  } else if (difficultyVal === '3') {
    difficultyArray.push('midnight-express')
    difficultyArray.push('labyrinth')
  }
  showCapacity(difficultyArray)
}

function showCapacity(array) {
  let capacityArray = new Array()
  if (capacityVal === '0') {
    capacityArray.push('book-of-magic')
    capacityArray.push('lockwood-manor')
    capacityArray.push('underground')
    capacityArray.push('midnight-express')
    capacityArray.push('labyrinth')
  } else if (capacityVal === '1') {
    capacityArray.push('book-of-magic')
    capacityArray.push('lockwood-manor')
  } else if (capacityVal === '2') {
    capacityArray.push('book-of-magic')
    capacityArray.push('lockwood-manor')
    capacityArray.push('midnight-express')
  } else if (capacityVal === '3') {
    capacityArray.push('book-of-magic')
    capacityArray.push('lockwood-manor')
    capacityArray.push('midnight-express')
    capacityArray.push('underground')
  } else if (capacityVal === '4') {
    capacityArray.push('book-of-magic')
    capacityArray.push('lockwood-manor')
    capacityArray.push('underground')
    capacityArray.push('midnight-express')
    capacityArray.push('labyrinth')
  } else if (capacityVal === '5') {
    capacityArray.push('book-of-magic')
    capacityArray.push('underground')
    capacityArray.push('midnight-express')
    capacityArray.push('labyrinth')
  } else if (capacityVal === '6') {
    capacityArray.push('underground')
    capacityArray.push('labyrinth')
  } else if (capacityVal === '7') {
    capacityArray.push('underground')
    capacityArray.push('labyrinth')
  }

  const filteredArray = array.filter(value => capacityArray.includes(value));
  for (let i = 0; i < filteredArray.length; i++) {
    document.getElementById(filteredArray[i]).style.display = 'flex'
  }
}

function resetAll() {
  document.getElementById('book-of-magic').style.display = 'none'
  document.getElementById('lockwood-manor').style.display = 'none'
  document.getElementById('underground').style.display = 'none'
  document.getElementById('midnight-express').style.display = 'none'
  document.getElementById('labyrinth').style.display = 'none'
}


difficulty.addEventListener('change', (event) => {
  resetAll()
  difficultyVal = difficulty.value;
  showDifficulty();
})

capacity.addEventListener('change', (event) => {
  resetAll()
  capacityVal = capacity.value;
  showDifficulty();
})


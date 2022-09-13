///___/ consts /___///
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const operationBox = document.querySelector('#operation-box')
let result = document.querySelector('#result-box')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const equals =document.querySelector('#equals')
const dot = document.querySelector('#dot')
const ac = document.querySelector('#ac')
const divide = document.querySelector('#divide')
const times = document.querySelector('#times')
let operands = []
let total = 0
let operandDeclaration = 0


///___/ functions /___///

//pushing the value into the array

function starting() {
  total = 0
}
function shifting() {
  operands.unshift(operationBox.textContent)
}
function pushing() {
  operands.push(operationBox.textContent)
}

//clearing (will use it only with equals)
function clear() {
  operationBox.textContent = ''
    // operands= []
}



// adding to total
 function sum(input){
 
  total = input.reduce((sum, number) => {
    return Number(sum) + Number(number) 
  }, 0);
  operandDeclaration = 'sum'
  
}


//subtracting from total

  function subtraction(input) {
const subtract = (accumulator, number) =>  accumulator - number;

if(input) {
  total = input.reduce(subtract)
}
return total ,
operandDeclaration = 'subtraction'
  }


//total times operands
function multiplication(input) {
   total = input.reduce((sum, number) => {
     return Number(number * sum) 
    }, 1),
  operandDeclaration = 'multiplication'
  if (total === 0) {
    console.log(3)
  }
  else {
    console.log('si')
  }
}

//total divided by operand
function dividing(input) {
  const divisione = (accumulator, number) =>  accumulator /number;

  if(input) {
    total = input.reduce(divisione)
  }
  return total,
  operandDeclaration = 'dividing'
}

//equals
function equale(input) {
  operands= []
  operands.push(total)
}

//ac

function allCanceled() {
  total = 0
  operands = []
  result.textContent = ''
}



///___/ eventlisteners /___///



window.addEventListener('keydown', (event) => {
  
  if (event.key === '1' || event.key ==='2'||event.key ==='3' || event.key === '4' || event.key === '5' || event.key === '6'|| event.key === '7' || event.key === '8'|| event.key === '9'|| event.key ==='0' ) {
    operationBox.textContent += event.key
  }
})
window.addEventListener('keydown', (event) => {
if (event.key ==='Backspace') {
  allCanceled()
  clear()
  operandDeclaration = 0
}
})
window.addEventListener('keydown', (event) => {
  if ( event.key === '*' && total === 0) {
   pushing()
   multiplication(operands)
   clear()
   
  }
  else if ( event.key === '*' && total != 0) {
    multiplication(operands)
  }
  else if (event.key ==='-') {
    pushing()
    subtraction(operands)
    clear()
  }
  else if (event.key ==='+') {
    pushing()
    sum(operands)
    clear()
  }
  else if (event.key==='/' && total === 0) {
    pushing()
    dividing(operands)
    clear()
  }
  else if (event.key==='/' && total != 0) {
    dividing(operands)
  }
  else if (event.key ==='Enter') {
    pushing()
  if ( operandDeclaration === 'sum') {
    sum(operands)
  } else if ( operandDeclaration === 'subtraction') {
    subtraction(operands)
  }
  else if ( operandDeclaration === 'multiplication') {
    multiplication(operands)
  }
  else if ( operandDeclaration === 'dividing') {
    dividing(operands)
  }
  
  
  result.textContent = total
  equale(operands)
   clear()
  }
})



dot.addEventListener('click', function() {
  operationBox.textContent+= '.'
})

one.addEventListener('click', function() {
  operationBox.textContent += 1
})

two.addEventListener('click', function() {
  operationBox.textContent += 2
})

three.addEventListener('click', function() {
  operationBox.textContent += 3
})

four.addEventListener('click', function() {
  operationBox.textContent += 4
})

five.addEventListener('click', function() {
  operationBox.textContent += 5
})

six.addEventListener('click', function() {
  operationBox.textContent += 6
})

seven.addEventListener('click', function() {
  operationBox.textContent += 7
})

eight.addEventListener('click', function() {
  operationBox.textContent += 8
})

nine.addEventListener('click', function() {
  operationBox.textContent += 9
})

zero.addEventListener('click', function() {
  operationBox.textContent += 0
})


plus.addEventListener('click', function() {
  pushing()
  sum(operands)

  clear()
    console.log(total)
    console.log(operands)
})


minus.addEventListener('click', function() {
  pushing()
  subtraction(operands)
  clear()
  //  console.log(total)
  //  console.log(operands)
})





  times.addEventListener('click', function() {
   
    if (total === 0) {
      pushing()
      multiplication(operands)
      clear()
    }
    else {
      multiplication(operands)
    }
     console.log(operands)
    console.log(total)

    
  })
  divide.addEventListener('click', function() {
    if (total === 0) {
    pushing()
    dividing(operands)
    clear()}
    else {
      dividing(operands)
    }
    console.log(operands)
    console.log(total)
  })


ac.addEventListener('click', function() {
  allCanceled()
  clear()
  operandDeclaration = 0
  
 //console.log(operands)
// console.log(total)

})


  
  
  equals.addEventListener('click', function() {
  pushing()
  if ( operandDeclaration === 'sum') {
    sum(operands)
  } else if ( operandDeclaration === 'subtraction') {
    subtraction(operands)
  }
  else if ( operandDeclaration === 'multiplication') {
    multiplication(operands)
  }
  else if ( operandDeclaration === 'dividing') {
    dividing(operands)
  }
  
  
  result.textContent = total
  equale(operands)
   clear()
   console.log(operandDeclaration)
   console.log(operands)
  console.log(total)
})
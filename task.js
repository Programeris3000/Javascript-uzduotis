//Slaptazodis
let password = 'asasasasasasasas#a'


if (password.length < 16){
  console.log('Slaptazodis per trumpas')}
  else {
    console.log('Slaptazodis geras')
  }

if (password.length > 15) {

  if (password.length > 20) {
    console.log('Slaptazodis tinkamas')
  } else {
    console.log('Slaptazodis yra tinkas, taciau rekomenduociau pasikeisti i ilgesni')
  }
} else {
  console.log('Slaptazodis per trumpas')
}

if (password.includes("#")) {
  console.log("Slaptažodis turi grotažymes.");
} else {
  console.log("Slaptažodis privalo turėti grotažymes.");
}

//Amzius

let age = prompt('Įveskite savo amžių:')
age = parseFloat(age);


  if (isNaN(age)) {
    console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius")
  }
  else if(age <= 0){
    console.log('Ivestas amzius yra per mazas')
  }  else if(age < 6){
    console.log('I mokykla neina.')
  }  else if(age == 6){
    console.log('I mokykla tikriausiai neina, taciau gali buti ir pirmokas')
  } else if(age >= 7 && age < 10){
    console.log('Eina i pradine klase')
  }  else if(age == 10){
    console.log('Tikriausiai mokosi pradineje, taciau gali buti ir penktokas')
  } else if(age >= 11 && age < 14){
    console.log('Eina i pagrindine')
  }  else if(age == 14){
    console.log('Tikriausiai mokosi pagrindineje, taciau gali buti ir devintokas')
  } else if(age >= 15 && age < 18){
    console.log('Eina i gimnazija')
  }  else if(age == 18){
    console.log('Tikriausiai mokosi gimnazijoje, taciau mokykla gali buti ir baiges')
  } else if(age >= 120){
    console.log('Ivestas amzius yr per didelis')
    } else {
    console.log('Mokykla baige')
  }

//Galvosukis
// Artimiausia nuo Žemės esanti Žvaigždė?
let correctAnswer11 = 'sun'
let playerAnswer11 = 'sun'

let correctAnswer12 = 'jupiter'
let playerAnswer12 = 'jupiter'

let correctAnswer13 = 'Moon'
let playerAnswer13 = 'Moon'

if(correctAnswer11 === playerAnswer11 || correctAnswer12 === playerAnswer12){
  console.log('Patekote į kitą lygį')
}

if(correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12){
  console.log('Atsakėte į pirmą klausimą, bet nepataikėte antrajame.')
}

if(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12){
  console.log('Patekai į kitą lygi: abu atsakymai teisingi')
} else if(correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12){
  console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras teisingas.')
} else if(correctAnswer12 !== playerAnswer12 && correctAnswer11 === playerAnswer11){
  console.log('Patekai i kita lygi: Antras atsakymas buvo neteisingas, o pirmas buvo teisingas')
} else if(correctAnswer11 !== playerAnswer11 && correctAnswer12 !== playerAnswer12){
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi')
}
//Antras lygis
if(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12){
  console.log('Patekote į kitą lygį')
}

if (playerAnswer11 === correctAnswer11 && playerAnswer12 !== correctAnswer12){
    console.log(`${playerAnswer11} yra teisingas, o neteisingas atsakymas yra ${playerAnswer12}`)
}
//Trecias lygis
if (playerAnswer11 === correctAnswer11 && playerAnswer12 === correctAnswer12 && playerAnswer13 !== correctAnswer13){
  console.log(`Perejote i kita lygi, nes atsakete i du klausimus`)
}
if (playerAnswer11 === correctAnswer11 && playerAnswer12 !== correctAnswer12 && playerAnswer13 !== correctAnswer13){
  console.log(`${playerAnswer13} atsakymas yra neteisingas`)
}
if (playerAnswer11 === correctAnswer11 && playerAnswer12 !== correctAnswer12 && playerAnswer13 !== correctAnswer13){
  console.log(`${playerAnswer11} atsakymas buvo teisingas`)
}




//Pasisveikinimas
// PASISVEIKINIMAS
let isLoggedIn = true
let userName = 'Tom'
let time = 19
let isBirthday = true

if (isLoggedin = true){
console.log(`Good morning ${userName}`)
} else {
  console.log(`Good morning`)
}
  
if (time >= 5 && time <= 12){
  console.log(`Good morning ${userName}`)
  } else if(time >= 13 && time <= 18){
    console.log(`Good Afternoon`)
  } else if(time >= 19 && time <= 24){
    console.log(`Good Evening`)
  } else if(time >= 0 && time <= 4){
    console.log(`Good Evening`)
  } else {
    console.log(`Irasete neteisinga skaiciu`)
  }

if (isLoggedin == true && isBirthday == true){
  console.log(`Good morning, ${userName} and have a great birthday!`)
}









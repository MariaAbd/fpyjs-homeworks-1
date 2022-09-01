

while(true) {
    
    let numToGuess = Math.floor(Math.random() * 1000);
    console.log('Я загадал:', numToGuess);

    const numFromUser = prompt('Введите Ваше число:');
    console.log('Вы ввели:', numFromUser);

    if (isNaN(numFromUser)) {
        alert('Вы ввели не число');

    } else if (numToGuess > numFromUser) {
        alert('Загаданное число больше!');

    } else if (numToGuess < numFromUser) {
        alert('Загаданное число меньше!');

    } else if (+numToGuess == numFromUser) {
        alert('Вы угадали!');
        break
    }



}
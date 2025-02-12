let isPrime = true;
let number = 5;
for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) alert(`${number} is Prime`);
else alert(`${number} is not prime`);

const isPrime = (number) => {
    if (number < 0 || number === 1) return false;
    for (let i = 2; i * i <= number; i++)
        if (number % i === 0)
          return false; 
    return typeof number === "number";
}

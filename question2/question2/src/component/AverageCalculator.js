import React, { useState, useEffect } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  useEffect(() => {
    fetchNumbers();
  }, []);

  const fetchNumbers = async () => {
    try {
      const response = await fetch('http://thirdpartyapi.com/numbers');
      const data = await response.json();
      setNumbers(data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  const calculateAverage = () => {
    let sum = 0;
    let count = 0;
    numbers.forEach(number => {
      sum += number;
      count++;
    });
    const avg = sum / count;
    setAverage(avg);
  };

  const filterNumbers = (type) => {
    const filteredNumbers = numbers.filter(number => {
      if (type === 'p') {
        return isPrime(number);
      } else if (type === 'f') {
        return isFibonacci(number);
      } else if (type === 'e') {
        return number % 2 === 0;
      } else if (type === 'r') {
        return true; // Assuming random numbers are already included in the fetched numbers
      }
      return false;
    });
    setNumbers(filteredNumbers);
  };

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

  const isFibonacci = (num) => {
    const phi = (1 + Math.sqrt(5)) / 2;
    const a = phi * num;
    return isPerfectSquare(5 * a * a + 4) || isPerfectSquare(5 * a * a - 4);
  };

  const isPerfectSquare = (x) => {
    const s = Math.sqrt(x);
    return s * s === x;
  };

  return (
    <div>
      <h2>Numbers:</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={() => filterNumbers('p')}>Filter Primes</button>
      <button onClick={() => filterNumbers('f')}>Filter Fibonacci</button>
      <button onClick={() => filterNumbers('e')}>Filter Even</button>
      <button onClick={() => filterNumbers('r')}>Filter Random</button>
      <button onClick={calculateAverage}>Calculate Average</button>
      {average !== null && (
        <p>Average: {average}</p>
      )}
    </div>
  );
};

export default AverageCalculator;

function createPhoneNumber(numbers) {
    const res = numbers.join(''); 
    return `(${res.slice(0, 3)}) ${res.slice(3, 6)}-${res.slice(6, 10)}`;
  }
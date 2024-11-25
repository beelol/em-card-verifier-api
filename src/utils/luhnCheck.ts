export const luhnCheck = (candidate: string): boolean => {
  if (candidate.length < 2) return false;

  let sum = 0;
  let isEven = (candidate.length - 2) % 2 === 0;

  // Process all digits except the last one
  for (let i = 0; i < candidate.length - 1; i++) {
    let digit = parseInt(candidate[i]);

    if (isEven) digit = ((digit * 2 - 1) % 9) + 1;

    sum += digit;
    isEven = !isEven;
  }

  // Add the last digit
  sum += parseInt(candidate[candidate.length - 1]);

  return sum % 10 === 0;
};

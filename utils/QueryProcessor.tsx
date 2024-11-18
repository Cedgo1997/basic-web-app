export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return "1410423";
  }

  if (query.toLowerCase().includes("spiderman")) {
    return "Peter Parker";
  }

  if (query.toLowerCase().includes("el bicho")) {
    return "Cristiano Ronaldo, SIUUUU";
  }

  if (query.toLowerCase().includes("name")) {
    return "César González";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers === null || numbers.length < 2) {
      return "";
    }

    const num1 = parseInt(numbers[0], 10);
    const num2 = parseInt(numbers[1], 10);
    return `${num1 + num2}`;
  }
  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers === null || numbers.length < 2) {
      return "";
    }

    const num1 = parseInt(numbers[0], 10);
    const num2 = parseInt(numbers[1], 10);
    return `${num1 * num2}`;
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers === null || numbers.length < 2) {
      return "";
    }

    const intNumbers = numbers.map((n) => Number(n));

    return `${Math.max(...intNumbers)}`;
  }

  if (
    query.toLowerCase().includes("square") &&
    query.toLowerCase().includes("cube")
  ) {
    const numbers = query.match(/\d+/g);
    if (numbers === null || numbers.length < 2) {
      return "";
    }
    const intNumbers = numbers.map((n) => Number(n));
    return `${findSquareAndCubeNumbers(intNumbers)[0]}`;
  }
  return "";
}

function isSquareAndCube(num: number) {
  const sqrt = Math.sqrt(num);
  const isSquare = sqrt === Math.floor(sqrt);
  const cbrt = Math.cbrt(num);
  const isCube = cbrt === Math.floor(cbrt);
  return isSquare && isCube;
}

function findSquareAndCubeNumbers(numbers: number[]) {
  return numbers.filter(isSquareAndCube);
}

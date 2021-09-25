import shortid from "shortid";
import { iDrop } from "../interfaces/Drop";

export function createDrops(score = 1): Array<iDrop> {
  let drops: Array<iDrop> = [];
  for (let i = 0; i < Math.round(score / 4) + 1; i++) {
    const position: number = getRandomInt(0, 17);
    drops.push(createDrop(position));
  }
  return drops;
}

const calculateResult = (
  n1: number,
  n2: number,
  selectedOperation: string
): number => {
  switch (selectedOperation) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
  }
};

export function createDrop(element, level = 2): iDrop {
  const operations = ["+", "-"];
  const n1 = getRandomInt(0, 40);
  const n2 = getRandomInt(0, 40);
  const selectedOperation = operations[getRandomInt(0, 2)];

  const drop: iDrop = {
    id: shortid(),
    n1,
    n2,
    operation: selectedOperation,
    result: calculateResult(n1, n2, selectedOperation),
    transitionDuration: getRandomInt(10, 20),
    position: { x: element * 75, y: 0 },
  };

  return drop;
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

import { iOperation } from "../interfaces/Drop";

const operations: Array<iOperation> = [
  {
    id: "aaa",
    n1: 1,
    n2: 1,
    operation: "+",
    result: 6,
    transitionDuration: 7,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "aab",
    n1: 2,
    n2: 2,
    operation: "*",
    result: 72,
    transitionDuration: 8,
    position: {
      x: 80,
      y: 0,
    },
  },
  {
    id: "abb",
    n1: 3,
    n2: 3,
    operation: "*",
    result: 72,
    transitionDuration: 9,
    position: {
      x: 160,
      y: 0,
    },
  },
];

export default operations;

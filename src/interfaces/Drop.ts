export interface iPosition {
  x: number;
  y: number | 0;
}

export interface iOperation {
  id: string;
  n1: number;
  n2: number;
  position: iPosition;
  operation: string;
  result: number;
  transitionDuration: number;
}

import { motion } from "framer-motion";

import styled from "styled-components";
import { iOperation } from "../../interfaces/Drop";

interface DropProps {
  drop: iOperation;
  deleteOperation?: (id: string, time: number) => void;
}

const BaseDrop = styled(motion.div)`
  background-color: #0288d1;
  height: 70px;
  width: 70px;
  border-radius: 0% 50% 50% 50%;
  transform: rotate(45deg);
  box-shadow: inset -25px 10px 0px -10px #03a9f4;
  text-align: center;
  padding: 16px;
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

const Drop = ({ drop }: DropProps) => {
  const { transitionDuration, position, n1, operation, n2 } = drop;

  return (
    <BaseDrop
      animate={{
        x: [position.x, position.x],
        y: [position.y, 1000],
      }}
      transition={{ duration: transitionDuration, ease: "linear" }}
    >
      <div style={{ width: 40 }}>
        {n1} {operation} {n2}
      </div>
    </BaseDrop>
  );
};
export default Drop;

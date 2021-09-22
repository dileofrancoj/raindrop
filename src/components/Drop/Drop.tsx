import { motion } from "framer-motion";
import { useEffect } from "react";
import { iOperation } from "../../interfaces/Drop";

interface DropProps {
  drop: iOperation;
  deleteOperation: (id: string, time: number) => void;
}

const Drop = ({ drop, deleteOperation }: DropProps) => {
  const { id, transitionDuration, position, n1, operation, n2 } = drop;

  useEffect(() => {
    const timer = setTimeout(() => {
      deleteOperation(id, transitionDuration);
    }, transitionDuration * 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <motion.div
      style={{
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#fd3",
        position: "absolute",
        left: 40,
        top: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={{
        x: [position.x, position.x],
        y: [position.y, 1000],
      }}
      transition={{ duration: transitionDuration, ease: "linear" }}
    >
      <div style={{ width: 40 }}>
        {n1} {operation} {n2}
      </div>
    </motion.div>
  );
};
export default Drop;

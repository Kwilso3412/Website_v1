import React from "react";
import { styles } from "../styles";

type SpanProps = {
  letter: string;
  index: number;
  animation: string;
};

const Span: React.FC<SpanProps> = ({ letter, index, animation }) => (
  <span
    key={index}
    className={`inline-block transform-style-3d origin-bottom ${animation}`}
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    {letter === " " ? "\u00A0" : letter}
  </span>
);

const produceSpans = (text: string, animation: string): JSX.Element[] => {
  return text
    .split("")
    .map((letter, index) => (
      <Span key={index} letter={letter} index={index} animation={animation} />
    ));
};

const Position: React.FC = () => {
  return (
    <div className={styles.positionMain}>
      <div className={styles.positionContainer}>
        <div className={styles.positionText1} aria-label="Data Scientist">
          {produceSpans("Data Scientist", "animate-textRotate1")}
        </div>
        <div className={styles.positionText2} aria-label="Data Analyst">
          {produceSpans("Data Analyst", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;

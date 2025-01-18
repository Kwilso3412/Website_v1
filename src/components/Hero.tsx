import React from "react";
import Position from "./Position";
import "../index.css";
import { styles } from "../styles";

const Hero: React.FC = () => {
  return (
    <main className={styles.backgroundImage}>
      <div className={styles.coverTheScreen}>
        <section className={styles.heroSection}>
          <div className={styles.heroContentStructuring}>
            <div className={styles.heroContentWrapper}>
              <h1 className={styles.heroName}>Kai Wilson</h1>
              <Position />
            </div>
            <div className={styles.heroContentSpacer}>
              <div className={styles.heroBlurb}>
                <p className="text-left">Data Sleuth Specializing in</p>
                <p className="text-left">ML and Data Storytelling.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;

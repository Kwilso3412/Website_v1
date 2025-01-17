import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { experiences } from "../information";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
  title: string;
  company_name: string;
  date: string;
  details: string[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className={styles.rightButton}>
    <ChevronRight className={styles.chevronButtonStyle} />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button onClick={onClick} className={styles.leftButton}>
    <ChevronLeft className={styles.chevronButtonStyle} />
  </button>
);

const ExperienceCard: React.FC<Experience> = ({
  title,
  company_name,
  date,
  details,
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardContentWrapper}>
        <h3 className={styles.cardContentTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>{company_name}</p>
        <p className={styles.cardDate}>{date}</p>
        <ul className={styles.experienceList}>
          {details.map((detail, idx) => (
            <li key={idx} className={styles.experienceListWrapper}>
              <span className={styles.experienceSpan}></span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    dotsClass: styles.sliderDots,
    customPaging: () => <div className={styles.sliderDot}></div>,
  };

  return (
    <main className={styles.componentContent}>
      <section
        className={`${styles.sectionBg} ${styles.componentContainer} w-full`}
      >
        <h2 className={styles.componentText}>Experience</h2>
        <div className="relative">
          <Slider {...settings}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </Slider>
        </div>
        <div className="pt-10"></div>
      </section>
    </main>
  );
};

export const ExperienceComponent = SectionWrapper(Experience, "experience");

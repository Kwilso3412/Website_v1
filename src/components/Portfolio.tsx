import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { portfolio } from "../information";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  image: string;
  project_url: string;
  tools: string[];
}
//for adding motion if decide to implement later
interface ProjectCardProps extends Project {
  index: number;
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  project_url,
  tools,
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardWrapper}>
        <a href={project_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="project_image" className={styles.cardImage} />
        </a>
      </div>
      <div className={styles.cardContentWrapper}>
        <a href={project_url} target="_blank" rel="noopener noreferrer">
          <h3 className={styles.cardContentTitle}>{name}</h3>
        </a>
        <p className={styles.cardPara}>{description}</p>
        <div>
          {tools && (
            <ul className={styles.cardList}>
              {tools.map((tools, i) => (
                <li className={styles.cardListStyling} key={i}>
                  {tools}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
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
      <section className={`${styles.sectionBg} ${styles.componentContainer}`}>
        <h2 className={styles.componentText}>Portfolio</h2>
        <Slider {...settings}>
          {portfolio.map((project: Project, index: number) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
        <div className="pt-10">
          <h3 className="text-secondary text-xl mb-2">
            <a
              href="https://github.com/Kwilso3412"
              target="_blank "
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              Your Link Text
            </a>
            View entire GitHub
          </h3>
        </div>
      </section>
    </main>
  );
};

export const PortfolioComponent = SectionWrapper(Portfolio, "portfolio");

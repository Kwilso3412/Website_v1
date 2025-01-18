import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { medium } from "../information";

interface Article {
  title: string;
  url: string;
  date: string;
  tags: string[];
  image: string;
}
//for adding motion if decide to implement later
interface ArticleCardProps extends Article {
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

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  url,
  date,
  tags,
  image,
}) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardWrapper}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="article_image" className={styles.cardImage} />
        </a>
      </div>
      <div className={styles.cardContentWrapper}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3 className={styles.cardContentTitle}>{title}</h3>
        </a>
        <p className={styles.cardDate}>{date}</p>
        <div>
          {tags && (
            <ul className={styles.cardList}>
              {tags.map((tags, i) => (
                <li className={styles.cardListStyling} key={i}>
                  {tags}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

const Medium: React.FC = () => {
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
        <h2 className={styles.componentText}> Medium Articles </h2>
        <Slider {...settings}>
          {medium.map((article: Article, index: number) => (
            <ArticleCard key={`project-${index}`} index={index} {...article} />
          ))}
        </Slider>
        <div className="pt-10">
          <h3 className="text-secondary text-xl mb-2">
            <a
              href="https://medium.com/@wilsonkai"
              target="_blank "
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
            ></a>
            View Medium Profile
          </h3>
        </div>
      </section>
    </main>
  );
};

export const MediumComponent = SectionWrapper(Medium, "medium");

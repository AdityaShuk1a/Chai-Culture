import Image from "next/image";
import Button from "../buttons/Button";
import { HeroImages } from "@/app/data/Image";
import styles from "@/app/styles/home.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          width={5000}
          height={5000}
          alt="hero-img"
          src={HeroImages.chaiHero}
          className={styles.heroImage}
        />
        <h3>Chai</h3>
        <h1>
          Brew <br />
          the Royal <br className={styles.brMedium}/>
          Tradition
        </h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quae
          molestiae vitae culpa natus,
        </h3>
        <div className={styles.btnCover}>
          <Button text="BUY NOW" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

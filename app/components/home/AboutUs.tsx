import Image from "next/image";
import Button from "../buttons/Button";
import { AboutUsImages } from "@/app/data/Image";
import styles from "@/app/styles/home.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.imageContainer}>
        <Image
          width={2000}
          height={2000}
          alt="About Chai"
          className={styles.img1}
          src={AboutUsImages.aboutChai}
          />
        <Image
          width={2000}
          height={2000}
          alt="Restaurant"
          className={styles.img2}
          src={AboutUsImages.restraunt}
        />
      </div>
      <div className={styles.items}>
        <h2>
            ABOUT US
        </h2>
        <h1>CHAI CULTURE</h1>
        <p className={styles.mainDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis rerum</p>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo sapiente maxime vero beatae doloribus? Voluptatibus </p>
        <div className={styles.btnCover}>
            <Button text={"MORE DETAILS"}/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

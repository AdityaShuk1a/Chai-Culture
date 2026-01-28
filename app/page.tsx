import { montserrat } from "./fonts/Fonts";
import AboutUs from "./components/home/AboutUs";
import styles from "@/app/styles/home.module.css";
import HeroSection from "./components/home/HeroSection";
import FeaturedProducts from "./components/home/FeaturedProducts";

const Home = () => {
  return (
    <div className={`${montserrat.variable} ${styles.LandingPage}`}>
      <section className={styles.container}>
        <HeroSection />
      </section>
      <section className={styles.container}>
        <AboutUs />
      </section>
      <section className={styles.container}>
        <FeaturedProducts />
      </section>
    </div>
  );
};

export default Home;

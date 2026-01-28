import Button from "../buttons/Button";
import { ProductImage } from "@/app/data/Image";
import ProductCards from "../cards/ProductCards";
import styles from "@/app/styles/home.module.css";

const FeaturedProducts = () => {
  return (
    <div className={styles.featuredProducts}>
      <h1>FEATURED PRODUCTS</h1>
      <div className={styles.productDisplay}>
        <div className={styles.mobileCard}>
          <ProductCards
            title="CHAI TEA PREMIX"
            image={ProductImage.product}
            description="Premium instant chai tea premix inspired by royal Indian households"
          />
        </div>
        <div className={styles.tabletCard}>
          <ProductCards
            title="CHAI TEA PREMIX"
            image={ProductImage.product}
            description="Premium instant chai tea premix inspired by royal Indian households"
          />
        </div>
        <div className={styles.desktopCard}>
          <ProductCards
            title="CHAI TEA PREMIX"
            image={ProductImage.product}
            description="Premium instant chai tea premix inspired by royal Indian households"
          />
        </div>
      </div>
      <div className={styles.productButton}>
        <Button text="VIEW ALL"/>
      </div>
    </div>
  );
};

export default FeaturedProducts;

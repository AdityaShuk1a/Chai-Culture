import styles from "@/app/styles/home.module.css";
import Image, { StaticImageData } from "next/image";

interface ProductCardsProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const ProductCards = ({ image, title, description }: ProductCardsProps) => {
  return (
    <div className={styles.productCards}>
      <div className={styles.productImage}>
        <Image 
          src={image} 
          alt={title} 
          width={2000} 
          height={2000} 
        />
      </div>
      <div className={styles.productInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCards;

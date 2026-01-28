import Image from "next/image";
import styles from "@/app/styles/footer.module.css";
import { LogoImages, SocialImages } from "@/app/data/Image";

const Footer = () => {
  const items = ["Home", "About", "Shop"];
  const info = ["Privacy Policy", "Terms of Service", "Contact Us"];
  const socials = [
    SocialImages.instagram,
    SocialImages.telegram,
    SocialImages.twitter,
    SocialImages.youtube,
  ];

  return (
    <section className={styles.footerSection}>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerCol}>
            <Image
              alt="Logo"
              width={2000}
              height={2000}
              src={LogoImages.logo}
              className={styles.footerLogo}
            />
          </div>
          <div className={styles.footerCol}>
            <h4>Menu</h4>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Info</h4>
            <ul>
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              {socials.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  width={2000}
                  height={2000}
                  alt="social-img"
                  className={styles.socialIcon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 ChaiCulture. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

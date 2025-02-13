import { BiStar } from "react-icons/bi";
import styles from "./profile.module.scss";
import avatar from "@/assets/placeholder-img.svg";
import image1 from "@/assets/images/cabbage.jpg";
import image2 from "@/assets/images/eggs.jpg";
import image3 from "@/assets/images/chicken.jpg";
import image4 from "@/assets/images/greens.jpg";

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className="avatar">
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <span className="active" />
        </div>
        <div className={styles.personal_info}>
          <p>John Doe</p>
          <p>
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={styles.active}>Products</button>
        <button>Reviews</button>
        <button>Transactions</button>
      </div>

      <div className={styles.body}>
        {/* <p className={styles.item_price}>&#8358;2000</p> */}
        <div className={styles.item}>
          <img src={image1} alt="" />
          <div className={styles.description}>
            <h3 className={styles.item_name}>Cabbage</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src={image2} alt="" />
          <div className={styles.description}>
            <h3 className={styles.item_name}>eggs</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src={image3} alt="" />
          <div className={styles.description}>
            <h3 className={styles.item_name}>Chicken</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src={image4} alt="" />
          <div className={styles.description}>
            <h3 className={styles.item_name}>Carrots</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

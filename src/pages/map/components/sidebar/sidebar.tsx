import { CgClose } from "react-icons/cg";
import image1 from "@/assets/images/eggs.jpg";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>Eggs</h2>
          <button>
            <CgClose />
          </button>
        </div>
        <div>
          <div className={styles.active_thumbnail}>
            <img src={image1} alt="" />
          </div>
          <div className={styles.thumbnails}>
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <p>Price:</p>
          <p>N20,000</p>
        </div>
        <div>
          <p>Measured in:</p>
          <p>Crates</p>
        </div>
        <div>
          <p>Description</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
            dolorem dolorum iusto provident aliquid iure tempora quia vel
            molestias expedita itaque inventore, consectetur pariatur. Quae
            mollitia qui recusandae ea!
          </p>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button>Buy now</button>

          <div>
            <p>Rating:</p>
            <p>5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

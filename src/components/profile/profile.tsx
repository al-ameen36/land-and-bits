import styles from "./profile.module.scss";
import avatar from "@/assets/placeholder-img.svg";
import { useDispatch } from "react-redux";
import { Product } from "../../types/products";
import {
  selectCurrentFarmer,
  setFarmer,
  setProduct,
} from "../../store/slices/app";
import { useAppSelector } from "../../store/hooks";
import { CgClose } from "react-icons/cg";

export function Profile() {
  const dispatch = useDispatch();
  const farmer = useAppSelector(selectCurrentFarmer);
  const classes = [styles.profile, farmer ? styles.active : ""].join(" ");

  const handleProductClick = (product: Product) => {
    dispatch(setProduct(product));
  };

  const handleClose = () => {
    dispatch(setFarmer(null));
  };

  return (
    <div className={classes}>
      <div className={styles.header}>
        <button onClick={handleClose} className={styles.close_btn}>
          <CgClose />
        </button>
        <div className="avatar">
          <div className="image">
            <img src={avatar} alt="Avatar" />
          </div>
          <span className="active" />
        </div>
        <div className={styles.personal_info}>
          <p>{farmer?.name}</p>
          <p style={{ fontSize: ".9rem" }}>
            Sells {farmer?.products.length} products
          </p>
        </div>
      </div>
      {/* <div className={styles.tabs}>
        <button className={styles.active}>Products</button>
        <button>Reviews</button>
        <button>Transactions</button>
      </div> */}
      <div style={{ marginBlock: "2rem" }} /> {/* Temp */}
      <div className={styles.body}>
        {farmer?.products.map((product, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.images[0]} alt={product.name} />
            <div className={styles.description}>
              <h3 className={styles.item_name}>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

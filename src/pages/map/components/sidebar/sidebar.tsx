import { CgClose } from "react-icons/cg";
import styles from "./sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectCurrentProduct, setProduct } from "../../../../store/slices/app";
import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import Loader from "../loader/loader";

export default function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);
  const product = useAppSelector(selectCurrentProduct);
  const dispatch = useAppDispatch();
  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const classes = [styles.sidebar, product ? styles.active : ""].join(" ");

  const handleClose = () => {
    dispatch(setProduct(null));
  };

  const handleSelectImage = (index: number) => {
    setActiveImg(index);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () =>
    quantity > 1 ? setQuantity((prev) => prev - 1) : null;

  useEffect(() => {
    setActiveImg(0);
    setConfig((prev) => ({ ...prev, amount: +(product?.price || 1) * 100 }));

    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 700);

    return () => clearTimeout(timeout);
  }, [product]);

  // Payment
  const [config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: "demouser@example.com",
    amount: +(product?.price || 1) * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  });
  const initializePayment = usePaystackPayment(config);

  const onSuccess = async (ref: { reference: string }) => {
    console.log("Payment successful", ref.reference);
  };

  const onClose = (reference?: string) => {
    console.log("closed", reference);
  };

  const handleBuy = () => {
    initializePayment({ onSuccess, onClose });
  };
  // Payment

  return (
    <div className={classes}>
      {isLoading ? <Loader /> : null}
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>{product?.name}</h2>
          <button onClick={handleClose}>
            <CgClose />
          </button>
        </div>
        <div>
          <div className={styles.active_thumbnail}>
            <img src={product?.images?.[activeImg]} alt="" />
          </div>
          <div className={styles.thumbnails}>
            {product?.images.map((img, i) => (
              <button key={img + i} onClick={() => handleSelectImage(i)}>
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <h3>&#8358;{(product?.price || 0) + 500}</h3>
          <p className={styles.measure}>per {product?.measure}</p>
        </div>

        <div className={styles.rating}>
          <p>Rating:</p>
          <p>5/5</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
            dolorem dolorum iusto provident aliquid iure tempora quia vel
            molestias expedita itaque inventore, consectetur pariatur. Quae
            mollitia qui recusandae ea!
          </p>
          <div className={styles.quantity}>
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <button id={styles.buynow} onClick={handleBuy}>
            Buy now &#8358;{(product?.price || 0) + 500}
          </button>
        </div>
      </div>
    </div>
  );
}

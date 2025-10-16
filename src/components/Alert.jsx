import styles from "./Alert.module.css"
import { useEffect, useState } from "react";

function Alert({ type = "success", message, onClose, duration = 3000 }) {
  const [closing, setClosing] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setClosing(true);
        setTimeout(() => onClose(), 300);
      }, duration);
        return () => clearTimeout(timer);
      }, [onClose, duration]);
  return (
    <>
    <div className={`${styles.alert} ${styles[type]} ${closing ? styles.fadeOut : ""}`}>
     
      <p>{message}</p>
      <button onClick={onClose}>×</button>
    </div>
    </>
  )
}

export default Alert
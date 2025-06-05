import { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Feedback.module.css";
function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    comments: "",
    rating: 0,
  });
  return (
    <div>
      <form>
        <input
          type="text"
          className={styles.nameField}
          placeholder="Your Name"
        />
        <input
          type="textarea"
          className={styles.commentsField}
          placeholder="Your Comments"
        />
        <Rating length={10} value={formData.rating} />
      </form>
    </div>
  );
}

function Rating({ length, value }) {
  return <div></div>;
}

export default Feedback;

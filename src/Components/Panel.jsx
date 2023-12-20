import plus_icon from "../assets/images/icon-plus.svg";
import minus_icon from "../assets/images/icon-minus.svg";
import styles from "../Components/Panel.module.css";

function Panel({ data, isOpen, clickHandler }) {
  const { title, content, id } = data;

  return (
    <div className={styles.panel_container}>
      <div className="panel_intro">
        {" "}
        <h3 className={styles.panel_title}>{title}</h3>
        <button className={styles.panel_btn} onClick={() => clickHandler(id)}>
          {isOpen ? (
            <img src={minus_icon} alt="plus_icon" className={styles.icon} />
          ) : (
            <img src={plus_icon} alt="minus_icon" className={styles.icon} />
          )}
        </button>
      </div>
      <p className={styles.panel_content}>{isOpen ? content : ""}</p>
    </div>
  );
}

export default Panel;

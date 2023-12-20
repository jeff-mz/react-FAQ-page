import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Panel from "./Panel";
import star_icon from "../assets/images/icon-star.svg";
import data from "../assets/Data.json";

function Accordion() {
  const [openPanelId, setOpenPanelId] = useState(null);
  const toggleAccordion = (id) => {
    setOpenPanelId((prevOpenPanelId) => (prevOpenPanelId === id ? null : id));
  };

  return (
    <main className={styles.container}>
      {/* <div className={styles.header}> </div> */}
      <div className={styles.accordion}>
        <div className={styles.accordion_intro}>
          <img
            src={star_icon}
            alt="Icon Star"
            className={styles.accordion_star}
          />
          <h1 className={styles.accordion_title}>FAQs</h1>
        </div>
        <div className={styles.panel}>
          {data.map((panelData) => (
            <Panel
              key={panelData.id}
              data={panelData}
              isOpen={openPanelId === panelData.id}
              clickHandler={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Accordion;

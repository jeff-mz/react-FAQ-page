import plus_icon from "../assets/images/icon-plus.svg";
import minus_icon from "../assets/images/icon-minus.svg";

function Panel({ data, isOpen, clickHandler }) {
  const { title, content, id } = data;

  return (
    <div className="panel_container">
      <h3 className="panel_title">{title}</h3>
      <p className="panel_content">{isOpen ? content : ""}</p>
      <button className="panel_btn" onClick={() => clickHandler(id)}>
        {isOpen ? (
          <img src={minus_icon} alt="plus_icon" className="icon" />
        ) : (
          <img src={plus_icon} alt="minus_icon" className="icon" />
        )}
      </button>
    </div>
  );
}

export default Panel;

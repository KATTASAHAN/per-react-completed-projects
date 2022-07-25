import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Successful from "./Successful";

function Todos(props) {
  const [model, setModel] = useState(false);
  const [bdrop, setBdrop] = useState(false);
  const [success, setSuccess] = useState(false);
  const deleteHandler = () => {
    setModel(true);
    setBdrop(true);
  };
  const cancelBtn = () => {
    setModel(false);
    setBdrop(false);
  };
  const confirmBtn = () => {
    setModel(false);
    setSuccess(true);
    setBdrop(true);
  };
  const closeBackdrop = () => {
    setBdrop(false);
    setModel(false);
    setSuccess(false);
  }

  
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        {bdrop && <Backdrop onBackdrop={closeBackdrop} />}
        {model && <Modal onCancel={cancelBtn} onConfirm={confirmBtn} />}
        {success && <Successful />}
      </div>
    </div>
  );
}

export default Todos;

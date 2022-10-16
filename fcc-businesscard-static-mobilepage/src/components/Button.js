import React from "react";
import mail from "../assets/MailIcon.svg";
import but from "./Button.module.css";

export default function Button() {
  return (
    <div className={but.btnpos}>
      <a href="mailto:kattasahan2234@gmail.com" className={but.btn}>
        <img src={mail} alt="M" className={but.mailimg} />
        Email
      </a>
    </div>
  );
}

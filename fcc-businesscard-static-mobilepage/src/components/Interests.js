import React from "react";
import abo from "./About.module.css";

export default function Interests() {
  return (
    <div>
      <div className={abo.subhead}>Interests</div>
      <div className={abo.txt}>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </div>
    </div>
  );
}

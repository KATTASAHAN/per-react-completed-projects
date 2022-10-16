import React from "react";
import abo from './About.module.css'

export default function About() {
  return (
    <div>
      <div className={abo.subhead}>About</div>
      <div className={abo.txt}>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </div>
    </div>
  );
}

import "./App.css";
import Name from "./components/Name.js";
import Role from "./components/Role";
import Website from "./components/Website";
import Button from "./components/Button";
import About from "./components/About";
import Interests from "./components/Interests";
import Photo from "./components/Photo";
import Btnlink from "./components/Btnlink";
import tw from "./assets/TwitterIcon.svg";
import fb from "./assets/FacebookIcon.svg";
import ins from "./assets/InstagramIcon.svg";
import li from "./assets/LinkedinIcon.svg";
import gh from "./assets/GitHubIcon.svg";

function App() {
  const tlink = 'https://twitter.com/katta_sahan';
  const flink = 'https://www.facebook.com/KattaSahan/';
  const ilink = 'https://www.instagram.com/kattasahan/';
  const llink = 'https://www.linkedin.com/in/sahan-katta-b14534179/';
  const glink = 'https://github.com/KATTASAHAN';
  return (
    <div>
      <div className="outer-container">
        <Photo />
        <div className="inner-container">
          <Name />
          <Role />
          <Website />
          <Button />
          <div className="about-interest-container">
            <About />
            <Interests />
          </div>
        </div>
        <div className="bottom-container">
          <Btnlink pic={tw} plink={tlink} />
          <Btnlink pic={fb} plink={flink} />
          <Btnlink pic={ins} plink={ilink} />
          <Btnlink pic={li} plink={llink} />
          <Btnlink pic={gh} plink={glink} />
        </div>
      </div>
    </div>
  );
}

export default App;

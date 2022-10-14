import body from "./Body.module.css";

export default function Body() {
  return (
    <body className={body.bod}>
      <h1 className={body.f900B}>
        Fun facts about React
      </h1>
      <ul className={body.f900B}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </body>
  );
}

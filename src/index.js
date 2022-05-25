import Typewriter from "typewriter-effect/dist/core";
import "./assets/css/main.css";
import "./assets/css/themes.dark.css";

new Typewriter("#typewriter", {
  strings: ["Planing", "Developing", "Deployment"],
  autoStart: true,
  loop: false,
});
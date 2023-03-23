//The icons used in the section of projects//
import figma from "../assets/svg/figma.svg";
import adobeXD from "../assets/svg/adobeXD.svg";
import sketch from "../assets/svg/sketch.svg";
import iN from "../assets/svg/in.svg"
import fire from "../assets/svg/fire.svg"

//Names of the icons used in different projects//
const tools = [
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Adobe XD",
    image: adobeXD,
  },
  {
    name: "Sketch",
    image: sketch,
  },
  {
    name: "Invision",
    image: iN,
  },
  {
    name: "Hotjar",
    image: fire,
  },
];

//Tools.map is reading every item of the list above//
export default function Tools({ customClass }) {
  return (
    <div className={`tools ${customClass || ''}`}>
      <p>Tools used:</p>
      <ul>
        {tools.map((tool, index) => (
          <li key={index} className="tools_item">
            <img src={tool.image} alt={tool.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

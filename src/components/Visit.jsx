import { useEffect, useRef } from "react";
// Icons situaded in contact container //
import linkedin from "../assets/svg/linkedin.svg";
import dribble from "../assets/svg/dribble.svg";
import behance from "../assets/svg/behance.svg";

const styles = {
  position: 'absolute',
  top: 150,
  right: 24,
}

export default function Visit({ fixed }) {
//Here this comoonent have to versions, if the component fixed it is false will show the version next to the footer, and if its true will show the version fixed on the right//
  const ref = useRef(null)
  useEffect(() => {

    if (fixed) {
      const height = document.documentElement.scrollHeight - window.innerHeight
      ref.current.style.height = `${height - 200}px`
    }
  }, [fixed])

  return (
    <div ref={ref} className={fixed ? "visitFixed" : ''} style={fixed ? styles : {}}>
      <div className={`social-media ${fixed ? 'fixed' : ''}`}>
        <p>
          Visit me:
        </p>
        <ul className="social-media__list">
          <li>
            <a href="#"><img src={linkedin} alt="Linkedin" /></a>
          </li>
          <li>
            <a href="#"><img src={dribble} alt="Dribble" /></a>
          </li>
          <li>
            <a href="#"><img src={behance} alt="Behance" /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

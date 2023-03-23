// This component was made with GSAP, this will only appear in home, hero section and my projects section //

import { useEffect } from 'react'
import gsap from "gsap";

export default function Circles({ children, balls }) {
// The use effect runs when the component is mounted //
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(".circles", {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: "none",
    })
      .to(".circles .ball", {
        duration: 3,
        scale: function (index, element) {
          const scale = element.getAttribute("data-scale")
          return scale || 1.2
        },
        repeat: -1,
        yoyo: true,
        ease: "none",
      }, 0)
// The use effect runs when the component is dismounted and you don't see any effect//
    return () => {
      tl.kill()
    }
  }, [])
// when the html returns to its place //
  return (
    <div className="gpap-circles">
      {children}
      <div className="circles">
        {balls ? balls : (
          <>
            <div data-scale="1.3" className="ball ball-yellow"></div>
            <div data-scale="1.6" className="ball ball-purple"></div>
            <div data-scale="0.7" className="ball ball-orange"></div>
          </>
        )}
      </div>
    </div>
  )
}

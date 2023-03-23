//This is the image of the arrow in grey in my design , this does not have any function, was created as a component, that has two version, one with a curve and the other one not//

import arrow from '../assets/svg/arrow.svg';
import arrow2 from '../assets/svg/arrow2.svg';

export default function Arrow({ v2, customClass }) {

  return (
    <div className={`arrow ${customClass ?? ''}`}>
      <img src={v2 ? arrow2 : arrow} alt="Arrow" />
    </div>
  )
}
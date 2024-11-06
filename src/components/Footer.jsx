import { fredData } from "../data/ProfileData"
import PlainSvgIcon from "./PlainSvg"

const Footer = function () {
  return (
    <footer>
      <div className="footer-cont">
        <p>
          <PlainSvgIcon iconName={'copyright'} assignClass={'copyright'}/>
          <span className='footer-year'>{(new Date()).getFullYear()}</span> 
          <span>{`${fredData.firstName} ${fredData.lastName}`}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
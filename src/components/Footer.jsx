import PlainSvgIcon from "./PlainSvg"

const Footer = function () {
  return (
    <footer>
      <div className="footer-cont">
        <p>
          <PlainSvgIcon iconName={'copyright'} assignClass={'copyright'}/>
          <span className='footer-year'>{(new Date()).getFullYear()}</span> 
          <span>Fred Mark Baldeviso</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
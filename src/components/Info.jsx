import "./Info.css"
import logo from "../../public/images/missile.jpg"
import email from "../../public/images/email.png"
import linkedIn from "../../public/images/linkedin.png"

function Info() {
  return (
    <div className="info">
        <img className="logo" src={logo} alt="profile" />
        <h1 className="name">Misael Bolainez</h1>
        <h2 className="title">Full Stack Developer</h2>
        <p className="email">missile720.github.io</p>
        <div className="buttons">
            <button className="emailButton"><img src={email} className="textLogo"/> Email</button>
            <button className="linkButton"><img src={linkedIn} className="textLogo"/> LinkedIn</button>
        </div>
    </div>
  )
}

export default Info
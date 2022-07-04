import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"
import * as Brands from "@fortawesome/free-brands-svg-icons"
import image from '../images/image.jpg'
import './style.css'

export default function Information() {
    return (
        <section className="information--container">
            <img src={image} />
            <h1>Beloise Huffstutler</h1>
            <h2>Full Stack Developer</h2>
            <FontAwesomeIcon icon={Icons.faHeart} beat className="heart" />
            <a href="https://beloisehuffstutler.codes" className="information--portfolioLink">beloisehuffstutler.codes</a>
            <div>
                <a href="mailto:me@beloisehuffstutler.codes" className="button email"><FontAwesomeIcon icon={Icons.faEnvelope} className="envelope" /> Email</a>
                <a href="https://linkedin.com/in/beloisehuffstutler" className="button linkedin"><FontAwesomeIcon icon={Brands.faLinkedin} className="linkedinIcon" /> LinkedIn</a>
            </div>
        </section>
    )
}
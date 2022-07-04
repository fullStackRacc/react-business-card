import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from "@fortawesome/free-brands-svg-icons"
import * as Icons from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer>
            <a target="_blank" href="https://github.com/fullStackRacc"><FontAwesomeIcon icon={Brands.faGithubSquare} className="githubIcon footerIcon" /></a>
            <a target="_blank" href="https://twitter.com/fullStackRacc"><FontAwesomeIcon icon={Brands.faTwitterSquare} className="twitterIcon footerIcon" /></a>
            <a target="_blank" href="http://raccoon.place"><FontAwesomeIcon icon={Icons.faDumpster} className="RaccoonIcon footerIcon" /></a>
        </footer>
    )
}
import React from "react"
import {
  FaTwitter,
  FaGithub,
  FaMedium,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa"

const Footer = () => (
  <div className="site-footer" id="Footer">
    <div className="main--container">
      <div>
        <h4 className="text-center">
          © {new Date().getFullYear()}, Built by{" "}
          <a
            href="https://www.iodevelopment.com"
            alt="Ismail Opatola Development"
          >
            ISMAIL OPATOLA DEVELOPMENT
          </a>
        </h4>
        <p className="text-center">Follow me on social media</p>
      </div>
      <div className="footer-social-links">
        <ul className="social-links-list">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="medium"
            >
              <FaMedium size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube"
            >
              <FaYoutube size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer

/**
 *<footer >
    © {new Date().getFullYear()}, Built by{" "}
    <a
      href="https://www.iodevelopment.com"
      alt="Ismail Opatola Development"
    >
      IoDevelopment
    </a>
  </footer>
 * 
 *   */

import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons//ai"

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/jai-aggarwal-b70601197/" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.github.com/orionleo" target="_blank">
          <AiFillGithub />
        </a>
       
      </div>
    </div>
  )
}

export default SocialMedia
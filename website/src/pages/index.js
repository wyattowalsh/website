/* Landing page for my personal website; implemented using Gatsby.js, featuring a particles.js background. */

import * as React from "react"
import "./index.module.scss"
import { Link } from "gatsby"
import Particles from "react-tsparticles"
import particlesOptions from "../data/particles/particles.json"
import Intro from "../components/intro"
// import Interests from "../components/interests"
// import Projects from "../components/projects"
// import Skills from "../components/skills"
// import Education from "../components/education"
// import Career from "../components/career"


// markup
const IndexPage = () => {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <Intro/>
    </div>
  )
}

export default IndexPage

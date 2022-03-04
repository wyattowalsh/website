/* Landing page for my personal website; implemented using Gatsby.js, featuring a particles.js background. */

import * as React from "react"
import * as styles from "./index.module.scss"
import { Link } from "gatsby"
import Particles from "react-tsparticles"
import particlesOptions from "../data/particles/particles.json"
import Intro from "../components/index/intro"
import Layout from "../components/layouts/base"

// import Interests from "../components/interests"
// import Projects from "../components/projects"
// import Skills from "../components/skills"
// import Education from "../components/education"
// import Career from "../components/career"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.App}>
        {/* <Particles options={particlesOptions} /> */}
        <Intro/>
      </div>
    </Layout>
  )
}

export default IndexPage

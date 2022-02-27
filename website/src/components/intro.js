/* Intro component for landing page of my personal website (Gatsby.js) */

import * as React from "react"
import "./intro.module.scss"
import { Link } from "gatsby"

const Intro = () => {
    return (
        <div className="intro">
            <h1 className="greeting">Hi there 👋 <br/> My name is Wyatt Walsh </h1>
        </div>
    )
}

export default Intro;
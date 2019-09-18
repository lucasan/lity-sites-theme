import React from "react"
import Seo from "../components/seo"
import { Header } from "../components/header"
import "./../assets/scss/main.scss"

export default (props) => (
  <main>
    <Seo title={ props.title } />
    <Header id={'header'} />
    { props.children }
  </main>
)
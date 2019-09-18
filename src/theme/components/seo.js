import React from "react"
import { Helmet } from "react-helmet-async"

export default (props) => (
  <Helmet>
    <title>{props.title}</title>
    <html className={"has-navbar-fixed-top"} />
  </Helmet>
)
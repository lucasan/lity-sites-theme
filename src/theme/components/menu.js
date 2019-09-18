import React from "react"
import { Link } from "gatsby"
import useSiteNavigation from "../../hooks/use-site-navigation"

export const Menu = (props) => {
  const menu = useSiteNavigation()

  let items = menu.reduce((a) => a)

  const tree = items.map((item) => {
    if (item.url.startsWith("#")) {
      return (<li key={item.object_id} id={item.object_slug} className={"navbar-item"}>
        <a href={item.url} className={"navbar-link is-arrowless"}>{item.title}</a>
      </li>)
    } else {
      return (<li key={item.object_id} id={item.object_slug} className={"navbar-item"}>
        <Link to={item.url} activeClassName="active" className={"navbar-link is-arrowless"}>{item.title}</Link>
      </li>)
    }
  })

  return (
    <ul className={props.menuClass} id={props.id}>
      {tree}
    </ul>
  )
}
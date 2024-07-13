import React, { PropsWithChildren } from "react"
import "./layout.css"

export default function Layout(props: PropsWithChildren) {
  return <div id="wrapper">{props.children}</div>
}
import Header from "./header"
import head from "next/head";
import "../sass/main.scss";

const Layout = props => (
  <div>
    <head>
      <script src={'https://kit.fontawesome.com/85b1403340.js'}></script>
    </head>
    <Header />
    {props.children}
  </div>
);

export default Layout;

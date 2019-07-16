import Header from "./header"
import "../sass/main.scss";

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;

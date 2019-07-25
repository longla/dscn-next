import Header from "./header"
import head from "next/head";
import "../sass/main.scss";

const Layout = props => (
    <>
        <head>
            <script src={'https://kit.fontawesome.com/85b1403340.js'}></script>
        </head>
        <Header />
        <div className={'app-main__container'}>
            {props.children}
        </div>

    </>
);

export default Layout;

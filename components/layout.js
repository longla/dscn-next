import Header from "./Header";

const Layout = (props)=>(
    <div>
        <Header></Header>
        {props.children}
    </div>
    );
    
    export default Layout;
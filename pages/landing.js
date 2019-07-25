import Link from "next/link";
import Header from "../components/header";
const Landing = () => (
    <>
        <head>
            <script src={'https://kit.fontawesome.com/85b1403340.js'}></script>
        </head>
        <Header />
        <section id="landing">
            <div>
                <a href="/thongdiep" className={'btn-primary-outline'}>Xem thông điệp</a>

            </div>
        </section>
    </>
);
export default Landing;
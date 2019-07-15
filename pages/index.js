import Layout from "../components/layout";
import ThongDiep from "./thong-diep";
import ChiaSe from "./chia-se";
import Landing from "./landing";

const Index = () => (
  <Layout>
    <Landing />
    <div className={"container"}>
      <ThongDiep />
      <ChiaSe />
    </div>
  </Layout>
);

export default Index;

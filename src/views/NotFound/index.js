import { Layout } from "../../components/Layout";
import Footer from "../../components/Layout/Footer";
import { Header } from "../../components/Layout/Header";

export function NotFoundView() {
    return (
        <Layout>
            <Header />
            <h1>Page not Found</h1>
            <Footer />
        </Layout>
    )
}
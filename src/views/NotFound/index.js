import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";

export function NotFoundView() {
    return (
        <Layout>
            <Container className ="text-center mt-4">
                <h1>Page not Found</h1>
                <p>The page your loking for is unavailable or was moved elsewere.</p>
                <p>Use the menu to navigate between pages.</p>
            </Container>
        </Layout>
    )
}
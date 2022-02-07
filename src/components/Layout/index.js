import { Header } from './Header';
import Footer from './Footer';

export function Layout({ children }) {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

// CREATE COMPONENTS USED WITHIN MULTIPLE SCREENS IN "COMPONENTES" FOLDER. EX: "components/Layout/Header.js"
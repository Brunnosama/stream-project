import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from './assets/img/assista-logo.png'
import Banner from './assets/img/assista-banner.png'

function Footer() {
  return (
    <footer className='text-center footer'>
      <p className='m-0'>All rights reserved to Assista™</p>
    </footer>
  )
}

function Layout ({children}) {
  
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

function Header () {
  return (
    <header>
      <Navbar expand="md" className='header-navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo Assista" height={50} width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/library">Video Library</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}


function HomeView() {
  return (
    <Layout>
      <Container>
        <div className='my-3 banner-home'>
          <img src={Banner} alt='Assista Banner' className='img-fluid' height={202} width={333} />
          <h3>
            The most complete <br /> Streaming Service out there.
          </h3>
        </div>
      </Container>
    </Layout>)
}

// function NotFoundView() {
//   return (
//     <Layout>
//       <Header />
//       <h1>Page not Found</h1>
//       <Footer />
//     </Layout>
//   )
// }

function App() {
  return (
    <HomeView />
  );
}

export default App;

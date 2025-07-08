import { Features } from "tailwindcss";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import Main from "./components/sections/Main";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";
import Reviews from "./components/sections/Reviews";
import Faetures from "./components/sections/Faetures";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import Footer from "./components/sections/Footer";
import Modal from "./components/sections/Modal/Modal";
import SignupModal from "./components/sections/Modal/SignupModal";
import { ModalContextProvider } from "./Context/ModalContext";
import { MobileMenuContextProvider } from "./Context/MobileMenuContext";
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";

const App = () => {
  return (
    <ModalContextProvider>
      <MobileMenuContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <Reviews />
          </Header>

          <Main>
            <Logos />
            <Faetures />
            <FAQs />
            <Testimonials />
          </Main>

          <Footer />

          <Modal modal="sign-up">
            <SignupModal />
          </Modal>

          <MobileMenu />
        </Page>
      </MobileMenuContextProvider>
    </ModalContextProvider>
  );
};

export default App;

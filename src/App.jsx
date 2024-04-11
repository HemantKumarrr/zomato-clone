import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";

function App() {
  return (
    <>
      <Navigation />
      <div className="main px-[1rem] sm:px-[5rem] md:px-[12rem] pt-[2.8rem] pb-8 sm:pb-0">
        <ContactHeader />
        <ContactForm />
      </div>
    </>
  );
}

export default App;

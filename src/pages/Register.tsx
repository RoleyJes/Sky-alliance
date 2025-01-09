import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EventsPage from "../components/Register/EventsPage";
import PastEvents from "../components/Register/PastEvents";

export default function Register() {
  return (
    <>
      <Navbar />

      <main>
        <EventsPage />
        <PastEvents />
      </main>

      <Footer />
    </>
  );
}

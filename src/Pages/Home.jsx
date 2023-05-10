import CallToAction from "../components/CallToAction/CallToAction";
import ContactForm from "../components/ContactForm/ContactForm";
import Flags from "../components/Flags/Flags";
import Hero from "../components/Hero/Hero";
import TeamSection from "../components/Team/Team";
import WeatherCardGeolocation from "../components/WeatherCardGeolocation/WeatherCardGeolocation";
function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Hero />
      <Flags />
      <WeatherCardGeolocation />
      <CallToAction />
      <TeamSection />
      <ContactForm />
    </>
  );
}

export default Home;

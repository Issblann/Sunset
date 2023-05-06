import CallToAction from "../components/CallToAction/CallToAction";
import ContactForm from "../components/ContactForm/ContactForm";
import Flags from "../components/Flags/Flags";
import Hero from "../components/Hero/Hero";
import TeamSection from "../components/Team/Team";
import WeatherCard from "../components/WeatherCard/WeatherCard";
function Home() {
  return (
    <>
      <Hero />
      <Flags />
      <CallToAction />
      <TeamSection />
      <ContactForm />
    </>
  );
}

export default Home;

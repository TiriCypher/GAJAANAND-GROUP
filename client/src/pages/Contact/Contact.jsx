import ContactHero from "../../components/contact/ContactHero";
import ContactCards from "../../components/contact/ContactCards";
import ContactForm from "../../components/contact/ContactForm";
import OfficeSection from "../../components/contact/OfficeSection";
import ContactCTA from "../../components/contact/ContactCTA";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <OfficeSection />
      <ContactCTA />
    </>
  );
}

export default Contact;
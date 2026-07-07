import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Advantages from "@/src/components/Advantages";
import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <ContactForm />
      <Footer />
    </>
  );
}
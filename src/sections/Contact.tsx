import SectionHeader from './../components/SectionHeader';
import ContactInfo from '../components/ContactInfo';
import Map from './../components/Map';

const Contact = () => {
  return (
    <section className="kontakt section-black">
      <SectionHeader icon="envelope">Kontakt</SectionHeader>
      <div className="data-container">
        <div className="text">
          <ul>
            <li><ContactInfo icon='envelope' link='mailto:info@mytickaAkademie.cz'>info@mytickaAkademie.cz</ContactInfo></li>
            <li><ContactInfo icon='phone' link='tel:+420133233789'>+420 133 233 789</ContactInfo></li>
            <li><ContactInfo icon='location-dot' link='https://maps.app.goo.gl/XT1Zhiqr1TFi7R9o7'>Jaselská 826, 280 90 Kolín 2</ContactInfo></li>
          </ul>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </section>
  )
}

export default Contact

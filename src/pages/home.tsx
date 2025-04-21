import Header from '../sections/Header';
import SectionHeader from '../components/SectionHeader';
import Action from '../components/Action';
import CoursePicker from '../sections/CoursePicker';
import Carousel from '../sections/Carousel';
import Review from '../components/Review'
import Banner from '../components/Banner';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="hero-main">
        <img className="hero-bg" src="/images/bg/saf_bg.png" alt="" />
        <div className="container blur-effect">
          <div className="hero-text">
            {/* <h1>Akademie mýtických postav</h1> */}
            <img className='logo' src="/images/logo_main.png" alt="" />
            <p>Místo, kde se z běžných smrtelníků stávají rytíři, čarodějové a průzkumníci... nebo alespoň něco jim podobného. Připrav se na dobrodružství, které možná nepřežiješ — ale rozhodně si ho užiješ.</p>
            <Action link="#kurzy" icon="list-tree">Nabídka kurzů</Action>
          </div>
          <video autoPlay loop muted playsInline className="hero-img">
            <source src={"/images/classes/warrior_animation_idle.webm"} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
      <section id="o-nas" className="o-nas section-black">
        <SectionHeader icon="swords">O naší akademii</SectionHeader>
        <div className="text">
          <p>Akademie mýtických postav není obyčejná škola. Je to místo, kde se střetává odvaha, magie a chaos pod jednou děravou střechou. Přijímáme všechny, kdo mají chuť stát se hrdinou — nebo aspoň nevypadnout hned při první hodině výcviku. Učíme naše studenty ovládat meč, luk, kouzla i sebe (to poslední zatím moc nejde).</p>
          <p>Každý nováček si vybere jednu ze tří cest: rytíře, průzkumníka nebo čaroděje. Ať už toužíš po lesku brnění, šípech v cíli nebo ohnivých koulích na dosah ruky, u nás najdeš své místo. Tedy... pokud tě dřív nesežere drak z učebnice magie.</p>
          <img src="/images/bg/saf_village.png" alt="" />
        </div>
      </section>
      <section id="kurzy" className="kurzy section-black">
        <SectionHeader icon="book">Kurzy</SectionHeader>
        <CoursePicker />
      </section>
      <section id="galerie" className="galerie section-white">
        <SectionHeader icon="image">Galerie</SectionHeader>
        <Carousel />
      </section>
      <section id="recenze" className="recenze section-white">
        <SectionHeader icon="star">Recenze</SectionHeader>
        <div className="text">
          <Review userPic='gandalf.webp' name='Gandalf Bílý' rating={4}>Skvělá atmosféra, výborní učitelé magie a žádné balrogové ve sklepě – což kvituji. Jednu hvězdu strhávám za to, že průzkumníci pořád běhají po chodbách.</Review>
          <Review userPic='medusa.webp' name='Medúsa' rating={2}>Nadějná instituce, ale absolutně žádná inkluze pro kamenné bytosti. Všichni na mě koukali. Doufala jsem v přátelské prostředí, ne v další galerii soch.</Review>
          <Review userPic='zeus.webp' name='Zeus' rating={4.5}>Kurzy magie slušné, i když jsem musel dodělat pár úkolů za Poseidona. Přednášky o bouřích mě trochu nudily – kdo by to byl řekl. Jinak fajn, doporučuju mladým polobohům.</Review>
          <Review userPic='smak.png' name='Drak Šmak' rating={4}>Knihovna pěkná, ale neměli ani jednu knihu o tom, jak správně hromadit poklady. Navíc se mě pořád někdo snažil ochočit. Čtyři hvězdy dávám hlavně za vybavení alchymistické laboratoře – velmi výbušná.</Review>
          <Review userPic='artus.png' name='Král Artuš' rating={5}>Výuka skvělá, hlavně taktika a kouzlení. Jediný zápor – meč v kameni je tu už vytažený. Takže jsem si místo toho zapsal kurz “Diplomacie s draky” a překvapivě to nebylo úplně zlé.</Review>
        </div>
      </section>
      <section className="banner-section section-black">
        <img className="banner-bg" src="/images/bg/saf_bg2.png" alt="" />
        <Banner 
          action={<Action link="#kurzy">Začít dobrodružství</Action>}
        >
          Staň se tím, o kom se budou zpívat písně… nebo alespoň vtipy v hospodě. Akademie čeká na další odvážné duše.
        </Banner>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
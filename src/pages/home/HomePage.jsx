import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import './HomePage.css'
import { AppoinmentSlider } from '../../components/Home/AppoinmentSlider'
import { ArticleCard } from '../../components/Home/ArticleCard'
import { ConsultCard } from '../../components/Home/ConsultCard'
import { FacilityCard } from '../../components/Home/FacilityCard'
import { FindDoctorSearch } from '../../components/Home/FindDoctorSearch'

export const HomePage = () => {

    return <div className="homepage-container">
        <div className="home-search-area">
            <FindDoctorSearch />
        </div>
    
        <section className="home-banner">
            <div className="home-banner-left">
                <div className="home-banner-practo-care w-32 text-white font-bold text-6xl">
                    <h1>DoctorPe</h1>
                </div>
                <p>Choose the experts in end to end surgical care.</p>
                <p>You are in safe hands</p>
                <Button className="btn-knowmore text-white border rounded-2xl hover:underline">Know more</Button>
            </div>
            <div className="home-banner-right">
                <img src={'../../images/home_banner.webp'} alt="banner" />
            </div>
        </section>
        <section className="home-facilities">
            <FacilityCard image={'../../images/instant_video_consulation.webp'} background="#AFCFED" title="Instant Video Consultation" sub="Connect within 60 secs" />
            <FacilityCard image={'../../images/find_doctors.webp'} background="#98CBD6" title="Find Doctors Near You" sub="Confirmed appoinments" />
            <FacilityCard image={'../../images/home_medicines.webp'} background="#ccd0db" title="Medicines" sub="Essentials at your doorstep" />
            <FacilityCard image={'../../images/lab_tests.png'} background="#afcfed" title="Lab Tests" sub="Sample pickup at your home" />
            <FacilityCard image={'../../images/home_surgeries.webp'} background="#d5d8fc" title="Surgeries" sub="Safe and trusted surgery centers" />
        </section>
        <section className="home-consult">
            <h2>Consult top doctors online for any health concern</h2>
            <p>Private online consultations with verified doctors in all spedialties</p>
            <div className="home-consult-card-container">
                <ConsultCard title="Period doubts or Pregnancy" image={'../../images/home_irregular_painful_period.webp'} />
                <ConsultCard title="Acne, pimple or skin issues" image={'../../images/home_acne.webp'} />
                <ConsultCard title="Performance issues in bed" image={'../../images/home_performance_issues.svg'} />
                <ConsultCard title="Cold, cough or fever" image={'../../images/home_coughing.webp'} />
                <ConsultCard title="Child not feeling well" image={'../../images/home_pediatric.svg'} />
                <ConsultCard title="Depression or anxiety" image={'../../images/home-mental-wellness.webp'} />

            </div>
        </section>
        <section className="home-appoinments">
            <h2>Book an appointment for an in-clinic consultation</h2>
            <h3>Find experienced doctors across all specialties</h3>
            <AppoinmentSlider />
        </section>
        <section className="home-top-articles">
            <div className="home-top-articles-info">
                <h2>Read top articles from health experts</h2>
                <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                <button className="button button-primary">See all articles</button>
            </div>
            <ArticleCard image="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" category="coronavirus" title="12 Coronavirus Myths and Facts That You Should Be Aware Of" sub="Dr. Diana Borgio" />
            <ArticleCard image="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" category="Vitamins and supplements" title="Eating Right to Build Immunity Against Cold and Viral Infections" sub="Dr. Diana Borgio" />
        </section>
        
        <section className="home-practo-app">
            <div className="home-practo-app-background"></div>
            <div className="home-practo-app-content">
                <div className="home-practo-app-image-container">
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="practo-app" />
                </div>
                <div className="home-practo-app-info-container">
                    <h2>Download the DoctorPe app</h2>
                    <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                    <p>Get the link to download the app</p>
                    <div className="home-practo-app-input">
                        <InputGroup className="home-practo-app-inputGroup" size="lg">
                            <InputLeftAddon children="+91" style={{ fontSize: "14px", fontWeight: 500, backgroundColor: "transparent" }} />
                            <Input className="ml-2" type="tel" placeholder="Enter your phone number" style={{ fontSize: "14px" }} />
                        </InputGroup>
                        <button className="button button-primary">Send SMS</button>
                    </div>
                    <div className="home-store-buttons-container">
                        <button className="button button-store"><img src={'../../images/home-google-play.svg'} alt="google-play" />Google Play</button>
                        <button className="button button-store"><img src={'../../images/home-apple-logo.svg'} alt="apple-store" />Apple Store</button>
                    </div>
                </div>
            </div>

        </section>
    </div>
}
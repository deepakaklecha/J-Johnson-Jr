import "./App.css";
import Header from "./Components/Header";
import MBox from "./Components/MBox.jsx";
import training from "./images/weekly-training.png";
import meals from "./images/weekly-meals.png";
import quote from "./images/daily-quote.png";
import workout from "./images/workout-plan.png";
import moon from "./images/moon.png";
import dream from "./images/dream.png";
import nike from "./images/nike.jpg";
import SBox from "./Components/SBox";
import FormBox from "./Components/FormBox";
import RequestBox from "./Components/RequestBox";
import Footer from "./Components/Footer";
import ExpandBox from "./Components/ExpandBox";
import MusicBox from "./Components/MusicBox";
import ModalPopup from "./Components/ModalPopup";

function App() {
  return (
    <>
      <div id="app">
        <div className="app-content">
          <div id="appContentMain" className="app-content-main">
            <Header />
            <MBox
              img={training}
              heading="Weekly Training"
              para="Get the inside view of what I did for training every week! FULL BREAKDOWN"
            />
            <MBox
              img={meals}
              heading="Weekly Meals"
              para="Each week I will document what I eat in an organised fashion"
            />
            <MBox
              img={quote}
              heading="Daily Quote!"
              para="A quote that will empower you to achieve your dreams!"
            />
            <br />
            <MBox
              img={workout}
              heading=""
              para=""
              btn={
                <>
                  Buy for $4.99 &nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </>
              }
            />
            <SBox
              icon1={
                <>
                  <i className="fa-brands fa-youtube"></i>
                </>
              }
              link="https://www.youtube.com/playlist?list=PLM2ccN457sxRuVSqTHINmtkkwiJq1txwW"
              heading="Speed Training Playlist"
              para="Get faster for any sport with these speed tips"
            />
            <ExpandBox
              heading="Workout Vlog With Batman!"
              src="https://www.youtube.com/embed/fJGDnvoLKFA?mute=0&amp;autoplay=0"
            />
            <FormBox />
            <ExpandBox
              heading="Racing people for $$$"
              src="https://www.youtube.com/embed/RGj5K54dd58"
            />
            <div className="business">
              <br />
              <h5 style={{ color: "white", textAlign: "center" }}>Business</h5>
            </div>
            <SBox
              link="https://jjjbrand.com/"
              heading="Speed Socks ⚡️"
              para="Socks created for speed by speed"
            />
            <SBox
              icon1={
                <>
                  <i className="fa-solid fa-ear-listen"></i>
                </>
              }
              icon2={
                <>
                  <i className="fa-brands fa-ethereum"></i>
                </>
              }
              link="https://hf-highway.webflow.io/"
              heading="High Frequency Highway"
              para="My app with a library of positive frequencies "
            />
            <SBox
              icon2={
                <>
                  <i className="fa-solid fa-bolt"></i>
                </>
              }
              link="https://ishoppurium.com/"
              heading="Purium Super Food"
              para="Organic whole food so you can perform at your best"
            />
            <SBox
              icon1={
                <>
                  <i className="fa-solid fa-key"></i>
                </>
              }
              link="https://pillar.io/referral/j"
              heading="Make your own page like this for free with Pillar"
              para=" "
            />
            <SBox
              icon1={
                <>
                  <i className="fa-solid fa-star"></i>
                </>
              }
              link="https://www.famousbirthdays.com/people/j-johnson.html"
              heading="Famous Birthdays"
              para=""
            />
            <br />
            <h5 style={{ color: "white", textAlign: "center" }}>Music</h5>
            <MusicBox />
            <SBox
              icon1={
                <>
                  <i className="fa-solid fa-music"></i>
                </>
              }
              link="https://sndo.ffm.to/04zwj4m"
              heading=" Stream my song!"
              para="Available everywhere!"
            />
            <ExpandBox
              heading="Wishing Music Video"
              src="https://www.youtube.com/embed/bmJFOy5Y0FU"
            />
            <br />
            <h5 style={{ color: "white", textAlign: "center" }}>NFT's</h5>
            <MBox
              img={moon}
              heading="J Johnson Jr on the moon"
              para="Buy a collectible 1 of 1 NFT designed by me!"
              link="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/13639732610398022500787212775132617559971364072763760603590368014897216749569"
              btn={
                <>
                  Buy for $777 &nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </>
              }
            />
            <MBox
              img={dream}
              heading="J Johnson Jr's Dream"
              para="Buy a collectible 1 of 1 NFT designed by me!"
              link="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/13639732610398022500787212775132617559971364072763760603590368015996728377345"
              btn={
                <>
                  Buy for $777 &nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </>
              }
            />
            <MBox
              img={nike}
              heading="Nike ZoomX Invincible Run Flyknit"
              para="New Nike running Shoes 😮‍💨"
              link="https://www.nike.com/w?cid=4942550&cp=usns_aff_nike_content_PID_100579607_J+Johnson+Jr+LLC&cjevent=3b3d2ce17e9411ed81c68d1c0a18b8f7"
              btn={
                <>
                  Buy for $180 &nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </>
              }
            />
            <RequestBox
              heading="Critique your running form 🏃"
              para=""
              price="$10"
            />
            <ExpandBox
              heading="Workout Vlog #2"
              src="https://www.youtube.com/embed/kFpk7Ho7QEw"
            />
            <ExpandBox
              heading="Youtube"
              src="https://www.youtube.com/embed/kQPBfyHxK1k"
            />
            <RequestBox
              heading="Link On pillar"
              para="Have your link on my Pillar page. I have 15k+ visits"
              price="$500"
            />
            <RequestBox
              heading="Follow back"
              para="I'll follow you back on ig"
              price="$222"
            />
            <ModalPopup />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

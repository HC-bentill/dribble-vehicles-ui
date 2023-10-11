import VanImage from "../assets/img/van-removebg-preview.png";
import ArrowTopRight from "../assets/icons/ArrowTopRight";

const Home = () => {
  return (
    <>
      <div className="van-details">
        <div className="details-container">
          <div className="details-text">
            <p className="details-value" style={{marginBottom: "20px"}}>
              Volkswagen Transporter
            </p>

            <div className="details-flex">
              <div>
                <p className="details-title">Payload</p>
                <p className="details-value">2,885 lbs</p>
              </div>
              <div>
                <p className="details-title">Load Volume</p>
                <p className="details-value">353,937 in</p>
              </div>
            </div>

            <div className="details-flex">
              <div>
                <p className="details-title">Load Length</p>
                <p className="details-value">117 in</p>
              </div>
              <div>
                <p className="details-title">Load Width</p>
                <p className="details-value">67 in</p>
              </div>
            </div>

            <div className="details-flex" style={{paddingTop: "5px"}}>
              <div>
                <p className="details-value plate">6TRJ244</p>
              </div>
              <div>
                <p className="underline-dotted">Documents</p>
              </div>
            </div>
          </div>
          <div className="van-image" style={{backgroundImage: `url(${VanImage.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}></div>
        </div>
      </div>

      <div className="home-body">
        <div className="w-100  home-body-container">
          <div className="driver-stats-header">
            <p className="title">Routes</p>
            <p className="underline-dotted">History</p>
          </div>
        </div>

        <div className="home-body-vertical-container"></div>

        <div className="w-100 home-body-container">
          <div className="driver-stats-header">
            <p className="title">Driver Statistics</p>
            <p className="">
              <ArrowTopRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import VanImage from "../assets/img/van-removebg-preview.png";

const Home = () => {
  return (
    <>
      <div className="van-details">
        <div className="details-container">
          <div className="details-text">
            <p className="details-value" style={{marginBottom:"20px"}}>Volkswagen Transporter</p>

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
                <p className="details-title">Payload</p>
                <p className="details-value">2,885 lbs</p>
              </div>
              <div>
                <p className="details-title">Load Volume</p>
                <p className="details-value">353,937 in</p>
              </div>
            </div>
          </div>
          <div className="van-image" style={{backgroundImage: `url(${VanImage.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}></div>
        </div>
      </div>
    </>
  );
};

export default Home;

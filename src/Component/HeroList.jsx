const HeroList = () => {
    let images1 = [
      {
        title: "Google Logo",
        img: "images/logos_google.svg"
      },
      {
        title: "Trello Logo",
        img: "images/Trello-logo-blue 1.png"
      },
      {
        title: "Monday Logo",
        img: "images/logos_monday.svg"
      },
      {
        title: "Notion Logo",
        img: "images/Notion.png"
      },
      {
        title: "Slack Logo",
        img: "images/Slack.png"
      },
    ];
  
    let images2 = [
      {
        title: "1st project",
        img: "images2/Rectangle 1241.png"
      },
      {
        title: "2nd projec",
        img: "images2/Rectangle 1242.png"
      }
    ];
  
    return (
      <div className='Herolist'>
        <div className="header-full">
          <div className="Header-text-Content">
            <div className="header-text1">
              <h1 className='header-h'>Increase Your Customers Loyalty and Satisfaction</h1>
              <p className="header-p">We help businesses like yours earn more customers, standout from competitors, make more money</p>
              <button className='btn btn-success btn-lg'>Get Started</button>
            </div>
          </div>
          <div className="partners">
            {images1.map((image, index) => (
              <div key={index} className='partners-img'>
                <img src={image.img} alt={image.title} />
              </div>
            ))}
          </div>
          <div className="some-projects">
            {images2.map((image, index) => (
              <img key={index} src={image.img} alt={image.title} className="partners-img2"/>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroList;
  
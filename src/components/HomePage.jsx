import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div id="contents">
      {/* Ad box */}
      <div id="adbox">
        <img src="/images/sea-sound.jpg" alt="Img" />
        <h1>Enjoy the Summer with Us!</h1>
        <p>
          This website template has been designed by{' '}
          <a href="http://www.freewebsitetemplates.com/">
            Free Website Templates
          </a>{' '}
          for you, for free. You can replace all this text with your own text.
          You can remove any link to our website from this website template,
          you're free to use this website template without linking back to us.
          If you're having problems editing this website template, then don't
          hesitate to ask for help on the{' '}
          <a href="http://www.freewebsitetemplates.com/forums/">
            Forum
          </a>.
        </p>
      </div>

      {/* Main content */}
      <div id="main">
        {/* Latest Blog */}
        <div className="box">
          <div>
            <div className="box">
              <h3>Latest Blog</h3>
              <ul>
                <li>
                  <h4>
                    <Link to="/news">2023 Best Beaches Contest Winners</Link>
                  </h4>
                  <span>April 02, 2023</span>
                  <p>
                    Integer magna leo, posuere et dignissim vitae, porttitor at
                    odio. Pellentesque a metus nec magna placerat volutpat. Nunc
                    nisi mi, elementum sit amet...
                  </p>
                </li>
                <li>
                  <h4>
                    <Link to="/news">Top 10 Diving Spots</Link>
                  </h4>
                  <span>May 29, 2023</span>
                  <p>
                    Maecenas scelerisque odio quis arcu fringilla malesuada.
                    Nulla facilisi. In libero nulla, fermentum ut pretium ac,
                    pharetra et eros...
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="box">
          <div>
            <div className="box">
              <h3>Testimonials</h3>
              <p>
                “In hac habitasse platea dictumst. Integer purus justo, egestas
                eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi
                ultrices iaculis. Aenean quis elit mauris, nec vestibulum
                lorem.”{' '}
                <span>- <Link to="/">Juan De La Cruz</Link></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div id="sidebar">
        <div className="section">
          <Link to="/rooms">
            <img src="/images/rooms.png" alt="Rooms" />
          </Link>
        </div>
        <div className="section">
          <Link to="/trips">
            <img src="/images/dive-site.png" alt="Travel" />
          </Link>
        </div>
        <div className="section">
          <Link to="/meals">
            <img src="/images/food.png" alt="Meals" />
          </Link>
        </div>
      </div>
    </div>
  );
}
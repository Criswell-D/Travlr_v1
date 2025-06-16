import { Link } from 'react-router-dom';

export default function RoomsPage() {
  return (
    <div className="page rooms">
      <div className="box">
        <div>
          <div className="body">
            <h1>Rooms</h1>
            <ul id="rooms">
              <li>
                <Link to="/rooms">
                  <img
                    src="/images/first-class.jpg"
                    alt="First Class Room"
                  />
                </Link>
                <h2>
                  <Link to="/rooms">First Class Room</Link>
                </h2>
                <p>
                  Cras dui sapien, feugiat vitae tristique ut, lobortis tempor
                  orci. Donec pulvinar sagittis metus ut tristique. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas idios.
                </p>
                <span className="rate">Rate: $220 / Day</span>
              </li>

              <li>
                <Link to="/rooms">
                  <img
                    src="/images/deluxe.jpg"
                    alt="Deluxe Room"
                  />
                </Link>
                <h2>
                  <Link to="/rooms">Deluxe Room</Link>
                </h2>
                <p>
                  Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat
                  ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum
                  sit amet porttitor odio. Nulla facilisi. Fusce at pretium
                  felis.
                </p>
                <span className="rate">Rate: $150 / Day</span>
              </li>

              <li>
                <Link to="/rooms">
                  <img
                    src="/images/suite.jpg"
                    alt="Suite Room"
                  />
                </Link>
                <h2>
                  <Link to="/rooms">Suite Room</Link>
                </h2>
                <p>
                  Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat
                  ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum
                  sit amet porttitor odio. Nulla facilisi. Fusce at pretium
                  felis.
                </p>
                <span className="rate">Rate: $180 / Day</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
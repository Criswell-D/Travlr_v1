import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TravelPage() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/trips')
      .then(res => {
        setTrips(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load trips');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading trips…</p>;
  if (error)   return <p>{error}</p>;

  return (
    <div className="trips-container">
      <h2>Available Trips</h2>
      <div className="trip-list">
        {trips.map(trip => (
          <div key={trip.code} className="trip-card">
            <img
              src={`/images/${trip.image}`}
              alt={trip.name}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h3>{trip.name}</h3>
            <p><strong>{trip.length}</strong></p>
            <p>Start: {new Date(trip.start).toLocaleDateString()}</p>
            <p>Resort: {trip.resort}</p>
            <p><strong>${parseFloat(trip.perPerson).toFixed(2)}</strong> per person</p>
            <div
              className="trip-description"
              dangerouslySetInnerHTML={{ __html: trip.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

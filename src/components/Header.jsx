import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navItems = [
    { path: '/',      label: 'Home'   },
    { path: '/trips', label: 'Travel' },
    { path: '/rooms', label: 'Rooms'  },
    { path: '/meals', label: 'Meals'  },
    { path: '/news',  label: 'News'   },
    { path: '/about', label: 'About'  },
    { path: '/contact', label: 'Contact' },
  ];

  return (

      <div id="navigation">
        <ul>
          {navItems.map(item => (
            <li
              key={item.path}
              className={location.pathname === item.path ? 'selected' : ''}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
  );
}
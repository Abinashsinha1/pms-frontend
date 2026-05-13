import { LuSearch, LuBell, LuChevronDown } from 'react-icons/lu'

function Navbar() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Dashboard</h1>
        <p>Track and organize all your team's projects in one place</p>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <LuSearch size={18} color="#64748b" />
          <input type="text" placeholder="Search..." />
        </div>

        <button className="icon-btn">
          <LuBell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?u=amit" alt="User" className="user-avatar" />
          <div className="user-info">
            <span>Amit Sharma</span>
          </div>
          <LuChevronDown size={16} color="#64748b" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
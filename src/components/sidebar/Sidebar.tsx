import { Link, useLocation } from 'react-router-dom'
import {
  LuLayoutDashboard,
  LuFolderKanban,
  LuHeart,
  LuUsers,
  LuSquareCheck,
  LuChartBar,
  LuSettings,
  LuMegaphone
} from 'react-icons/lu'
import Button from '../buttons/Button'
import logo from '../../assets/pmsLogo.png'
import '../../styles/Dashboard.css'

interface SidebarProps {
  isCollapsed: boolean;
}

function Sidebar({ isCollapsed }: SidebarProps) {
  const location = useLocation();

  const menuItems = [
    { icon: LuLayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: LuFolderKanban, label: 'Projects', path: '/projects' },
    { icon: LuHeart, label: 'For you', path: '/foryou' },
    { icon: LuUsers, label: 'Team', path: '/teams' },
    { icon: LuSquareCheck, label: 'Tasks', path: '/tasks' },
    { icon: LuChartBar, label: 'Reports', path: '/reports' },
    { icon: LuSettings, label: 'Setting', path: '/settings' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        <img src={logo} alt="PMS Logo" />
        {/* {!isCollapsed && <span>PMS</span>} */}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            title={isCollapsed ? item.label : ''}
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="announcement-card">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ background: 'white', padding: '6px', borderRadius: '8px' }}>
              <LuMegaphone size={16} color="#4f46e5" />
            </div>
            <h4 style={{ margin: 0 }}>Announcement!</h4>
          </div>
          <p>Meeting Starts in 5 Minutes</p>

          <div className="member-avatars">
            <img src="https://i.pravatar.cc/150?u=1" alt="Member" className="avatar-stack" />
            <img src="https://i.pravatar.cc/150?u=2" alt="Member" className="avatar-stack" />
            <img src="https://i.pravatar.cc/150?u=3" alt="Member" className="avatar-stack" />
            <div className="avatar-stack" style={{ background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>+4</div>
          </div>

          <Button variant="primary" fullWidth size="sm">Join Now</Button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
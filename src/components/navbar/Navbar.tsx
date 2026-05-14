import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LuSearch, LuBell, LuChevronDown, LuUser, LuLogOut } from 'react-icons/lu'
import Button from '../buttons/Button'

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/dashboard': {
    title: 'Dashboard',
    description: "Track and organize all your team's projects in one place",
  },
  '/projects': {
    title: 'Projects',
    description: 'Manage and monitor your ongoing project portfolios',
  },
  '/foryou': {
    title: 'For You',
    description: 'Personalized task updates and project recommendations',
  },
  '/teams': {
    title: 'Team Members',
    description: 'Collaborate with your team members and manage roles',
  },
  '/tasks': {
    title: 'Tasks Board',
    description: 'Keep track of your daily tasks and deadlines',
  },
  '/reports': {
    title: 'Reports & Analytics',
    description: 'Analyze performance and project progress with detailed data',
  },
  '/settings': {
    title: 'Settings',
    description: 'Customize your workspace and account preferences',
  },
}

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  const metadata = pageMetadata[currentPath] || {
    title: 'Dashboard',
    description: "Track and organize all your team's projects in one place",
  }

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="header">
      <div className="header-left">
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <LuSearch size={18} color="#64748b" />
          <input type="text" placeholder="Search..." />
        </div>

        <Button variant="ghost" size="sm" className="relative p-2 rounded-full h-10 w-10 group">
          <LuBell size={20} className="text-gray-500 group-hover:animate-bell" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full">
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
          </span>
        </Button>
        <div className="relative" ref={profileRef}>
          <div
            className="user-profile cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img src="https://i.pravatar.cc/150?u=amit" alt="User" className="user-avatar" />
            <div className="user-info">
              <span>Amit Sharma</span>
            </div>
            <LuChevronDown size={16} color="#64748b" className={`transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 py-1.5 z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
              <button
                className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/profile');
                }}
              >
                <LuUser size={16} className="text-gray-400" />
                <span className="font-medium">Profile</span>
              </button>
              <div className="h-px bg-gray-100 my-1 mx-2" />
              <button
                className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/');
                }}
              >
                <LuLogOut size={16} className="text-red-500" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
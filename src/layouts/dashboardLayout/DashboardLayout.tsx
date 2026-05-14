import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/buttons/Button'
import '../../styles/Dashboard.css'

function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div className={`dashboard-layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} />

      <Button
        variant="secondary"
        size="sm"
        className="sidebar-toggle !absolute !w-6 !h-6 !p-0 !rounded-md shadow-sm"
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        aria-label={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {isSidebarCollapsed ? <LuChevronRight size={14} /> : <LuChevronLeft size={14} />}
      </Button>

      <div className="main-wrapper flex flex-col flex-1 overflow-hidden w-full">
        <Navbar />

        <main className="main-content">
          <div className="px-8 bg-[#fff] rounded-lg p-6 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
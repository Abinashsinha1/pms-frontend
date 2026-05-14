import { Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout'
import AuthLayout from '../layouts/authLayout/AuthLayout'

import DashboardPage from '../pages/dashboard/DashboardPage'
import ProjectsPage from '../pages/projects/ProjectsPage'
import ForYouPage from '../pages/foryou/ForYouPage'
import TeamsPage from '../pages/teams/TeamsPage'
import TasksPage from '../pages/tasks/TasksPage'
import ReportsPage from '../pages/reports/ReportsPage'
import SettingsPage from '../pages/settings/SettingsPage'
import ProfilePage from '../pages/profile/ProfilePage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import NotFoundPage from '../pages/notfound/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/foryou" element={<ForYouPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
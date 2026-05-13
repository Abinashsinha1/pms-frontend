import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-10">PMS</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
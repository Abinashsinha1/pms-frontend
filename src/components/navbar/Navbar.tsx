function Navbar() {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Project Management System</h2>

      <div>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </header>
  )
}

export default Navbar
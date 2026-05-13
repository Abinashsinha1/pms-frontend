import { 
  LuCircleCheck, 
  LuClock, 
  LuListTodo, 
  LuChevronRight, 
  LuEllipsis,
  LuLink,
  LuMessageSquare,
  LuFilter,
  LuEye
} from 'react-icons/lu'

function DashboardPage() {
  const metrics = [
    { label: 'Total Tasks', value: '128', icon: LuListTodo, color: '#4f46e5', bg: '#eef2ff' },
    { label: 'In Progress', value: '18', icon: LuClock, color: '#f59e0b', bg: '#ffedd5' },
    { label: 'Completed', value: '76', icon: LuCircleCheck, color: '#10b981', bg: '#dcfce7' },
  ];

  const recentTasks = [
    {
      title: 'Design System Updates',
      priority: 'High',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      members: ['1', '2', '3'],
      links: 3,
      comments: 1
    },
    {
      title: 'Mobile App Wireframes',
      priority: 'Medium',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      members: ['4', '5'],
      links: 5,
      comments: 2
    }
  ];

  const tableData = [
    { name: 'Homepage Redesign', start: 'Jan 15, 2026', due: 'Jan 28, 2026', progress: 40, priority: 'Medium' },
    { name: 'Landing Page SEO', start: 'Jan 15, 2026', due: 'Jan 28, 2026', progress: 70, priority: 'High' },
    { name: 'API Integration', start: 'Jan 15, 2026', due: 'Jan 28, 2026', progress: 20, priority: 'Medium' },
    { name: 'User Research', start: 'Jan 15, 2026', due: 'Jan 28, 2026', progress: 90, priority: 'Low' },
  ];

  return (
    <div className="dashboard-grid">
      {/* Metric Cards */}
      {metrics.map((metric) => (
        <div key={metric.label} className="metric-card">
          <div className="metric-header">
            <div className="metric-icon" style={{ backgroundColor: metric.bg, color: metric.color }}>
              <metric.icon size={20} />
            </div>
            <a href="#" className="metric-link">View Details <LuChevronRight size={14} /></a>
          </div>
          <div className="metric-body">
            <h3>{metric.label}</h3>
            <div className="value">{metric.value}</div>
          </div>
        </div>
      ))}

      {/* Recent Tasks */}
      <div className="recent-tasks">
        <div className="section-title">
          <h2>Recent Task</h2>
          <LuEllipsis className="icon-btn" />
        </div>
        <div className="task-cards">
          {recentTasks.map((task, idx) => (
            <div key={idx} className="task-card">
              <span className={`priority-tag priority-${task.priority.toLowerCase()}`}>
                {task.priority === 'High' ? '⚑' : '⚐'} {task.priority}
              </span>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="member-avatars">
                  {task.members.map(m => (
                    <img key={m} src={`https://i.pravatar.cc/150?u=${m}`} alt="Member" className="avatar-stack" />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#64748b' }}>
                  <span><LuLink size={14} /> {task.links}</span>
                  <span><LuMessageSquare size={14} /> {task.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div className="schedule-section">
        <div className="section-title">
          <h2>Schedule</h2>
          <LuEllipsis className="icon-btn" />
        </div>
        <div className="schedule-tabs">
          <div className="tab active">Meetings <span style={{ background: '#ef4444', color: 'white', padding: '0 4px', borderRadius: '4px', fontSize: '10px' }}>2</span></div>
          <div className="tab">Task <span style={{ background: '#94a3b8', color: 'white', padding: '0 4px', borderRadius: '4px', fontSize: '10px' }}>8</span></div>
        </div>
        <div className="schedule-list">
          <div className="schedule-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Sprint Planning</span>
              <span style={{ fontSize: '11px', color: '#f59e0b', background: '#ffedd5', padding: '2px 6px', borderRadius: '4px' }}>Starting Soon</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button style={{ border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', padding: '4px 8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '2px' }}></span> Zoom Meeting
              </button>
              <span style={{ fontSize: '12px', fontWeight: 600 }}>05:00 PM - 06:00 PM</span>
            </div>
          </div>
          <div className="schedule-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Design Review</span>
              <span style={{ fontSize: '11px', color: '#10b981', background: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>Schedule</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button style={{ border: '1px solid #e2e8f0', background: 'white', borderRadius: '6px', padding: '4px 8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '2px' }}></span> Zoom Meeting
              </button>
              <span style={{ fontSize: '12px', fontWeight: 600 }}>05:00 PM - 06:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Task List Table */}
      <div className="task-list-section">
        <div className="section-title">
          <h2>Task List</h2>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="icon-btn" style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}><LuFilter size={16} /> Filter</button>
            <LuEllipsis className="icon-btn" />
          </div>
        </div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Progress</th>
              <th>Assignee</th>
              <th>Attachment</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((task, idx) => (
              <tr key={idx}>
                <td>{task.name}</td>
                <td>{task.start}</td>
                <td>{task.due}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="progress-bar-container">
                      <div className="progress-bar" style={{ width: `${task.progress}%` }}></div>
                    </div>
                    <span>{task.progress}%</span>
                  </div>
                </td>
                <td>
                  <div className="member-avatars">
                    <img src="https://i.pravatar.cc/150?u=a" alt="A" className="avatar-stack" />
                    <img src="https://i.pravatar.cc/150?u=b" alt="B" className="avatar-stack" />
                  </div>
                </td>
                <td><span style={{ color: '#ef4444' }}>☗</span> Design.fig</td>
                <td>
                  <span className={`priority-tag priority-${task.priority.toLowerCase()}`} style={{ margin: 0 }}>
                    {task.priority}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <LuEye size={16} color="#64748b" />
                    <LuEllipsis size={16} color="#64748b" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardPage
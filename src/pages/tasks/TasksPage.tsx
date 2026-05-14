import React from 'react'
import { LuPlus, LuLink, LuMessageSquare, LuFileCode2, LuCircleDot, LuClock3 } from "react-icons/lu";
import { HiCheckCircle, HiEye, HiOutlineDotsVertical } from "react-icons/hi";
import Button from '../../components/buttons/Button'
import Select from '../../components/buttons/Select'

const initialTasks = {
  todo: [
    { id: 'TSK-401', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['1', '2'] },
    { id: 'TSK-402', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['3', '4'] },
    { id: 'TSK-401', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['1', '2'] },
    { id: 'TSK-402', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['3', '4'] },
    { id: 'TSK-401', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['1', '2'] },
    { id: 'TSK-402', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['3', '4'] },
  ],
  inprogress: [
    { id: 'TSK-403', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['1', '3'] },
    { id: 'TSK-404', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['2', '4'] },
  ],
  review: [
    { id: 'TSK-405', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['1', '4'] },
    { id: 'TSK-406', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['2', '3'] },
  ],
  completed: [
    { id: 'TSK-407', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Low', file: 'Design.fig', comments: 1, links: 3, members: ['1', '2'] },
    { id: 'TSK-408', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['3', '4'] },
    { id: 'TSK-409', title: 'User Flow Mapping', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', priority: 'Medium', file: 'Design.fig', comments: 1, links: 3, members: ['1', '3'] },
  ]
}

const TaskCard = ({ task }: { task: any }) => (
  <div className="kanban-card">
    <div className="card-header">
      <span className={`priority-tag priority-${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>
      <span className="task-id">{task.id}</span>
    </div>
    <h4>{task.title}</h4>
    <p>{task.desc}</p>

    <div className="card-file">
      <div className="file-icon">
        <LuFileCode2 size={14} color="#f24e1e" />
      </div>
      <span>{task.file}</span>
    </div>

    <div className="card-footer">
      <div className="member-avatars">
        {task.members.map((m: string) => (
          <img key={m} src={`https://i.pravatar.cc/150?u=${m}`} alt="Member" className="avatar-stack" />
        ))}
      </div>
      <div className="card-meta">
        <div className="meta-item">
          <LuLink size={14} />
          <span>{task.links}</span>
        </div>
        <div className="meta-item">
          <LuMessageSquare size={14} />
          <span>{task.comments}</span>
        </div>
      </div>
    </div>
  </div>
)

const TasksPage = () => {
  return (
    <div className="tasks-page">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
        <div className="relative w-full sm:w-auto">
          <Select
            options={[
              { value: 'all', label: 'All Projects' },
              { value: 'todo', label: 'To Do' },
              { value: 'in-progress', label: 'In Progress' },
              { value: 'in-review', label: 'In Review' },
              { value: 'completed', label: 'Completed' },
            ]}
            className="w-full sm:w-64"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="secondary"
            leftIcon={<LuPlus size={18} className="text-gray-500" />}
            className="flex-1 sm:flex-none"
          >
            Filters
          </Button>

          <Button
            variant="primary"
            leftIcon={<LuPlus size={18} />}
            className="flex-1 sm:flex-none"
          >
            New Task
          </Button>
        </div>
      </div>

      <div className="kanban-board">
        {/* To Do Column */}
        <div className="kanban-column todo">
          <div className="column-header">
            <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#E5E5E5]">
              <LuCircleDot size={18} />
              <h3 className="font-medium text-gray-800">To do</h3>
              <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {initialTasks.todo.length}
              </span>
            </div>
            <LuPlus className="add-icon" />
          </div>
          <div className="column-content">
            {initialTasks.todo.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="kanban-column inprogress">
          <div className="column-header">
            <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#90C7FF]">
              <LuClock3 size={18} />
              <h3 className="font-medium text-gray-800">In Progress</h3>
              <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {initialTasks.inprogress.length}
              </span>
            </div>
            <LuPlus className="add-icon" />
          </div>
          <div className="column-content">
            {initialTasks.inprogress.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>

        {/* In Review Column */}
        <div className="kanban-column review">
          <div className="column-header">
            <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#FFC44E]">
              <HiEye size={18} />
              <h3 className="font-medium text-gray-800">In Review</h3>
              <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {initialTasks.review.length}
              </span>
            </div>
            <LuPlus className="add-icon" />
          </div>
          <div className="column-content">
            {initialTasks.review.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>

        {/* Completed Column */}
        <div className="kanban-column completed">
          <div className="column-header">
            <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#19CB58]">
              <HiCheckCircle size={18} />
              <h3 className="font-medium text-gray-800">Completed</h3>
              <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {initialTasks.completed.length}
              </span>
            </div>
            <HiOutlineDotsVertical className="add-icon text-black" />
          </div>
          <div className="column-content">
            {initialTasks.completed.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TasksPage

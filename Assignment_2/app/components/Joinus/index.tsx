"use client";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
  startTime: string;
  endTime: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
}

const Tracker = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 Check if time conflicts with other tasks
  const isTimeConflict = (start: string, end: string, excludeId?: number) => {
    const startDate = new Date(`2000-01-01T${start}`);
    const endDate = new Date(`2000-01-01T${end}`);

    if (startDate >= endDate) return true; // invalid range

    return tasks.some((task) => {
      if (excludeId && task.id === excludeId) return false;

      const taskStart = new Date(`2000-01-01T${task.startTime}`);
      const taskEnd = new Date(`2000-01-01T${task.endTime}`);

      return startDate < taskEnd && endDate > taskStart;
    });
  };

  const addTask = () => {
    if (!description.trim() || !startTime || !endTime) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    if (isTimeConflict(startTime, endTime)) {
      alert("⛔ This time slot conflicts with an existing task.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      description,
      startTime,
      endTime,
      priority,
      status: "Pending",
    };
    setTasks((prev) => [...prev, newTask]);
    resetForm();
  };

  const updateTask = () => {
    if (!description.trim() || !startTime || !endTime) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    if (isTimeConflict(startTime, endTime, editingTask?.id)) {
      alert("⛔ This time slot conflicts with an existing task.");
      return;
    }

    setTasks((prev) =>
      prev.map((t) =>
        t.id === editingTask?.id
          ? { ...t, description, startTime, endTime, priority }
          : t
      )
    );
    closeModal();
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (task: Task) => {
    setEditingTask(task);
    setDescription(task.description);
    setStartTime(task.startTime);
    setEndTime(task.endTime);
    setPriority(task.priority);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setDescription("");
    setStartTime("");
    setEndTime("");
    setPriority("Medium");
  };

  return (
    <div className="bg-joinus py-20" id="joinus-section">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            Astronaut Tracker
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            Plan. Track. Accomplish.
          </h2>
          <p className="text-lightblack text-base font-normal">
            Keep your mission tasks organized, prioritize effectively, and
            complete them with clarity.
          </p>
        </div>

        {/* Task Input Form */}
        <div className="mx-auto max-w-3xl bg-lightgrey rounded-xl sm:rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">➕ Add New Task</h2>
          <input
            type="text"
            placeholder="Mission task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full my-3 py-3 px-4 lg:text-lg text-black rounded-xl bg-white border border-gray-300 focus:outline-none"
          />
          <div className="flex gap-4 my-3">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-1/2 py-3 px-4 lg:text-lg text-black rounded-xl bg-white border border-gray-300 focus:outline-none"
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-1/2 py-3 px-4 lg:text-lg text-black rounded-xl bg-white border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Priority Selector */}
          <div className="flex gap-4 my-3">
            {(["High", "Medium", "Low"] as const).map((level) => (
              <label
                key={level}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer border ${
                  priority === level ? "bg-blue text-white" : "bg-white text-black"
                }`}
              >
                <input
                  type="checkbox"
                  checked={priority === level}
                  onChange={() => setPriority(level)}
                  className="hidden"
                />
                {level === "High" && "🔴"}
                {level === "Medium" && "🟡"}
                {level === "Low" && "🟢"} {level}
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={addTask}
            className="joinButton w-full text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue py-4 mt-4"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="mx-auto max-w-4xl mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue">
            Mission Timeline
          </h2>
          {tasks.length === 0 ? (
            <p className="text-center text-lightblack">No tasks yet 🚀</p>
          ) : (
            <div className="space-y-6">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md border-l-8"
                  style={{
                    borderColor:
                      task.priority === "High"
                        ? "#ef4444"
                        : task.priority === "Medium"
                        ? "#facc15"
                        : "#22c55e",
                  }}
                >
                  <div>
                    <p
                      className={`text-xl font-semibold ${
                        task.status === "Completed"
                          ? "line-through text-gray-500"
                          : "text-black"
                      }`}
                    >
                      {task.description}
                    </p>
                    <p className="text-sm text-lightblack">
                      {task.startTime} → {task.endTime}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleComplete(task.id)}
                      style={{ backgroundColor: "#16a34a" }}
                      className="px-5 py-2 rounded-lg hover:opacity-90 text-white font-bold shadow-md transition"
                    >
                      {task.status === "Completed" ? "Undo" : "Complete"}
                    </button>
                    <button
                      onClick={() => startEdit(task)}
                      style={{ backgroundColor: "#3b82f6" }}
                      className="px-5 py-2 rounded-lg hover:opacity-90 text-white font-bold shadow-md transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTask(task.id)}
                      style={{ backgroundColor: "#ef4444" }}
                      className="px-5 py-2 rounded-lg hover:opacity-90 text-white font-bold shadow-md transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && editingTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">✏️ Edit Task</h2>
            <input
              type="text"
              placeholder="Mission task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full my-3 py-3 px-4 text-black rounded-xl bg-lightgrey border border-gray-300 focus:outline-none"
            />
            <div className="flex gap-4 my-3">
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-1/2 py-3 px-4 text-black rounded-xl bg-lightgrey border border-gray-300 focus:outline-none"
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-1/2 py-3 px-4 text-black rounded-xl bg-lightgrey border border-gray-300 focus:outline-none"
              />
            </div>

            {/* Priority Selector in Modal */}
            <div className="flex gap-4 my-3">
              {(["High", "Medium", "Low"] as const).map((level) => (
                <label
                  key={level}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer border ${
                    priority === level ? "bg-blue text-white" : "bg-white text-black"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={priority === level}
                    onChange={() => setPriority(level)}
                    className="hidden"
                  />
                  {level === "High" && "🔴"}
                  {level === "Medium" && "🟡"}
                  {level === "Low" && "🟢"} {level}
                </label>
              ))}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="px-5 py-2 rounded-lg bg-gray-400 text-white font-bold hover:opacity-90"
              >
                Cancel
              </button>
              <button
                onClick={updateTask}
                className="px-5 py-2 rounded-lg bg-blue text-white font-bold hover:bg-btnblue"
              >
                💾 Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracker;

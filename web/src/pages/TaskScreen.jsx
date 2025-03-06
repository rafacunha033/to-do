import ModalCreateTask from "../components/ModalCreateTask";
import { useState } from "react";

const TaskScreen = () => {
    const [isModalCreateTaskOpen, setIsModalCreateTaskOpen] = useState(false)

    const openModalCreateTask = () => {
        setIsModalCreateTaskOpen(true)
        document.body.classList.add("overflow-hidden")
    }

    const closeModalCreateTask = () => {
        setIsModalCreateTaskOpen(false)
        document.body.classList.remove("overflow-hidden")
    }

    const loadTasks = () => {
        return true
    }

    return (
        <div>            
            <button className="bg-[#1A76FF] text-white w-25 h-8 rounded-md mr-2 cursor-pointer hover:opacity-90"
            onClick={() => openModalCreateTask()}>Criar Tarefa</button>
            <ModalCreateTask isOpen={isModalCreateTaskOpen} onClose={closeModalCreateTask} loadTasks={loadTasks} />
        </div>
    )
}

export default TaskScreen;
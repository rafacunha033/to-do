import axios from "axios";
import { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

const apiUrl = 'http://localhost:3000/api/tasks'

const ModalCreateTask = ({isOpen, onClose, loadTasks}) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: "",
        priority: "Urgente"
    })

    const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"))

    const handleChange = (e) => {
        // console.log(e.value)
        const {name, value} = e.target
        setFormData({...formData, [name]: value}) 
        console.log(formData)
    }

    const handleDateChange = (date) => {
        setDate(date)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        axios.post(apiUrl, {
            name: formData.name,
            date: dayjs(date).format('YYYY-MM-DD'),
            priority: formData.priority
        })
        .then((res) => {
            onClose()
            loadTasks()            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div onClick={handleOverlayClick}
        className="w-screen h-full bg-[#00000091] absolute top-0 left-0 z-[99] flex justify-center items-center">
            <div className="bg-white rounded-xl w-xs sm:w-xl z-[100] shadow-[0px_0px_2px_rgba(0,0,0,0.4)]">
                <h2 className="text-left font-bold px-5 mt-5 text-xl">Nova Tarefa</h2>
                <hr className="mx-5 text-[#DCDCDC]" />
                <form onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col px-5 py-6">

                    {/* INPUT NAME */}
                    <label className="text-left">Título</label>
                    <input type="text" autoComplete="off" name="name" value={formData.name} onChange={(e) => {handleChange(e)}} 
                    className="bg-white border border-gray-300 rounded-sm outline-0 px-2 py-1 focus:border focus:ring-[#1A76FF] focus:border-blue-500"/>

                    {/* SELECT PRIORITY */}
                    <label className="text-left mt-4">Prioridade</label>
                    <select name="priority" onChange={(e) => handleChange(e)} 
                    className="w-30 px-2 py-1 border border-gray-300 rounded-sm outline-0 focus:border focus:ring-[#1A76FF] focus:border-blue-500" >
                        <option value="Urgente">Urgente</option>
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>

                    {/* INPUT DATE */}
                    <label className="text-left mt-4">Data</label>
                    <span className="flex flex-row items-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                        <DemoContainer components={['DatePicker']} className="outline-0">
                            <DatePicker label="" views={['day', 'month', 'year']} name="date" value={dayjs(date)} onChange={handleDateChange}
                            className="w-5"/>
                        </DemoContainer>
                        </LocalizationProvider>
                    </span>
                    
                  
                    {/* FORM BUTTONS */}
                    <div className="mt-10">
                        <button type="submit"
                        className="bg-[#1A76FF] text-white w-25 h-8 rounded-md mr-2 cursor-pointer hover:opacity-90">Enviar</button>
                        <button onClick={onClose}
                         className="bg-red-500 text-white w-25 h-8 rounded-md cursor-pointer hover:opacity-90">Fechar</button>
                    </div>
                </form>

                
                
            </div>
        </div>
    )
}

export default ModalCreateTask;
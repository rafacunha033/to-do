import { Request, Response } from "express"
import { Task } from "../models/Task";

const taskController = {
    create: async (req: Request, res: Response) => {  
        const data = req.body; 

        try {
            const task = await Task.create(data);

            res.status(201).json({ msg: "Tarefa cadastrada com sucesso!"})
            return;
        } catch (error) {
            res.status(500).json({ msg: "Não foi possível criar a tarefa! Tente novamente!"})
            return;
        }
    },

    find: async (req: Request, res: Response) => {   
        const tasks = await Task.find();

        if(!tasks) {
            res.status(404).json({ msg: "Nenhuma tarefa encontrada!" })
            return;
        }

        res.status(201).json({ tasks })
        return;
    }
}

export default taskController;
import Aluno from '../models/Alunos';

class StudentsController {
    
    async index(req, res) {
        const aluno = await Aluno.create({
            nome: 'Douglas',
            sobrenome: 'Sales',
            email: 'douglas.sales0611@gmail.com',
            idade: 24,
            peso: 87.5,
            altura: 180
        });

        res.status(200).json(aluno);
    }
}

export default new StudentsController();

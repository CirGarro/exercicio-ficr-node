const { Tarefa } = require('../../src/models');

module.exports = {
    async index(req, res) {
        try {
            const tarefa = await Tarefa.findAll();
            console.log(tarefa);
            return res.json(tarefa);

        } catch (err) {
            return err;
        }

    },
    async create(req, res) {
        try {
            await Tarefa.create(req.body);
            return res.send('adicionado com sucesso');
        } catch (err) {
            console.log(err)
        }
    },
    async detalhe(req, res) {
        const tarefa = await Tarefa.findByPk(req.params.id);
        return res.json(tarefa);

    },
    async update(req, res) {
        const tarefa = await Tarefa.update(req.body, {
            where: {
                id: req.params.id
            }

        });
        res.json('Alterado com sucesso');
    },
    async delete(req, res) {
        const tarefa = await Tarefa.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send('excluído com sucesso');
    }

};
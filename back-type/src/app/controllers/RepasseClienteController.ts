import { Request, Response } from 'express';
import { getRepository, UpdateQueryBuilder } from 'typeorm';
import { v4 as uuid } from 'uuid';

import RepasseCliente from '../models/entity/RepasseCliente';

class RepasseClienteController {

    async store(req: Request, res: Response) {
        const repository = getRepository(RepasseCliente);

        //pegar os dados da planilha excel
        const { codigoAtendimento, nomeAtendimento, dataAtendimento, valorProcedimento, mesOperacao, associacaoEntreAtendimento } = req.body;

        const atendimentoExists = await repository.findOne({ where: { codigoAtendimento } });

        const id = await repository.count() + 1;

        if (atendimentoExists) {
            return res.status(409).json({ error: 'Atendimento already exists!' });
        }

        const repasseCliente = repository.create(
            {
                id: uuid(),
                codigoAtendimento,
                nomeAtendimento,
                dataAtendimento,
                valorProcedimento,
                mesOperacao,
                associacaoEntreAtendimento
            }
        );
        await repository.save(repasseCliente);

        return res.json(repasseCliente);
    }
}

export default new RepasseClienteController();
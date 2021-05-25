import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('repasseCliente')
class RepasseCliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    codigoAtendimento: string;

    @Column()
    nomeAtendimento: string;

    @Column()
    dataAtendimento: string;

    @Column()
    valorProcedimento: number;

    @Column()
    mesOperacao: string;

    @Column()
    associacaoEntreAtendimento: string;
}

export default RepasseCliente;
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRepasseClienteTable1621956949087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'repasseCliente',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'codigoAtendimento',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'nomeAtendimento',
                    type: 'varchar',
                },
                {
                    name: 'dataAtendimento',
                    type: 'varchar',
                },
                {
                    name: 'valorProcedimento',
                    type: 'int',
                },
                {
                    name: 'mesOperacao',
                    type: 'varchar',
                },
                {
                    name: 'associacaoEntreAtendimento',
                    type: 'int',
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('repasseCliente');
    }
}

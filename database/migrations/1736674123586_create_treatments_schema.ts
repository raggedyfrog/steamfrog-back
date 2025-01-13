import { BaseSchema } from '@adonisjs/lucid/schema'

import { waveSteps } from '#models/treatments/types'
import { defaultFieldsMigration } from '#models/mixins/default_fields'

export default class extends BaseSchema {
  protected schemaName = 'treatments'
  protected tableName = 'waves'

  async up() {
    this.schema.createSchema(this.schemaName)

    this.schema.withSchema(this.schemaName).createTable(this.tableName, (table) => {
      defaultFieldsMigration(this, table)

      table.increments('wave').notNullable()

      table.enum('step', waveSteps).notNullable().defaultTo('list')
      table.integer('last_appid').notNullable().defaultTo(0)
    })
  }

  async down() {
    this.schema.withSchema(this.schemaName).dropTable(this.tableName)
    this.schema.dropSchema(this.schemaName)
  }
}

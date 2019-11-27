class CreateBankStatements < ActiveRecord::Migration[6.0]
  def change
    create_table :bank_statements do |t|

      t.timestamps
    end
  end
end

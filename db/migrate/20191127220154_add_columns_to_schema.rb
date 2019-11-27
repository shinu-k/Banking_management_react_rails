class AddColumnsToSchema < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :user_name, :string
    add_column :accounts, :user_id, :integer
    add_column :accounts, :type, :string
    add_column :accounts, :balance, :float

    add_column :bank_statements, :amount, :float
    add_column :bank_statements, :date, :date
    add_column :bank_statements, :title, :string

  end
end

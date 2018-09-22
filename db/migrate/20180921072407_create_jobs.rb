class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :employer_id, null: false

      t.index :employer_id
      t.timestamps
    end
  end
end

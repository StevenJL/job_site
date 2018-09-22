class CreateUserJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :user_jobs do |t|
      t.integer :applicant_id, null: false
      t.integer :job_id, null: false

      t.index :applicant_id
      t.index :job_id
      t.timestamps
    end
  end
end

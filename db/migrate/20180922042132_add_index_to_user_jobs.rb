class AddIndexToUserJobs < ActiveRecord::Migration[5.1]
  def change
    add_index :user_jobs, [:applicant_id, :job_id], unique: true
  end
end

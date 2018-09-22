class RemoveIndexesFromUserJobs < ActiveRecord::Migration[5.1]
  def change
    remove_index :user_jobs, column: :applicant_id
    remove_index :user_jobs, column: :job_id
  end
end

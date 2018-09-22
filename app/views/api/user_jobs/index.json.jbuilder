@user_jobs.each do |user_job|
  json.set! user_job.id do
    json.id user_job.id
    json.job_id user_job.job_id
  end
end

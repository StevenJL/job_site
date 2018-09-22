json.id user.id
json.email user.email
json.firstName user.first_name
json.lastName user.last_name

if admin?(current_user)
  json.employer user.admin
else
  json.appliedJobs user.job_applications.pluck(:job_id)
end

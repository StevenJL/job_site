@jobs.each do |job|
  json.set! job.id do
    json.id job.id
    json.title job.title
    json.description job.description
    json.applicantNames job.applicants.pluck(:first_name)
  end
end

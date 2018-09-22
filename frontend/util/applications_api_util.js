export const fetchApplications = userId =>
  $.ajax({
    url: `/api/users/${userId}/user_jobs`
  });

export const createApplication = job_id =>
  $.ajax({
    url: `/api/user_jobs`,
    method: "POST",
    data: { user_job: { job_id } }
  });

export const fetchApplication = id =>
  $.ajax({
    url: `/api/user_jobs/${id}`
  });

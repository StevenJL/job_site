export const fetchJobs = userId =>
  $.ajax({
    url: `/api/users/${userId}/jobs`
  });

export const createJob = (userId, data) =>
  $.ajax({
    url: `/api/users/${userId}/jobs`,
    method: "POST",
    data: data
  });

export const fetchJob = id =>
  $.ajax({
    url: `/api/jobs/${id}`
  });

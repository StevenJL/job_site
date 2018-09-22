# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {first_name: 'User', last_name: 'User', email: "user@gmail.com", password_digest: "$2a$10$.PP.FF6.b/VG/zIEaHiQtuZxlXLTUMMcBEzWNQzv1z1wCp4mwl4CG", admin: false},
  { first_name: "Areej", last_name: "Hassan", email: "areej@gmail.com", password_digest: "$2a$10$lE1fukbwD9KxCyB3Hqd64uKPPRdnGaBZ4aGKVK.fD8uH3praB0ksO", admin: false },
  { first_name: "Almond", last_name: "Dog", email: "almond@gmail.com", password_digest: "$2a$10$zVmCeyatWqxOb9ML1S0COetHhdoJtZ4gyecvV6eExe3UGDCy7K2wO", admin: false },
  { first_name: "Avocado", last_name: "Cat", email: "avocado@gmail.com", password_digest: "$2a$10$9o9CuV5KcyrzC/V8237g/euV2J9atkRi4I6E6sVAaAFDSBftDW836", admin: false },
  { first_name: "daniel", last_name: "Man", email: "daniel@gmail.com", password_digest: "$2a$10$nm8T0m4MLsiPSB10ct7QT.2LYIoE3XrLgk/6RKAgtPcSFZxnf5h2a", admin: true },
  { first_name: "Diana", last_name: "Princess", email: "diana@gmail.com", password_digest: "$2a$10$t.C1e2tpTWXhk2ryBYo3o.KKxpyEU/OtOHY57EgPqBiPQWnQsvcKe", admin: true },
  { first_name: "Lina", last_name: "Cat", email: "lina@gmail.com", password_digest: "$2a$10$bN8j/DTIjarFZLAG0OjeO.CoasBPAR1FWMlB.CbCXlxkfHpfihQPu", admin: true }
])

jobs = Job.create([
  { title: "teacher", description: "teach our mentally gifted students", employer_id: 5 },
  { title: "software developer", description: "work for our SF office", employer_id: 6 },
  { title: "dancer", description: "join our top dance group", employer_id: 7 },
  { title: "football player", description: "Love to play football? Come play for us.", employer_id: 6 },
  { title: "lawyer", description: "help people get justice", employer_id: 5 },
  { title: "doctor", description: "save lives on the daily", employer_id: 7 }
])

user_jobs = UserJob.create([
  { job_id: 1, applicant_id: 1 },
  { job_id: 2, applicant_id: 1 },
  { job_id: 3, applicant_id: 1 },
  { job_id: 4, applicant_id: 1 },
  { job_id: 5, applicant_id: 1 },
  { job_id: 6, applicant_id: 1 },
  { job_id: 1, applicant_id: 2 },
  { job_id: 2, applicant_id: 2 },
  { job_id: 3, applicant_id: 2 },
  { job_id: 4, applicant_id: 2 },
  { job_id: 5, applicant_id: 2 },
  { job_id: 1, applicant_id: 3 },
  { job_id: 2, applicant_id: 3 },
  { job_id: 3, applicant_id: 3 },
  { job_id: 4, applicant_id: 3 },
  { job_id: 1, applicant_id: 4 },
  { job_id: 2, applicant_id: 4 },
  { job_id: 3, applicant_id: 4 }
  ])

# == Schema Information
#
# Table name: user_jobs
#
#  id           :bigint(8)        not null, primary key
#  applicant_id :integer          not null
#  job_id       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class UserJob < ApplicationRecord
  validates :applicant_id, :job_id, presence: true
  validates_uniqueness_of :applicant_id, :scope => [:job_id]

  belongs_to :applicant,
  primary_key: :id,
  foreign_key: :applicant_id,
  class_name: :User

  belongs_to :job,
  primary_key: :id,
  foreign_key: :job_id,
  class_name: :Job
end

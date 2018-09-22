# == Schema Information
#
# Table name: jobs
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  employer_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Job < ApplicationRecord
  validates :title, :description, :employer_id, presence: true

  belongs_to :employer,
  primary_key: :id,
  foreign_key: :employer_id,
  class_name: :User

  has_many :applications,
  primary_key: :id,
  foreign_key: :job_id,
  class_name: :UserJob,
  dependent: :destroy

  has_many :applicants,
  through: :applications,
  source: :applicant
end

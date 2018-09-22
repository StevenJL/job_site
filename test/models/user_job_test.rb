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

require 'test_helper'

class UserJobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

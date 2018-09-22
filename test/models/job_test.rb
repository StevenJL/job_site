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

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  admin           :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :admin, inclusion: { in: [ true, false ] }

  before_validation :ensure_session_token

  # Applicant:
  has_many :job_applications,
  primary_key: :id,
  foreign_key: :applicant_id,
  class_name: :UserJob,
  dependent: :destroy

  has_many :applied_jobs,
  through: :job_applications,
  source: :job

  # Employer:
  has_many :posted_jobs,
  primary_key: :id,
  foreign_key: :employer_id,
  class_name: :Job,
  dependent: :destroy

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

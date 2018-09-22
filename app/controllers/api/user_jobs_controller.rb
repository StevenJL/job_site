class Api::UserJobsController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    if current_user.admin == true
      render json: ["You must be an applicant to post a job"], status: 422
    else
      @user_jobs = UserJob.where(applicant_id: params[:user_id])
    end
  end

  def show
    @user_job = UserJob.new(user_job_params)
  end

  def create
    if current_user.admin == true
      render json: ["You must be an applicant to apply to a job"], status: 422
    else
      @user_job = UserJob.new(user_job_params)
      @user_job.applicant_id = current_user.id
      if @user_job.save
        render :show
      else
        render json: @user_job.errors.full_messages, status: 422
      end
    end
  end

  private
  def user_job_params
    params.require(:user_job).permit(:job_id)
  end
end

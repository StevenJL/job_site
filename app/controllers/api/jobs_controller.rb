class Api::JobsController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def create
    if current_user.admin == false
      render json: ["You must be an employer to post a job"], status: 422
    else
      @job = current_user.posted_jobs.new(job_params)
      if @job.save
        render :show
      else
        render json: @job.errors.full_messages, status: 422
      end
    end
  end

  def index
    if current_user.admin == true
      @jobs = Job.includes(:applicants).where(employer_id: params[:user_id])
      render :jobs
    else
      @jobs = Job.all
    end
  end

  def show
    @job = Job.find_by(id: params[:id])
  end

  private
  def job_params
    params.require(:job).permit(:title, :description)
  end

end

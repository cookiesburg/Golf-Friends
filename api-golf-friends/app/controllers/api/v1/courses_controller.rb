module Api::V1
  class CoursesController < ApplicationController
    def index
      @courses = Course.all
      render json: @courses
    end

    def create
      @course = Course.create(course_params)
      render json: @course
    end

    def show
      @course = Course.find(params[:id])
      render json: @course
    end

    def update
      @course = Course.find(params[:id])
      @course.update_attributes(course_params)
      render json: @course
    end

    private

    def course_params
      params.require(:course).permit(:name, :rating, :slope)
    end

  end
end

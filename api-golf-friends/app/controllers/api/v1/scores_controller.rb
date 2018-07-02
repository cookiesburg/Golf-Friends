
module Api::V1
  class ScoresController < ApplicationController


    def index
      @scores = Score.order("created_at DESC")
      render json: @scores, each_serializer: ScoreSerializer
    end

    def create
      @score = Score.create(score_params)
      render json: @score
    end

    def show
      @score = Score.find(params[:id])
      render json: @score, each_serializer: ScoreSerializer
    end

    def update
      @score = Score.find(params[:id])
      @score.update_attributes(score_params)
      render json: @score
    end

    private

    def score_params
      params.require(:score).permit(:strokes, :user_id, :course_id, :isNine)
    end

  end
end

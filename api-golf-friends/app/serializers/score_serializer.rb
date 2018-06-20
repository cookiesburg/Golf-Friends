class ScoreSerializer < ApplicationSerializer
  attributes :strokes, :created_at, :user_id, :course_id
  has_one :course
end

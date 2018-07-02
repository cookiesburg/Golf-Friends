class ScoreSerializer < ApplicationSerializer
  attributes :strokes, :created_at, :user_id, :course_id, :isNine
  has_one :course
end

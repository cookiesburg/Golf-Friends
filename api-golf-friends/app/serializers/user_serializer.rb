class UserSerializer < ApplicationSerializer
  attributes :id, :name
  has_many :scores
end

class AddNineToScores < ActiveRecord::Migration[5.1]
  def change
    add_column :scores, :nine?, :boolean
  end
end

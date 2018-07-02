class RenameColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :scores, :nine?, :isNine
  end
end

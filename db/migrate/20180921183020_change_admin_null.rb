class ChangeAdminNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :admin, true
  end
end

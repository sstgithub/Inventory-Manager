class RemoveTypeIdFromAttribs < ActiveRecord::Migration
  def change
    remove_column :attribs, :type_id, :integer
  end
end

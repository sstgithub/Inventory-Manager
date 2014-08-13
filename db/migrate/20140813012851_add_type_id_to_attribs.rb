class AddTypeIdToAttribs < ActiveRecord::Migration
  def change
    add_column :attribs, :type_id, :integer
  end
end

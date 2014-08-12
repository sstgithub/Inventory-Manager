class CreateAttributes < ActiveRecord::Migration
  def change
    create_table :attributes do |t|
      t.integer :type_id
      t.string :attr_name
      t.string :attr_value
      t.boolean :attr_req

      t.timestamps
    end
  end
end

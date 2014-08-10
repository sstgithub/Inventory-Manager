class CreateTypes < ActiveRecord::Migration
  def change
    create_table :types do |t|
      t.string :type_name
      t.string :metal_name
      t.integer :quantity

      t.timestamps
    end
  end
end

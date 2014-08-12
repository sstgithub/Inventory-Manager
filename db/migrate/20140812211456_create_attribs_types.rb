class CreateAttribsTypes < ActiveRecord::Migration
  def change
    create_table :attribs_types, id: false do |t|
    	t.belongs_to :attrib
    	t.belongs_to :type
    end
  end
end

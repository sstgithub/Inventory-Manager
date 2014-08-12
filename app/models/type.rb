class Type < ActiveRecord::Base
	validates :type_name, :presence => true, :uniqueness => true
	validates :metal_name, :presence => true
	validates :quantity, :presence => true

	has_and_belongs_to_many :attribs
end

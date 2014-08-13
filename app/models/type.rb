class Type < ActiveRecord::Base
	validates :type_name, :presence => true, :uniqueness => true
	validates :metal_name, :presence => true
	validates :quantity, :presence => true

	has_many :attribs
end

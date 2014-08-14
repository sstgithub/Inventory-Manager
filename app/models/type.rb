class Type < ActiveRecord::Base
	validates :type_name, :presence => true
	validates :metal_name, :presence => true
	validates_uniqueness_of :metal_name, scope: :type_name
	validates :quantity, :presence => true

	has_many :attribs
end

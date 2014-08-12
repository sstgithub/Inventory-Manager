class Attrib < ActiveRecord::Base
	# validates :type_id, :presence => true
	validates :attr_name, :presence => true
	validates :attr_value, :presence => true
	# belongs_to :type

	has_and_belongs_to_many :types
end

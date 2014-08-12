class Attrib < ActiveRecord::Base
	# validates :type_id, :presence => true
	validates :attr_name, :presence => true
	validates :attr_value, :presence => true
	# belongs_to :type
end

class TypeSerializer < ActiveModel::Serializer
	embed :ids, include: true

  attributes :id, :type_name, :metal_name, :quantity
  has_many :attributes
end

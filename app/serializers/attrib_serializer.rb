class AttribSerializer < ActiveModel::Serializer
	embed :ids, include: true

  attributes :id, :attr_name, :attr_value, :attr_req
  has_many :types
end

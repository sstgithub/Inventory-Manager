class AttribSerializer < ActiveModel::Serializer

  attributes :id, :type_id, :attr_name, :attr_value, :attr_req
  # has_many :types
  # belongs_to :type
end

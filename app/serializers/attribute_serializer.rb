class AttribSerializer < ActiveModel::Serializer
  attributes :id, :attr_name, :attr_value, :attr_req
end

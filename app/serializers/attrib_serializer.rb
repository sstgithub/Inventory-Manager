class AttribSerializer < ActiveModel::Serializer
  attributes :id, :type_id, :attr_name, :attr_value, :attr_req
end

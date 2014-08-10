class TypeSerializer < ActiveModel::Serializer
  attributes :id, :type_name, :metal_name, :quantity
end

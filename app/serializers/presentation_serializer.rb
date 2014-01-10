class PresentationSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author
end

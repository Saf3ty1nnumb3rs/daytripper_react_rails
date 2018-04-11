class Destination < ApplicationRecord
    has_many :images, dependent: :destroy
    has_many :posts, dependent: :destroy
end

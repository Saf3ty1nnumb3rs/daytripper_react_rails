class User < ApplicationRecord
    has_many :destinations, :through => :posts
end

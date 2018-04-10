class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :subject
      t.string :image
      t.string :content
      t.references :destination, foreign_key: true

      t.timestamps
    end
  end
end

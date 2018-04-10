class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :image
      t.string :description
      t.references :destination, foreign_key: true

      t.timestamps
    end
  end
end

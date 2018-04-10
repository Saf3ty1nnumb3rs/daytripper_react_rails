class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :image
      t.string :username
      t.string :email
      t.string :location

      t.timestamps
    end
  end
end

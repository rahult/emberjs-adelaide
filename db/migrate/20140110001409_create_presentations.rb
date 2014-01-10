class CreatePresentations < ActiveRecord::Migration
  def change
    create_table :presentations do |t|
      t.string :title
      t.text :description
      t.string :author

      t.timestamps
    end
  end
end

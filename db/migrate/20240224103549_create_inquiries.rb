class CreateInquiries < ActiveRecord::Migration[7.1]
  def change
    create_table :inquiries do |t|
      t.string :name
      t.string :email
      t.string :category
      t.text :message

      t.timestamps
    end
  end
end

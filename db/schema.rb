# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170913202029) do

  create_table "drinks", force: :cascade do |t|
    t.string "title", null: false
    t.string "category"
    t.string "glass"
    t.string "instructions", null: false
    t.string "image"
    t.string "ingredient1", null: false
    t.string "measure1", null: false
    t.string "ingredient2"
    t.string "measure2"
    t.string "ingredient3"
    t.string "measure3"
    t.string "ingredient4"
    t.string "measure4"
    t.string "ingredient5"
    t.string "measure5"
    t.string "ingredient6"
    t.string "measure6"
    t.string "ingredient7"
    t.string "measure7"
    t.string "ingredient8"
    t.string "measure8"
    t.string "ingredient9"
    t.string "measure9"
    t.string "ingredient10"
    t.string "measure10"
  end

end

require 'rails_helper'

feature "Authenticated users can delete their account" do

  let!(:user) do
    User.create(
      username: 'Patrikku',
      password: '123456',
      profile_photo: "http://i.imgur.com/jluf593.jpg",
      email: 'patrick.dennis.farley@gmail.com'
    )
  end

  scenario "user deletes account successfully" do
    visit new_user_session_path
    fill_in "Password", with: "123456"
    fill_in "Email", with: "patrick.dennis.farley@gmail.com"

    click_button "Log in"

    click_on "Edit Profile"

    expect(page).to have_content "Edit User"

    click_link "Delete my account"

    expect(page).to have_content "Your account has been successfully cancelled."
    expect(page).to have_content "Frugal Fashion Tracker"
  end
end

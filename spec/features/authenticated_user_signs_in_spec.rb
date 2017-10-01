require "rails_helper"

feature "Authenticated user can sign in" do
  scenario "Authenticated user signs in successfully" do
    User.create(
      username: 'Patrikku',
      password: '123456',
      profile_photo: "http://i.imgur.com/jluf593.jpg",
      email: 'patrick.dennis.farley@gmail.com'
    )
    visit new_user_session_path
    expect(page).to have_content "Log in"

    fill_in "Password", with: "123456"
    fill_in "Email", with: "patrick.dennis.farley@gmail.com"

    click_button "Log in"

    expect(page).to have_content "Signed in successfully"
    expect(page).to have_content "Frugal Fashion Tracker"
  end

  scenario "Authenticated user does not provide proper information to log in" do
    visit new_user_session_path
    expect(page).to have_content "Log in"

    click_button "Log in"

    expect(page).to have_content "Invalid Email or password."

  end
end

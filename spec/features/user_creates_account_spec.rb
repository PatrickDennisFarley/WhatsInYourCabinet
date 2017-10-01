require "rails_helper"

feature "New users can create an account" do
  scenario "New user creates account successfully" do

    visit new_user_registration_path
    expect(page).to have_content "Sign Up"

    fill_in "Username", with: "Patrikku"
    fill_in "Password", with: "123456"
    fill_in "Password confirmation", with: "123456"
    fill_in "Email", with: "patrick.dennis.farley@gmail.com"
    attach_file "Profile photo",
      "#{Rails.root}/spec/support/images/stay-classy-ron-burgundy-294x300.jpg"

    click_button "Sign up"

    expect(page).to have_content "You have signed up successfully"
    expect(page).to have_content "Frugal Fashion Tracker"
  end

  scenario "New user does not provide proper information to create"\
  " a new account" do

    visit new_user_registration_path
    expect(page).to have_content "Sign Up"

    click_button "Sign up"

    expect(page).to have_content "Username can't be blank"
    expect(page).to have_content "Email can't be blank"
    expect(page).to have_content "Password can't be blank"
  end
end

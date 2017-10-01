require "rails_helper"

feature "Authenticated user can update their profile information" do

  let!(:user) do
    User.create(
      username: 'Patrikku',
      password: '123456',
      profile_photo: "http://i.imgur.com/jluf593.jpg",
      email: 'patrick.dennis.farley@gmail.com'
    )
  end

  scenario "Authenticated user updates their profile information" do
    visit root_path

    click_on "Log In"

    fill_in "Password", with: "123456"
    fill_in "Email", with: "patrick.dennis.farley@gmail.com"

    click_button "Log in"

    click_on "Edit Profile"

    expect(page).to have_content "Edit Profile"
    expect(page).to have_content "Username"
    expect(page).to have_content "Password"
    expect(page).to have_content "Profile photo"
    expect(page).to have_content "Email"

    fill_in "Current password", with: "123456"

    expect(page).to have_field("Username", with: user.username)
    expect(page).to have_field("Email", with: user.email)

    click_button "Update"

    expect(page).to have_content "Your account has been updated successfully"
  end
end

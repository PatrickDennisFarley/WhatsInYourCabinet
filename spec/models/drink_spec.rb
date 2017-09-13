require 'rails_helper'

describe Drink, type: :model do

  it { should have_valid(:title).when('Manhattan', 'Moscow Mule') }
  it { should_not have_valid(:title).when(nil, '') }

  it { should have_valid(:instructions).when('Mix bourbon red vermouth and bitters then top with cherry', 'mix ice vodka lime and ginger') }
  it { should_not have_valid(:instructions).when(nil, '') }

  it { should have_valid(:ingredient1).when('Bourbon', 'Vodka') }
  it { should_not have_valid(:ingredient1).when(nil, '') }

  it { should have_valid(:measure1).when('3oz', '2oz') }
  it { should_not have_valid(:measure1).when(nil, '') }

end

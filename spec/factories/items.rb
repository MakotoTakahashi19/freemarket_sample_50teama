FactoryBot.define do
  factory :item do
    name          {"シューズ"}
    condition     {"new_one"}
    delivery_cost  {"exhibitr_barden"}
    delivery_day {"a_day"}
    price         {"1000"}
    buyer_id      {"1"}
    detail        {"靴です"}
    delivery_prefecture     {"hokkaido"}
    delivery_method       {"undicided"}
  end
end

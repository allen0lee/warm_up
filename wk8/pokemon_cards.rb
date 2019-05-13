cards = [
    {:name => "Pikachu", :attack => 40 },
    {:name => "Rattata", :attack => 20 },
    {:name => "Pidgeot", :attack => 60 },
    {:name => "Alakazam", :attack => 80 },
    {:name => "Butterfree", :attack => 30 },
    {:name => "Gengar", :attack => 70 },
    {:name => "Moltres", :attack => 100 },
    {:name => "Vulpix", :attack => 40 },
    {:name => "Blastoise", :attack => 80 },
    {:name => "Hitmonchan", :attack => 50 }
]

p cards.reverse

p cards.reverse.slice(0, 3)
p cards.reverse.slice(3, 3)
p cards.reverse.slice(6, 3)
p cards.reverse.slice(9, 1)


p alfred_cards = cards.reverse.slice(0, 3)
p peter_cards = cards.reverse.slice(3, 3)


puts cards.reverse.each_slice(3) # --> Enumerator
p cards.reverse.each_slice(3).to_a
puts "########"
p split_cards = cards.reverse.each_slice(3).to_a
p alfred_cards = split_cards[0]
p peter_cards = split_cards[1]
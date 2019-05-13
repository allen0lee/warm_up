# 2a) Firstly, keeping the cards faced down (so they cannot see), 
# they reverse the order of the cards.

# 2b) They then split the cards into groups of 3, 
# so they end up with 4 piles of cards (the first three with 3, 
# and the last pile with just 1)

# 2c) Alfred takes the first pile of cards, and Peter takes the second pile. 
# Create a new data structure for Alfred and Peter and pass them the cards.

# extension: 2d) At this point only two piles of cards are leftover, one with 3 cards, 
# and one with 1 card. They decide to arm-wrestle once, where the winner 
# gets the pile with 3 cards, and the loser gets the remaining pile. 
# Historically Alfred wins 7 out of 10 times, so write code that decides 
# which pile each person gets.

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


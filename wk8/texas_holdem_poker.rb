# Input:
# You will be asked how many players 2 to 8. You will always be one of the players 
# and you are facing 1 to 7 other computer controlled players.

# Output:
# Display the 2 cards each player is dealt and the display the 5 community cards. 
# Format is left up to you. 
# (The exact method of the output a card. For my examples I am using verbal words but 
#     someone might use unicode symbols for the card suit or other. You design 
#     this as long as we can tell the cards apart it is all good)

# Extension
# In the intermediate you will be asked to compare various hands of poker to find 
# which hand is the winning hand.

require 'pry'

@cards = [
    {:suit => 'Diamond', :value => "2"},
    {:suit => 'Diamond', :value => "3"},
    {:suit => 'Diamond', :value => "4"},
    {:suit => 'Diamond', :value => "5"},
    {:suit => 'Diamond', :value => "6"},
    {:suit => 'Diamond', :value => "7"},
    {:suit => 'Diamond', :value => "8"},
    {:suit => 'Diamond', :value => "9"},
    {:suit => 'Diamond', :value => "10"},
    {:suit => 'Diamond', :value => "Jack"},
    {:suit => 'Diamond', :value => "Queen"},
    {:suit => 'Diamond', :value => "King"},
    {:suit => 'Diamond', :value => "Ace"},
    {:suit => 'Club', :value => "2"},
    {:suit => 'Club', :value => "3"},
    {:suit => 'Club', :value => "4"},
    {:suit => 'Club', :value => "5"},
    {:suit => 'Club', :value => "6"},
    {:suit => 'Club', :value => "7"},
    {:suit => 'Club', :value => "8"},
    {:suit => 'Club', :value => "9"},
    {:suit => 'Club', :value => "10"},
    {:suit => 'Club', :value => "Jack"},
    {:suit => 'Club', :value => "Queen"},
    {:suit => 'Club', :value => "King"},
    {:suit => 'Club', :value => "Ace"},
    {:suit => 'Heart', :value => "2"},
    {:suit => 'Heart', :value => "3"},
    {:suit => 'Heart', :value => "4"},
    {:suit => 'Heart', :value => "5"},
    {:suit => 'Heart', :value => "6"},
    {:suit => 'Heart', :value => "7"},
    {:suit => 'Heart', :value => "8"},
    {:suit => 'Heart', :value => "9"},
    {:suit => 'Heart', :value => "10"},
    {:suit => 'Heart', :value => "Jack"},
    {:suit => 'Heart', :value => "Queen"},
    {:suit => 'Heart', :value => "King"},
    {:suit => 'Heart', :value => "Ace"},
    {:suit => 'Spade', :value => "2"},
    {:suit => 'Spade', :value => "3"},
    {:suit => 'Spade', :value => "4"},
    {:suit => 'Spade', :value => "5"},
    {:suit => 'Spade', :value => "6"},
    {:suit => 'Spade', :value => "7"},
    {:suit => 'Spade', :value => "8"},
    {:suit => 'Spade', :value => "9"},
    {:suit => 'Spade', :value => "10"},
    {:suit => 'Spade', :value => "Jack"},
    {:suit => 'Spade', :value => "Queen"},
    {:suit => 'Spade', :value => "King"},
    {:suit => 'Spade', :value => "Ace"}
]

def remove_card(card) 
    @cards.delete(card)
end



# $suits = ['Diamond', 'Club', 'Heart', 'Spade']
# $cards = (2..10).to_a.concat(['Jack', 'Queen', 'King', 'Ace'])

# p $suits.product($cards)

def display_cards(num_of_players)
    your_card_one = @cards.sample
    remove_card(your_card_one)
    your_card_two = @cards.sample
    remove_card(your_card_two)

    puts "You hand: #{your_card_one[:value]} of #{your_card_one[:suit]}, #{your_card_two[:value]} of #{your_card_two[:suit]} "

    2.upto(num_of_players) do |num_of_players|
        cpu_card_one = @cards.sample
        remove_card(cpu_card_one)
        cpu_card_two = @cards.sample
        remove_card(cpu_card_two)

        puts "CPU #{num_of_players - 1} Hand: #{cpu_card_one[:value]} of #{cpu_card_one[:suit]}, #{cpu_card_two[:value]} of #{cpu_card_two[:suit]}"
    end

    flop_one = @cards.sample
    remove_card(flop_one)
    flop_two = @cards.sample
    remove_card(flop_two)
    flop_three = @cards.sample
    remove_card(flop_three)

    puts "Flop: #{flop_one[:value]} of #{flop_one[:suit]}, #{flop_two[:value]} of #{flop_two[:suit]}, #{flop_three[:value]} of #{flop_three[:suit]}"
    
    turn = @cards.sample
    remove_card(turn)
    
    puts "Turn: #{turn[:value]} of #{turn[:suit]}"

    river = @cards.sample
    remove_card(river)

    puts "River: #{river[:value]} of #{river[:suit]}"
end

print "How many players (2-8) ? "
num_of_players = gets.chomp.to_i

# p num_of_players

display_cards(num_of_players)



# binding.pry
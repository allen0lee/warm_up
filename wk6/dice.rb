# Write a program using classes to generate a standard dice roll.

# Dice.roll
# # => 6
# Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem

# It should give you a different result each time.

# Dice.roll
# # => 5
# Dice.roll
# # => 2
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

# Dice.roll(3)
# # => [2,5,1]

# Extension
# Write a method called total you can chain directly after Dice.roll(n), and will return you the dice and the total, like so:
# Dice.roll(4).total
# # => [[6,3,2,4], 15]


require 'pry'

class Dice
    def self.roll(number)
        @results = []
        while number > 0
            @results.push(rand(1..6))
            number = number - 1
        end
        # p @results
        Dice # self
    end

    def self.total
        [@results, @results.sum]
    end
end


p Dice.roll(3).total


# binding.pry
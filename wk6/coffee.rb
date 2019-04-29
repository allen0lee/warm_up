require 'pry'

class Coffee
    attr_accessor :name, :coffee_name, :size, :num_of_sugar

    def initialize(name, coffee_name, size, num_of_sugar)
        @name = name
        @coffee_name = coffee_name
        @size = size
        @num_of_sugar = num_of_sugar
    end

    def to_s # overwrite the to_s method
        "#{@name}'s #{@coffee_name}, #{@size}, #{@num_of_sugar} sugars"
    end
end

c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
puts c1

puts c1.name
puts c1.coffee_name
puts c1.size
puts c1.num_of_sugar

#binding.pry
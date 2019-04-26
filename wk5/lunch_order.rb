# $orders = {
#     "a_name" => {
#       :order_name => "",
#      :items => []
#     }
#     "new_name" => {
#        :order_name => "",
#       :items => []
#     }
# }

require 'pry'


$orders = {}

def add_new_person_order(name) # a new person
    $orders[name] = {
        #:order_name  => name,
        :items => []
    }
end



def add_order_item(name, item)
    $orders[name][:items].push(item)
end

# def display_order(name)
#     #"Name: #{$orders[name].to_s}"  # this is a key, points to value
#     "Name: #{name}" + "\n" +
#     "Items: #{$orders[name][:items]}"
# end



quit = false

while quit == false do
    print("Name for order: ")
    name = gets.chomp
    
    if  $orders.key?(name) == false # if a new person, call this again
        add_new_person_order(name)    # create :items => [] again
    end

    print("#{name} wants to order: ")
    item = gets.chomp

    #binding.pry

    add_order_item(name, item)

    
    puts display_order
    

    puts("Add another item to the order? (y/n)")
    choice = gets.chomp
    if choice == "n"
        quit = true
    end

    
end

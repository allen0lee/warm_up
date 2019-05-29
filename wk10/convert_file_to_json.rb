require 'pry'

@file_lines = []

file = File.open("data.txt", "r") do |file|
  file.each do |line|
      # puts line
      @file_lines.push(line.split(','))
  end
end

@customers = []
@products = []
@unitsPrices = []
@units = []
@totalPrices = []

@file_lines.shift

@file_lines.each do |line|
  @customers.push(line[0])
end

@file_lines.each do |line|
  @products.push(line[1])
end

@file_lines.each do |line|
  @unitsPrices.push(line[2])
end

@file_lines.each do |line|
  @units.push(line[3].chomp)
end

@file_lines.each do |line|
  # p (line[2].to_f) * (line[3].chomp.to_i)
  @totalPrices.push(((line[2].to_f) * (line[3].chomp.to_i)).to_s)
end

# a = { 'like_count' => 24 }.to_json

@output = {}

# @customers.each do |customer|
#   @output[customer] = []
# end

# @customers.each_with_index do |customer, index|
#   @output[customer] = [
#     {
#       'product' => @products[index],
#       'unitPrice' => @unitsPrices[index],
#       'units' => @units[index],
#       'totalPrice' => @totalPrices[index]
#     }
#   ]
# end

@hash_array = []

@customers.each_with_index do |customer, index|
  @hash_array.push(
    customer => {
      'product' => @products[index],
      'unitPrice' => @unitsPrices[index],
      'units' => @units[index],
      'totalPrice' => @totalPrices[index]
    }
  )
end

# @hash_array[0]["Alica Brereton"] -->
# {"product"=>"Marijuana",
#   "unitPrice"=>"9.18",
#   "units"=>"50",
#   "totalPrice"=>"459.0"
# }

@customers.each_with_index do |customer, index|
  # puts @hash_array[index][customer] # array of 8 hashes
  
  # puts customer => [@hash_array[index][customer]]
  
  # @output[customer] = [@hash_array[index][customer]]   # keys cannot be repeated, how to solve that?

  @output[customer] = [] # length of 5
end

@hash_array[0].keys # -> ["Alica Brereton"]

@customers.each_with_index do |customer, index|
  if @hash_array[index].keys.join == customer
    @output[customer].push(@hash_array[index][customer])
  end
end

puts @output.to_json

binding.pry
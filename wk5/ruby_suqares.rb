def get_squares(numbers)
    result = []
    numbers.each do |element|
        if ((Math.sqrt(element)) % 1).zero?
            result.push(element)
        end
    end
    return result.sort.uniq
end

p get_squares([4, 1, 16, 1, 10, 35, 22])
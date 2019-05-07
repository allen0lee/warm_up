def even_multiples(list_of_numbers) 
    results = []
    list_of_numbers.each do |x|
        if (x.even?) && (x % 5 == 0)
            results.push(x)
        end
    end
    results
end

p even_multiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5])
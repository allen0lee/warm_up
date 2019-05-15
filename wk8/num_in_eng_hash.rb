require 'pry'

class Say

  def initialize(num)
    @number = num
  end

  def in_english
    raise ArgumentError, 'Number must be between 0 and 99, inclusive.' unless ((@number >= 0) && (@number<=99))
    
    look_up = {
      0 => "zero",
      1 => "one",
      2 => "two",
      3 => "three",
      4 => "four",
      5 => "five",
      6 => "six",
      7 => "seven",
      8 => "eight",
      9 => "nine",
      10 => "ten",
      11 => "eleven",
      12 => "twelve",
      13 => "thirteen",
      14 => "fourteen",
      15 => "fifteen",
      20 => "twenty",
      30 => "thirty",
      40 => "forty",
      50 => "fifty",
      60 => "sixty",
      70 => "seventy",
      80 => "eighty",
      90 => "ninety"
    }

    tens = @number / 10 * 10
    ones = @number % 10

    if (@number >= 0) && (@number <= 15)
      result = look_up[@number]
    elsif (@number >= 16) && (@number <= 19)
      result = look_up[ones] + "teen"
    elsif (@number >= 20) && (@number <= 99)
      if ones == 0
        result = look_up[tens]
      else
        result = look_up[tens] + look_up[ones]
      end
    else
      puts "How the hell did you get here?"
    end

    return result
  end

end

binding.pry
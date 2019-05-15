# Write a program that will take a number from 0 to 99 and spell out 
# that number in English.
require 'pry'

class Say
    def initialize(number)
        @number = number
    end

    def remainder_in_english(remainder) 
        case remainder
        when 1
            "one"
        when 2
            "two"
        when 3
            "three"
        when 4
            "four"
        when 5
            "five"
        when 6
            "six"
        when 7
            "seven"
        when 8
            "eight"
        when 9
            "nine"
        end
    end

    def in_english
        if @number.to_s.length > 2 # over 99
            "out of range 0-99"
        elsif @number.to_s.split('').first == "-" # negative num
            "out of range 0-99"
        else
            case @number.to_s.split('').first
            when "0"
                "zero"
            when "1"
                if @number % 10 == 0
                    "ten"
                elsif @number % 10 == 1
                    if @number.to_s.length == 1
                        "one"
                    elsif @number.to_s.length == 2
                        "eleven"
                    end
                elsif @number % 10 == 2
                    if @number.to_s.length == 1
                        "two"
                    elsif @number.to_s.length == 2
                        "twelve"
                    end
                elsif @number % 10 == 3
                    if @number.to_s.length == 1
                        "three"
                    elsif @number.to_s.length == 2
                        "thirteen"
                    end
                elsif @number % 10 == 4
                    if @number.to_s.length == 1
                        "four"
                    elsif @number.to_s.length == 2
                        "fourteen"
                    end
                elsif @number % 10 == 5
                    if @number.to_s.length == 1
                        "five"
                    elsif @number.to_s.length == 2
                        "fifteen"
                    end
                elsif @number % 10 == 6
                    if @number.to_s.length == 1
                        "six"
                    elsif @number.to_s.length == 2
                        "sixteen"
                    end
                elsif @number % 10 == 7
                    if @number.to_s.length == 1
                        "seven"
                    elsif @number.to_s.length == 2
                        "seventeen"
                    end
                elsif @number % 10 == 8
                    if @number.to_s.length == 1
                        "eight"
                    elsif @number.to_s.length == 2
                        "eighteen"
                    end
                elsif @number % 10 == 9
                    if @number.to_s.length == 1
                        "nine"
                    elsif @number.to_s.length == 2
                        "nineteen"
                    end
                end
            when "2"
                if @number % 10 == 0
                    "twenty"
                else
                    "twenty-#{remainder_in_english(@number % 10)}"
                end
            when "3"
                if @number % 10 == 0
                    "thirty"
                else
                    "thirty-#{remainder_in_english(@number % 10)}"
                end
            when "4"
                if @number % 10 == 0
                    "forty"
                else
                    "forty-#{remainder_in_english(@number % 10)}"
                end
            when "5"
                if @number % 10 == 0
                    "fifty"
                else
                    "fifty-#{remainder_in_english(@number % 10)}"
                end
            when "6"
                if @number % 10 == 0
                    "sixty"
                else
                    "sixty-#{remainder_in_english(@number % 10)}"
                end
            when "7"
                if @number % 10 == 0
                    "seventy"
                else
                    "seventy-#{remainder_in_english(@number % 10)}"
                end
            when "8"
                if @number % 10 == 0
                    "eighty"
                else
                    "eighty-#{remainder_in_english(@number % 10)}"
                end
            when "9"
                if @number % 10 == 0
                    "ninety"
                else
                    "ninety-#{remainder_in_english(@number % 10)}"
                end
            end

        end
 
    end
end

binding.pry
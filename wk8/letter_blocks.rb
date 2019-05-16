require 'pry'

def can_make_word(word)
    letter_blocks = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
    ]

    # blocks_origin_length = letter_blocks.length
    create_word = []

    word.chars.each do |letter|
        letter_blocks.each do |block|
            if block.include?(letter)
                letter_blocks.delete(block) # need to delete used blocks because of loop through

                create_word.push(letter)
                break
            # else
            #     next
            end
        end
    end

    # if letter_blocks.length == blocks_origin_length - word.length
    if word == create_word.join
        true
    else
        false
    end 
end


p can_make_word("A")
# => true

# binding.pry

p can_make_word("BARK")
# => true
p can_make_word("BOOK")
# => false
p can_make_word("TREAT")
# => true
p can_make_word("COMMON")
# => false
p can_make_word("SQUAD")
# => true
p can_make_word("CONFUSE")
# => true
p can_make_word("BOUGHT")
# => false


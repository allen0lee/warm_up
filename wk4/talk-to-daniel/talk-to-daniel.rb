# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question. 
# He answers 'Whatever.' if you tell him something. 
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS). 
# He says 'Fine. Be that way!' if you address him without actually saying anything.

# Write code in ruby so that you can have an interactive conversation with Daniel. 
# Make sure you include some testing in order to verify your code.

def talk_to_daniel(sentence)  
    if sentence.empty? == false   
        if sentence[-1] == "?" && sentence != sentence.upcase  # is a question
            puts "Sure"    
        elsif sentence == sentence.upcase
            puts "Woah, chill out!"
        elsif sentence != sentence.upcase
            puts "Whatever"
        end
    elsif sentence.empty? == true 
    #else
        puts "Fine. Be that way!"
    end
end

print("Talk to Daniel: ")
sentence = gets.chomp.to_s

while sentence
    talk_to_daniel(sentence)
    print("Talk to Daniel again: ")
    sentence = gets.chomp.to_s
end
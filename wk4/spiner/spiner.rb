def spiner(sentence) 
    if sentence.split('').detect {|e| e == "_"}   
        sentence.downcase.gsub('_', '-')        # only have '-'
        #sentence.downcase.gsub(' ', '-')
    else
        sentence.downcase.split(' ').join('-')  #only have space
        # if sentence.split('').detect {|e| e == "_"} 
        #     sentence.downcase.gsub('_', '-') 
        # end
    end
    
end

p spiner("All Lowercase Words Joined By Dashes")
p spiner("The_Andy_Griffith_Show")
p spiner("All Lowercase Words Joined By Dashes The_Andy_Griffith_Show")
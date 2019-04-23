# Write a program to decode this message:

# FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

# This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.

# The alphabet is normally:

# ABCDEFGHIJKLMNOPQRSTUVWXYZ

# The alphabet with the shift parameter of 3 is now as follows:

# DEFGHIJKLMNOPQRSTUVWXYZABC

# Extension:
# Write the program to encode plain text into messages.

# CaesarCipher.encode('TWO SYMBOLS KISSING EACH OTHER')
# Extension 2:
# Write the program to encode it with any shift parameter.

# Send each other secret messages.

# https://codereview.stackexchange.com/questions/35317/caesar-cipher-in-ruby


@alphabet = ('A'..'Z').to_a.join # join the array to 'abc..z'
@encrypt = @alphabet[3..-1] + @alphabet[0...3] # 'def..z' + 'abc' = 'def...zabc' 

def decryption(input_string)
    input_string.tr(@encrypt, @alphabet)
end

message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH."

p decryption(message).downcase

def encryption(input_string)
    input_string.tr(@alphabet, @encrypt)
end

message1 = "TWO SYMBOLS KISSING EACH OTHER."

p encryption(message1)

#########################################################
def initialize(shift, alphabet = ('a'..'z').to_a.join)
    i = shift % alphabet.size 
    @decrypt = alphabet
    @encrypt = alphabet[i..-1] + alphabet[0...i]
end
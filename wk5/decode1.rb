def decode (message)
    message_chars = message.split("")
    alphabet = ("A".."Z").to_a
    crypto_chars = ("D".."Z").to_a.concat(("A".."C").to_a)
    result_chars = []
    message_chars.each do |char|
      if crypto_chars.index(char) == nil  # deal with spaces special characters and punctuations
        result_chars.push(char)           # cannot match them in crypto_chars
      else
        crypto_chars_index = crypto_chars.index(char)
        result_chars.push(alphabet[crypto_chars_index])
      end
    end
    result = result_chars.join("")
    return result
  end
  
  p decode("FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.")
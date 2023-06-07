# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


def check_if_even number
    if number.even?
        "#{number} is even"
    else
        "#{number} is odd"
    end 
end

reposts1 = 7
p check_if_even reposts1
# Expected output: '7 is odd'
reposts2 = 42
p check_if_even reposts2
# Expected output: '42 is even'
reposts3 = 221
p check_if_even reposts3
# Expected output: '221 is odd'


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def delete_the_vowels word 
    word.delete('aeiouAEIOU')  
end




beatles_album1 = 'Rubber Soul'
p delete_the_vowels beatles_album1
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
p delete_the_vowels beatles_album2
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
p delete_the_vowels beatles_album3
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.


def check_if_palindrome word
    if word.downcase.reverse.delete(" ") == word.downcase.delete(" ")
        "#{word} is a palindrome"
    else
        "#{word} is not a palindrome"
    end
end



palindrome_test_case1 = 'Racecar'
p check_if_palindrome palindrome_test_case1
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
p check_if_palindrome palindrome_test_case2
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
p check_if_palindrome palindrome_test_case3
# Expected output: 'Rotator is a palindrome'


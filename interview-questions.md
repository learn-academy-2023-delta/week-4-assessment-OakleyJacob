# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is a way of thinking, and talking about software development. It allows developers to group "objects" together by their information, behavior, and other attributes. Functional programming is more of the old school approach where we thinking of code more procedurally.

Researched answer: OOP is able to work with mutable data while functional relies on static, or immutable data. Though alot of the concepts are very similar, seperation of concerns and the tools we use to achieve programming goasl, the two approaches are different. OOP boasts more ability to encapuslate code for devs while not allowing for parallel programing, to name a few differences.

2. What is the difference between a Float and an Integer in Ruby?

Your answer:An integer is a whole number, while a float is an integer value.

Researched answer: Integers take up less memory than floats, which makes sense. Integers can also belong to two subclasses, Bignum and Fixnum, depending on the size of the value. Conversely, float values can only belong to the Float class.

3. Ruby has an implicit return. What does that mean?

Your answer: The last executable line of code within a ruby block will automatically be returned when the block is called, with no need for a return keyword.

Researched answer: There are still uses for the return keyword, such as short circuiting a method or block.

4. What is a block in Ruby?

Your answer:Blocks are simply executable snippets of code. Some languages refer to similar tools as methods or functions.

Researched answer: We can use the yield keyword to pass executable blocks into functions, effectively creating our own higher order functions.

5. How do you extract a single value from a Ruby hash? 

Your answer: You access the value using it's associated key. If you did not know the key I'm going to guess youd have to use a built in method to search the hash for the value, which would probably return the key, then use that to easily access the value.

Researched answer: In addition to bracket notation, we can also use the fetch method to retrieve an unknown value with a key. If we know the value but not the key we can use the .key method to get that information.

## Looking Ahead: Terms for Next Week

1. RSpec:This is a testing platform for ruby.

2. Test-driven development: TDD is the practice of writing tests first. Then writing methods that can pass the test. We have been practicing this paradigm with red, green, refactor.

3. PostgreSQL:PostgreSQL is one of many relational databases. It is popular due to its advanced features, including classic SQL syntax and the ability to handle JSON(javascript object notation) data.

4. CRUD: An acronym that stands for Create, Read, Update, Delete. These are the four things a developer will typically need to do when working with data.

5. HTTP:Another acronym that stands for Hyper-text-transfer-protocol. This is a set of rules that allow computer programs to exchange data and talk to one another through the internet.

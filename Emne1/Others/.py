from random import*

word = str(input('word=')).lower()
wordList = list()

def wovelCounter(word):
    vowelsList = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å']
    vowelCount = 0
    # vowelCount = sum(1 for letter in word if letter in vowelsList)
    for letter in word:
        if letter in vowelsList:
            vowelCount += 1
            print(letter)
    return vowelCount

def wordReverse(word):
    return word[::-1]

def loop():
    a = 0
    b = 1
    while a != b:
        a = randint(0,10)
        b = randint(0,10)
        print(a, b)
    else:
        return a, b

print(wovelCounter(word))
print(wordReverse(word))
print(loop())
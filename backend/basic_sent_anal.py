import sys
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

user_input = sys.argv[1].lower().strip().replace('"', '')

sentence = user_input

concern_phrases = ["i want to die","kill myself","slit my wrists","cut myself","go to sleep forever"," dont want to go on living"]

def getRes(sent, ph):
    sentHash = dict()

    for s in range(1, len(sent)+1):
        sentHash[s] = set(sent[s-1].split())

    for p in range(0, len(ph)):

        wordList = ph[p].split()
        res = []

        for s in range(1, len(sentHash)+1):
            wCount = len(wordList)

            for w in wordList:
                if w in sentHash[s]:
                    wCount -= 1

            if wCount == 0:

                res.append(s)
        if(len(res) == 0):
            continue
        else:
            return 1
    return 0

concern_flag = getRes([sentence],concern_phrases)

sentiment_object = SentimentIntensityAnalyzer()

sentiment_attributes = sentiment_object.polarity_scores(sentence)
rating = sentiment_attributes['compound']-0.005

bin_rating = None
if rating <= 0:
    bin_rating = "0"
elif rating > 0:
    bin_rating = "1"

print(str(bin_rating))
print(str(concern_flag))

print(str(user_input))


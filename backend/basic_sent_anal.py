import sys
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

user_input = sys.argv[1]

sentence = user_input

sentiment_object = SentimentIntensityAnalyzer()

sentiment_attributes = sentiment_object.polarity_scores(sentence)
rating = sentiment_attributes['compound']+0.001

bin_rating = None
if rating < 0:
    bin_rating = "0"
elif rating > 0:
    bin_rating = "1"

print(str(bin_rating))
#print(concern_flag)

#sys.stdout.flush()



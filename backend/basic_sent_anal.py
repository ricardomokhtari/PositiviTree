from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

sentence = "i hate myself"

sentiment_object = SentimentIntensityAnalyzer()

sentiment_attributes = sentiment_object.polarity_scores(sentence)

print(sentence)
print("sentence was rated as ", round(sentiment_attributes['pos']*100), "% Positive") 
print("Overall sentiment dictionary is : ", sentiment_attributes) 
print("sentence was rated as ", round(sentiment_attributes['neg']*100), "% Negative") 
print("sentence was rated as ", round(sentiment_attributes['neu']*100), "% Neutral") 
print("sentence was rated as ", round(sentiment_attributes['pos']*100), "% Positive") 
print("sentence was rated as ", round(sentiment_attributes['compound']*100), "% Overall") 

 

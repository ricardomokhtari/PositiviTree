import sys
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import spacy 
from spacy.matcher import Matcher

user_imput = sys.argv[1]

sentence = user_input

nlp = spacy.load('en_core_web_sm')
concern_phrases = ['i want to die', 'going to kill myself','cut myself','slit my wrists','go to sleep forever','kill myself','commit suicide']

p_list = []

for phrase in concern_phrases:
    words = phrase.split(' ',-1)
    p = []
    for word in words:
        word_dict = {'LOWER':word}
        p.append(word_dict)
    p_list.append(p)


m_tool = Matcher(nlp.vocab) 

m_tool.add('concern', None, *p_list)

test_sentence = nlp(sentence)

phrase_matches = m_tool(test_sentence)

concern_flag = None
if not phrase_matches:
    concern_flag = 0
else:
    concern_flag = 1


sentiment_object = SentimentIntensityAnalyzer()

sentiment_attributes = sentiment_object.polarity_scores(sentence)


rating = sentiment_attributes['compound']+0.001

bin_rating = None
if rating < 0:
    bin_rating = 0
elif rating > 0:
    bin_rating = 1

print(bin_rating)
print(concern_flag)

sys.stdout.flush()



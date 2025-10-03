Deployed at https://snorfield.github.io/Word-Generator/

# Word Generator

While experiementing with Markov chains, I had the idea to use english words as the training data. I located an API that allowed me to fetch mass amounts of words, and I sanitized them. Overall, this model is trained upon around ten thousand english words of varying length. It's a sliding window n-gram model, though unoptimized in terms of compressing the model, which I haven't gotten around to fixing yet.



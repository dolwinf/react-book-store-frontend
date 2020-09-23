import requests

url = 'https://pure-bastion-33744.herokuapp.com/api/books/'
data_set = [{"title": "Girl, Woman, Other",
             "description": "Teeming with life and crackling with energy — a love song to modern Britain and black womanhood Girl, Woman, Other follows the lives and struggles of twelve very different characters. Mostly women, black and British, they tell the stories of their families, friends and lovers, across the country and through the years. Joyfully polyphonic and vibrantly contemporary, this is a gloriously new kind of history, a novel of our times: celebratory, ever-dynamic and utterly irresistible.",
             "author": "Bernardine Evaristo",
             "price": "10",
             "image": "http://res.cloudinary.com/doi3x39cn/image/upload/v1600864416/djl1aydrz7npshfvf3gf.jpg"},
            {"title": "The Survivors",
             "description": "Kieran Elliott’s life changed forever on a single day when a reckless mistake led to devastating consequences. The guilt that still haunts him resurfaces during a visit with his young family to the small coastal community he once called home. Kieran’s parents are struggling in a town where fortunes are forged by the sea. Between them all is his absent brother, Finn. When a body is discovered on the beach, long-held secrets threaten to emerge. A sunken wreck, a missing girl, and questions that have never washed away...",
             "author": "Jane Harper",
             "price": "15",
             "image": "http://res.cloudinary.com/doi3x39cn/image/upload/v1600864506/gcfwrfw1e9ok2ibajb1s.jpg"},
            {"title": "Anxious People",
             "description": "This is a poignant comedy about a crime that never took place, a would-be bank robber who disappears into thin air, and eight extremely anxious strangers who find they have more in common than they ever imagined. Viewing an apartment normally doesn’t turn into a life-or-death situation, but this particular open house becomes just that when a failed bank robber bursts in and takes everyone in the apartment hostage. As the pressure mounts, the eight strangers slowly begin opening up to one another and reveal long-hidden truths.",
             "author": "Fredrik Backman",
             "price": "12",
             "image": "http://res.cloudinary.com/doi3x39cn/image/upload/v1600864657/gkvozvm9a6gxa74iejog.jpg"},
            {
    "title": "Legacy",
    "description": "In the best-selling Legacy, author James Kerr goes deep into the heart of the world's most successful sporting team, the legendary All Blacks of New Zealand, to reveal 15 powerful and practical lessons for leadership...Legacy is a unique, inspiring handbook for leaders in all fields and asks: What are the secrets of sustained success? How do you turn vision into action? How do you achieve world-class standards, day after day, week after week, year after year? How do you handle pressure? How do you train to win at the highest level? How do you turn purpose into practice? What do you leave behind you after you're gone?..What Will Be Your Legacy?..",
             "author": "James Kerr",
             "price": "15",
             "image": "https://res.cloudinary.com/doi3x39cn/image/upload/v1600864733/ihbftmsjg10ccqiwsevz.jpg"
},
    {
    "title": "A Gentleman in Moscow",
    "description": "A Gentleman in Moscow immerses us in another elegantly drawn era with the story of Count Alexander Rostov. When, in 1922, he is deemed an unrepentant aristocrat by a Bolshevik tribunal, the count is sentenced to house arrest in the Metropol, a grand hotel across the street from the Kremlin. Rostov, an indomitable man of erudition and wit, has never worked a day in his life, and must now live in an attic room while some of the most tumultuous decades in Russian history are unfolding outside the hotel’s doors. Unexpectedly, his reduced circumstances provide him a doorway into a much larger world of emotional discovery.",
             "author": "Amor Towles ",
             "price": "20",
             "image": "https://res.cloudinary.com/doi3x39cn/image/upload/v1600822389/jzo8mybnhc6bybqkqzey.jpg"
},
    {
    "title": "The Intelligent Investor",
    "description": "Benjamin Graham was the most influential investor of all time. His work laid the foundation of modern security analysis and The Intelligent Investor is considered to be the definitive text on value investing. His life and work have been the inspiration for many of today's most successful businesspeople. Updated edition Jason Zweig, a respected financial journalist, writes for Money magazine. He was recently awarded the 2002 Excellence in Investor Education Award for his dedication to informing and educating the public on value investing.",
             "author": "Benjamin Graham",
             "price": "12",
             "image": "https://res.cloudinary.com/doi3x39cn/image/upload/v1600727770/myuil6i0duerbdau6pjf.jpg"
}]

for data in data_set:
    requests.post(url, data=data)

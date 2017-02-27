var alexa = require("alexa-app");
var requests = require("requests");

var skill = new alexa.app('pocket');
skill.launch(req, res) => {
  res.say('Pocket for Alexa here. Do you want me to read your latest saved article, list article titles, or read something else?').shouldEndSession(false).reprompt('I\'m ready for your query.');
});

skill.intent('LatestArticle',
    {
      "slots": []
    },
    (req, res) => {
      res.say('Under construction');
    }
  )

// Default Amazon intents
skill.intent('AMAZON.HelpIntent',
    {},
    (req, res) => {
      res.say('You can ask me to read your latest saved article, list article titles, or read something else.').shouldEndSession(false).reprompt('I\'m still listening.');
    }
);

exports.handler = skill.lambda();

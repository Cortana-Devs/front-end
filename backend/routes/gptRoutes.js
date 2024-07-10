const express = require('express');
const axios = require('axios');
const router = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

router.post('/gpt-suggestions', async (req, res) => {
  const { researchInterests, mainGoal } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-4/completions', {
      prompt: `Provide some insights and suggestions for the following research inputs:
      Research Interests: ${researchInterests}
      Main Goal: ${mainGoal}`,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.send(response.data.choices[0].text.split('\n').filter(Boolean));
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post('/generate-question', async (req, res) => {
  const formData = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-4/completions', {
      prompt: `Generate a detailed and impactful research question based on these data:
      Field of Study: ${formData.fieldOfStudy}
      Research Interests: ${formData.researchInterests}
      Main Goal: ${formData.mainGoal}
      Specific Questions: ${formData.specificQuestions}
      Desired Outcomes: ${formData.desiredOutcomes}`,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post('/gpt-chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-4/completions', {
      prompt: `You are an intelligent assistant helping with research questions. Respond to: "${message}"`,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.send(response.data.choices[0].text);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;

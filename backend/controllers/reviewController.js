const { getReviewFromAI } = require('../services/aiService');

const reviewCode = async (req, res) => {
    const { code, language } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    try {
        const feedback = await getReviewFromAI(code, language);
        res.json({ feedback });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { reviewCode };

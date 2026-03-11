const axios = require('axios');

const getReviewFromAI = async (code, language) => {
    const prompt = `You are an expert software engineer. Review the following ${language} code and provide:

1. Bugs
2. Code improvements
3. Performance suggestions
4. A cleaner optimized version of the code.

Code:
\`\`\`${language}
${code}
\`\`\``;

    try {
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: 'deepseek/deepseek-chat',
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'http://localhost:3000',
                'X-Title': 'AI Code Reviewer'
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('OpenRouter Service Error:', error.response ? error.response.data : error.message);
        throw new Error('Failed to get feedback from AI service');
    }
};

module.exports = { getReviewFromAI };

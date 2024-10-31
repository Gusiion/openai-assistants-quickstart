import axios from 'axios';

const apiKey = process.env.AZURE_OPENAI_API_KEY;
const endpoint = process.env.AZURE_OPENAI_ENDPOINT;

export const callAzureOpenAI = async (prompt: string) => {
    const response = await axios.post(
        `${endpoint}/openai/deployments/{deployment-id}/completions?api-version=2022-12-01`,
        {
            prompt: prompt,
            max_tokens: 100
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        }
    );

    return response.data;
};

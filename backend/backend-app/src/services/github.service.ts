import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export async function getIssues(owner: string, repo: string, token: string) {
    const url = `${GITHUB_API_URL}/repos/${owner}/${repo}/issues`;

    const response = await axios.get(url, {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github+json',
        },
        params: {
            state: 'open',
            per_page: 100,
        },
    });

    return response.data;
}
    
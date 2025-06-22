import express from 'express';
import { getRepoIssues } from './github.service';

const router = express.Router();

// GET /api/github/issues?owner=someowner&repo=somerepo
router.get('/issues', async (req, res) => {
  const { owner, repo } = req.query;

  if (!owner || !repo) {
    return res.status(400).json({ error: 'Missing "owner" or "repo" query parameter' });
  }

  try {
    const issues = await getRepoIssues(owner as string, repo as string);
    res.json(issues);
  } catch (err) {
    console.error('GitHub Issues Error:', err);
    res.status(500).json({ error: 'Failed to fetch GitHub issues' });
  }
});

export default router;

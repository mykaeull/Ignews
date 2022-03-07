import * as prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const repoName = 'IgnewsMykas';
  const endpoint = prismic.getEndpoint(repoName);
  const client = prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
}

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ke8lgl8i',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

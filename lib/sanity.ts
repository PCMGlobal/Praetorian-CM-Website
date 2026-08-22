import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ke8lg18i',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})

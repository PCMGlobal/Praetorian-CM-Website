import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ke8lgl8i',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

export const previewClient = createClient({
  projectId: 'ke8lgl8i',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  perspective: 'drafts'
})
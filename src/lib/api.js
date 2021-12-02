import { FIREBASE_DOMAIN } from './KEYS'

// QUOTES =========================

// Fetch all quotes
const getAllQuotes = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}quotes.json`)
  const data = await response.json()

  if (!response.ok) throw new Error(data.message || "Couldn't fetch quotes.")
  if (!data) return []

  const transformedQuotes = []

  Object.keys(data).forEach(key =>
    transformedQuotes.unshift({
      id: key,
      text: data[key].text,
      author: data[key].author,
    })
  )

  return transformedQuotes
}

// Fetch a single quote
const getSingleQuote = async quoteId => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`)
  const data = await response.json()

  if (!response.ok) throw new Error(data.message || "Couldn't load the quote.")

  return { id: quoteId, text: data.text, author: data.author }
}

// Add a new quote
const addQuote = async quoteData => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quoteData),
  })
  const data = await response.json()

  if (!response.ok) throw new Error(data.message || "Couldn't create quote.")

  return null
}

// COMMENTS =============

// Fetch comments
const getAllComments = async quoteId => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`)
  const data = await response.json()

  if (!response.ok) throw new Error(data.message || 'Failed to load comments')
  if (!data) return []

  const transformedComments = []

  Object.keys(data).forEach(key =>
    transformedComments.unshift({
      id: key,
      text: data[key].text,
      author: data[key].author,
    })
  )

  return transformedComments
}

// Add a new comment
const addComment = async requestData => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      method: 'POST',
      header: { 'Content-Type': 'application.json' },
      body: JSON.stringify(requestData.commentData),
    }
  )
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Failed to add comment')
}

export { addQuote, getAllQuotes, getSingleQuote, getAllComments, addComment }

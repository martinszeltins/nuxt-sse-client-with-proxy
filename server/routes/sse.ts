export default defineEventHandler(async (event) => {
    return proxyRequest(event, 'http://localhost:3001/api/sse')
})

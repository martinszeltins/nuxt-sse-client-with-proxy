export default defineEventHandler(async (event) => {
    return proxyRequest(event, 'http://localhost:3000/api/sse')
})

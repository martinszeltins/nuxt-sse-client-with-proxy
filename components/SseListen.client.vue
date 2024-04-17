<template>
    <div>
        <div id="result"></div>
    </div>
</template>

<script setup lang="ts">
    const eventSource = new EventSource('/sse')
    
    eventSource.onmessage = (event) => {
        document.getElementById('result')!.innerHTML += event.data + '<br>'
    }

    // This does not work with Nuxt/Nitro proxy :(
    // onerror never gets called (!)
    eventSource.onerror = (event) => {
        console.error('EventSource failed:', event)
        // We should attempt to reconnect here
    }
</script>

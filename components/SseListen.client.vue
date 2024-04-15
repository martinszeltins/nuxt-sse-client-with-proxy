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
</script>

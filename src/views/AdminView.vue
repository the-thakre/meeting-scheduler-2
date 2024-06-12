<template>
    <div class="admin">
        <h1>Admin Page</h1>
        <MeetingList />
    </div>
</template>

<script>
import MeetingList from '@/components/MeetingList.vue'

export default {
    components: {
        MeetingList
    }
}
</script>

<style scoped>
.admin {
    padding: 20px;
}
</style>
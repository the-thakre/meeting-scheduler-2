<template>
    <div class="home">
        <MeetingForm />
        <!-- <MeetingList /> -->
    </div>
</template>

<script>
import MeetingForm from '@/components/MeetingForm.vue'
// import MeetingList from '@/components/MeetingList.vue'

export default {
    components: {
        MeetingForm,
        // MeetingList
    }
}
</script>

<style scoped>
.home {
    padding: 20px;
}
</style>
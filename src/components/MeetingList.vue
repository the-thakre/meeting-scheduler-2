<template>
    <div class="meeting-list">
        <h2>Scheduled Meetings</h2>
        <ul>
            <li v-for="meeting in meetings" :key="meeting.id">
                <MeetingItem :meeting="meeting" @delete="deleteMeeting" @update="updateMeeting" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import MeetingItem from './MeetingItem.vue'

export default {
    components: {
        MeetingItem
    },
    computed: {
        ...mapState(['meetings'])
    },
    methods: {
        deleteMeeting(meetingId) {
            this.$store.commit('deleteMeeting', meetingId)
        },
        updateMeeting(updatedMeeting) {
            this.$store.commit('updateMeeting', updatedMeeting)
        }
    }
}
</script>

<style scoped>
.meeting-list {
    max-width: 600px;
    margin: 20px auto;
}

.meeting-list h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.meeting-list ul {
    list-style: none;
    padding: 0;
}

.meeting-list li {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 10px;
}
</style>
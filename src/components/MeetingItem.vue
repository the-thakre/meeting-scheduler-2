<template>
    <div class="meeting-item">
        <p>Title: {{ meeting.title }}</p>
        <p>Date: {{ meeting.date }}</p>
        <p>Time: {{ meeting.time }}</p>
        <button @click="editMeeting">Edit</button>
        <button @click="$emit('delete', meeting.id)">Delete</button>
        <div v-if="isEditing">
            <input type="text" v-model="editedTitle" required>
            <input type="date" v-model="editedDate" :min="minDate" required />
            <input type="time" v-model="editedTime" :min="minTime" required />
            <button @click="saveMeeting">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        meeting: Object
    },
    data() {
        return {
            isEditing: false,
            editedTitle: this.meeting.title,
            editedDate: this.meeting.date,
            editedTime: this.meeting.time
        }
    },
    computed: {
        minDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        minTime() {
            if (this.date === this.minDate) {
                const now = new Date();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                return `${hours}:${minutes}`;
            }
            return null;
        },
    },
    methods: {
        editMeeting() {
            this.isEditing = true
        },
        saveMeeting() {
            const updatedMeeting = {
                id: this.meeting.id,
                title: this.editedTitle,
                date: this.editedDate,
                time: this.editedTime
            }
            this.isEditing = false
            this.$emit('update', updatedMeeting)
        }
    }
}
</script>

<style scoped>
.meeting-item {
    position: relative;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 4px;
    margin-bottom: 10px;
}

.meeting-item button {
    margin-right: 10px;
}

.meeting-item input {
    margin-right: 10px;
    margin-top: 10px;
}
</style>
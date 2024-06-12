<template>
    <div class="meeting-form">
        <h1>Schedule a Meeting</h1>
        <form @submit.prevent="scheduleMeeting">
            <div>
                <label for="title">Meeting Title:</label>
                <input type="text" v-model="title" required>
            </div>
            <div>
                <label for="date">Date:</label>
                <input type="date" v-model="date" required>
            </div>
            <div>
                <label for="time">Time:</label>
                <input type="time" v-model="time" required>
            </div>
            <button type="submit">Schedule</button>
        </form>
        <div v-if="meeting">
            <h2>Scheduled Meeting</h2>
            <p>Title: {{ meeting.title }}</p>
            <p>Date: {{ meeting.date }}</p>
            <p>Time: {{ meeting.time }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            date: '',
            time: '',
            meeting: null
        }
    },
    methods: {
        scheduleMeeting() {
            if (new Date(this.date + ' ' + this.time) > new Date()) {
                this.meeting = {
                    id: Date.now(),
                    title: this.title,
                    date: this.date,
                    time: this.time
                }
                this.$store.commit('addMeeting', this.meeting)
            } else {
                alert('Please select a future date and time.')
            }
        }
    }
}
</script>

<style scoped>
.meeting-form {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.meeting-form h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.meeting-form form div {
    margin-bottom: 15px;
}

.meeting-form form label {
    display: block;
    margin-bottom: 5px;
}

.meeting-form form input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.meeting-form button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.meeting-form button:hover {
    background-color: #0056b3;
}
</style>
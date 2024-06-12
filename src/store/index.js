import { createStore } from 'vuex'

const localStorageKey = 'meetings'

export default createStore({
    state: {
        meetings: JSON.parse(localStorage.getItem(localStorageKey)) || []
    },
    mutations: {
        addMeeting(state, meeting) {
            state.meetings.push(meeting)
            localStorage.setItem(localStorageKey, JSON.stringify(state.meetings))
        },
        deleteMeeting(state, meetingId) {
            state.meetings = state.meetings.filter(meeting => meeting.id !== meetingId)
            localStorage.setItem(localStorageKey, JSON.stringify(state.meetings))
        },
        updateMeeting(state, updatedMeeting) {
            const index = state.meetings.findIndex(meeting => meeting.id === updatedMeeting.id)
            if (index !== -1) {
                state.meetings.splice(index, 1, updatedMeeting)
            }
            localStorage.setItem(localStorageKey, JSON.stringify(state.meetings))
        }
    }
})

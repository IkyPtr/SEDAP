import axios from 'axios'

const API_URL = "https://krzxbyespvvttekokcxv.supabase.co/rest/v1/NOTES"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyenhieWVzcHZ2dHRla29rY3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzE0MTAsImV4cCI6MjA2NDUwNzQxMH0.SAPS8mhLdAZJgs_c0tfsMVSlaYqlDzTM3qNJQ5pb-zU"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
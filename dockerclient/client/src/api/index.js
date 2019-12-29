import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTicket = payload => api.post(`/ticket`, payload)
export const getAllTicket = () => api.get(`/tickets`)
export const updateTicketById = (id, payload) => api.put(`/ticket/${id}`, payload)
export const deleteTicketById = id => api.delete(`/ticket/${id}`)
export const getTicketById = id => api.get(`/ticket/${id}`)

const apis = {
    insertTicket,
    getAllTicket,
    updateTicketById,
    deleteTicketById,
    getTicketById,
}

export default apis

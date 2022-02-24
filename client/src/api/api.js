import axios from "axios";

function getForms() {
    return axios.get('/user/forms');
}

function getForm(formId) {
    return axios.get(`/user/form/${formId}`);
}

function saveForm(formId, data) {
    return axios.post(`/user/form/${formId}`, data);
}

export const apiService = {
    getForms, getForm, saveForm
};
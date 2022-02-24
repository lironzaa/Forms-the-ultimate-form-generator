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

function adminForms() {
    return axios.get('/admin/submitted-forms');
}

function createForm(form) {
    return axios.post('/admin/save-form', { form });
}

export const apiService = {
    getForms, getForm, saveForm, adminForms, createForm
};
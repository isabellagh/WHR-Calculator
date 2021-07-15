// sync actions

export const updateNewClientForm = (name, value) => {
    console.log("action fired??");
    return {
        type: "UPDATE_NEW_CLIENT_FORM",
        formData: { name, value }
    }
}
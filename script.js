function validEmail(str) {
    if (!str || typeof str !== 'string') {
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})+$/;

    return emailRegex.test(str);
}
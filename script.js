function validEmail(str) {
    if (!str || typeof str !== 'string') {
        return false;
    }

    // Regex pattern based on the implementation notes:
    // - One or more word characters (or dots/hyphens not consecutively) before '@'
    // - Followed by '@'
    // - Followed by one or more word characters (or dots/hyphens)
    // - Followed by '.'
    // - Followed by 2 to 3 word characters (the domain extension like com, in, edu)
    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}$/;

    return emailRegex.test(str);
}
function sendNotification(email) {
    if (email.includes('@') || typeof email === 'string') {
        if (email.indexOf('@') === email.lastIndexOf('@')) {
            const [beforePart, afterPart] = email.split('@');
            return console.log(`${beforePart} sent you an email from ${afterPart}`);
        }
        else {
            return 'Invalid Email';
        }
    }
    else {
        return 'Invalid Email';
    }
}
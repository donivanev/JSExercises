function usernames(emails) {

    let results = [];

    for (let email of emails) {

        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');

        domainParts.forEach(p => username += p[0]);
        results.push(username);
    }

    console.log(results.join(', '));
}
/**
 * getInitialsOfPerson returns the initials of the person object's name
 *
 * @param {object} person
 * @returns string representing the initials of the person
 *
 * For example: Ada Lovelace => "AL"
 */
function getInitialsOfPerson(person) {
    return person.firstName.split("")[0] + person.lastName.split("")[0];
}

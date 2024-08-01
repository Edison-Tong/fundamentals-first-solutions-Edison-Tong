/* exported getDescriptionOfPerson */
/**
 *
 * @param {object} person
 * @returns - string that describes a person. For example:
 *
 * "Sandra Owens is a barista from Los Angeles, Calfornia."
 */
function getDescriptionOfPerson(person) {
    return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}

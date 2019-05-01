function getAnswers(formData) {
    const answers = {
        name: formData.get('name'),
        experience: formData.get('experience'),
        destination:formData.get('destination'),
        duration: formData.get('duration'),
        addOns: formData.getAll('add-ons'),
        medical: formData.get('medical')
    };
    return answers;
}
export default getAnswers;
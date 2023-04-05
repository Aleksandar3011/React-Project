export const Validation = (value, name) => {
    const errors = {};

    if(name === "firstName" && value.length < 2){
        errors.firstName = "First name should be minimum 3 characters!"
    };

    if(name === "secondName" && value.length < 2){
        errors.secondName = "Second name should be minimum 3 characters!"
    };

    if(name === "school" && value.length < 8){
        errors.school = "School/Freelance should be minimum 9 characters!"
    };
    
    if(name === "city" && value.length < 2){
        errors.city = "City should be minimum 3 characters!"
    };

    if(name === "subject" && value.length < 3){
        errors.subject = "Subject should be minimum 4 characters!"
    };

    if(name === "description" && value.length < 19){
        errors.description = "Description should be minimum 20 characters!"
    };


    if(name === "phoneNumber" && value.length < 9){
        errors.phoneNumber = "Phone number should be minimum 10 characters!"
    };

    if(name === "testQuestion" && value.length < 4){
        errors.testQuestion = "Test question should be minimum 5 characters!"
    };

    if(name === "title" && value.length < 4){
        errors.title = "Test title should be minimum 5 characters!"
    };

    if(name === "owner" && value.length < 4){
        errors.owner = "Owner should be minimum 5 characters!"
    };

    return errors;
};
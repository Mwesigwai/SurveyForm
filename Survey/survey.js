const surveyForm = document.forms[0];
const userName = surveyForm.elements.Name;
const userEmail = surveyForm.elements.Email;
const userAge = surveyForm.elements.Age;
const userPhoneNumber = surveyForm.elements.Handphone;
const options = surveyForm.elements.FirstTimePlaying;
const exodus = surveyForm.elements.Exodus;
const alcatraz = surveyForm.elements.Alcatraz;
const aokigahara = surveyForm.elements.Aokigahara;
const mausoleum = surveyForm.elements.Mausoleum;
const castiglione = surveyForm.elements.Castiglione;
const submitBtn = surveyForm.elements.submit;



submitBtn.addEventListener('click', () => {

    const email = document.querySelector('#email').value;
    console.log(surveyForm);
    // const userInfo ={
    //     name: `${userName.value}`,
    //     email: `${userEmail.value}`,
    //     age: `${userAge.value}`,
    //     userPhoneNumber: `${userPhoneNumber.value}`,
    //     firstTimePlaying: `${options[options.selectedIndex].value}`,
    //     gamesPlayed: []
    // };

    // if (exodus.checked) {
    //     userInfo.gamesPlayed.push(exodus.value);
    // }
    // if (alcatraz.checked) {
    //     userInfo.gamesPlayed.push(alcatraz.value);
    // }
    // if (aokigahara.checked) {
    //     userInfo.gamesPlayed.push(aokigahara.value);
    // }
    // if (mausoleum.checked) {
    //     userInfo.gamesPlayed.push(mausoleum.value);
    // }
    // if (castiglione.checked) {
    //     userInfo.gamesPlayed.push(castiglione.value);
    // }

    // alert(`
    //     name : ${userInfo.name} \n
    //     age : ${userInfo.age} \n
    //     email : ${userInfo.email} \n
    //     phone number : ${userInfo.userPhoneNumber} \n
    //     first time playing : ${userInfo.firstTimePlaying} \n
    //     games played : ${userInfo.gamesPlayed.join(', ')} \n
    // `);
});

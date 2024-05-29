function submitForm(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    
    console.log(inputdate.value);

    const formattedDate = new Date(inputdate.value).toLocaleDateString('bn-BD');
    outputdate.value = formattedDate;
}
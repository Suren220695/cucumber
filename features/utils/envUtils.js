function ennvironment() {
    let Ennvironment = process.env.ENVIRONMENT
    if (Ennvironment == "qa") {
        return "https://qa.gracefulmanagement.com/"
    } else if (Ennvironment == "stage") {
        return 'https://ca-gmscloud-webapps-ncus-st.whiteground-c828087f.northcentralus.azurecontainerapps.io/';
    } 
}

module.exports={ennvironment}


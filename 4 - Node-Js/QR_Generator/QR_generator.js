import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
        {
            message: "Type your Website URL",
            name: "URL"
        }])
    .then((answers) => {
        var url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("Haneef_LinkedIn.png"));
        
        fs.writeFile("Qr.txt" , url , (err,data) =>{
            if(err)
            {
                console.log("The error is " + err);
            }
            else{
                console.log("The File has been Created for QR " + data);
            }
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered 
        } else {
            // Something else
        }
});
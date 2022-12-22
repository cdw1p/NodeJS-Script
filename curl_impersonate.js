const { exec } = require('child_process');

const accessToken = '<your_access_token>';
const impersonate = '<user_email_to_impersonate>';

exec(`curl -H "Authorization: Bearer ${accessToken}" -H "Impersonate-User: ${impersonate}" https://www.googleapis.com/gmail/v1/users/me/messages`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});

/*Test function to change EMS cookie values*/

/*function getCookieValue(cookieName) {
  let name = cookieName + '=';
  let decodedCookies = decodeURIComponent(document.cookie);
  let cookies = decodedCookies.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}

document.cookie =
  'EMSCookie=' + getCookieValue('EMSCookie') + 'SameSite=None; Secure';
document.cookie =
  'emsAuthToken=' + getCookieValue('emsAuthToken') + 'SameSite=None; Secure';*/

  /*Add message ubove UI area to appears on ALL pages*/
  function addGlobalMessage() {
    const msgDiv = document.createElement('div');
    const message = document.createElement('h5');
    message.setAttribute('id', 'msgTxt');
    message.setAttribute('class', 'alert alert-danger');
    message.innerHTML =
      'MAINTENANCE ADVISORY: The EMS Web App will be offline for scheduled maintenance on 10/16 from 10pm-2am';
    const page = document.getElementById('page');
    const pageContentWrapper = document.getElementById('page-content-wrapper');
    msgDiv.setAttribute('id', 'msgDiv');
    msgDiv.appendChild(message);
    page.appendChild(msgDiv);
    pageContentWrapper.insertBefore(msgDiv, page);
  }
  
  document.body.onload = addGlobalMessage;  
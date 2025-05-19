import './commands/login_commands'
import './commands/ui_commands'
import './commands/checkoutCommands'

/** Não carrega os XHR */
const app = window.top;
 
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}
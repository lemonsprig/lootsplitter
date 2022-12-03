// Listen for the submit
document.getElementById('loot-form').addEventListener('submit', function(e) {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('results').style.display = 'none';
  setTimeout(splitloot, 2000);
  e.preventDefault();
});

// Split Loot
function splitloot() {
  // get UI Input variables
  const UIpp = document.querySelector('#pp');
  const UIgp = document.querySelector('#gp');
  const UIsp = document.querySelector('#sp');
  const UIcp = document.querySelector('#cp');
  const UInumber = document.querySelector('#number');
  const UIpartypercent = document.querySelector('#partyshare');

  // get UI Output variables
  const UIppEach = document.querySelector('#pp-each');
  const UIgpEach = document.querySelector('#gp-each');
  const UIspEach = document.querySelector('#sp-each');
  const UIcpEach = document.querySelector('#cp-each');
  const UIppFund = document.querySelector('#pp-fund');
  const UIgpFund = document.querySelector('#gp-fund');
  const UIspFund = document.querySelector('#sp-fund');
  const UIcpFund = document.querySelector('#cp-fund');
  const UIppRemainder = document.querySelector('#pp-remainder');
  const UIgpRemainder = document.querySelector('#gp-remainder');
  const UIspRemainder = document.querySelector('#sp-remainder');
  const UIcpRemainder = document.querySelector('#cp-remainder');

  // set local variables to hold the values
  let pp = UIpp.value;
  let gp = UIgp.value;
  let sp = UIsp.value;
  let cp = UIcp.value;
  let number = UInumber.value

  // deduct party share
  if(UIpartypercent.value >= 0) {
    pp -= Math.floor(pp * (UIpartypercent.value/100));
    UIppFund.value = UIpp.value - pp;
    gp -= Math.floor(gp * (UIpartypercent.value/100));
    UIgpFund.value = UIgp.value - gp;
    sp -= Math.floor(sp * (UIpartypercent.value/100));
    UIspFund.value = UIsp.value - sp;
    cp -= Math.floor(cp * (UIpartypercent.value/100));
    UIcpFund.value = UIcp.value - cp;
  }

  // split amongst the party
  if(number > 0) {
    UIppEach.value = Math.floor(pp / number);
    UIppRemainder.value = (pp % number);
    UIgpEach.value = Math.floor(gp / number);
    UIgpRemainder.value = (gp % number);
    UIspEach.value = Math.floor(sp / number);
    UIspRemainder.value = (sp % number);
    UIcpEach.value = Math.floor(cp / number);
    UIcpRemainder.value = (cp % number);
  }
   // Update displa
   document.getElementById('loading').style.display = 'none'
   document.getElementById('results').style.display = 'block'
}
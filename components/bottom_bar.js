class bottomBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="bottom-bar">
            <div class="bottom-col1">
                <h3>MD4SG</h3>
                <p>Improving equitable access to opportunity using algorithms, optimization, and mechanism design.</p>
                <small>Updated Feb 2021. Web design by <a href="http://www.kiragoldner.com/" style="color:black">Kira Goldner</a> + <a href="http://www.sritej.com/" style="color:black">Sritej Attaluri</a>.</small>
              </div>

              <div class="bottom-col2" >
                <h3>JOIN US</h3>
                <p>Contact us at <a href="mailto:organizers@md4sg.com">organizers@md4sg.com</a></p>
                <p>Google calendar: <a href="https://calendar.google.com/calendar/r?cid=dTZqdnE1dW9pNjdiaXE2bGlvZ3Zkb2RoM2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"> MD4SG Events</a> <br/>
                Youtube: <a href="https://www.youtube.com/channel/UC2hBoxmzDtAwTTjRRM99f4w/videos"> MD4SG Organizers</a><br/>
                Medium: <a href="https://www.google.com/url?q=https://medium.com/@md4sg&sa=D&source=hangouts&ust=1589249244225000&usg=AFQjCNGPKdq4H0b4o-GyDXXO1IV8dxYUww">@MD4SG</a><br/>
                Twitter: <a href="https://twitter.com/MD4SG">@MD4SG</a>
                </p>
              </div>

              <div class="bottom-col3">
                <h3>LINKS</h3>
                <p><a href="https://www.md4sg.com/aboutus.html">About us</a></p>
                <p><a href="https://www.md4sg.com/workshop/index.html">Events</a></p>	
                <p><a href="https://www.md4sg.com/colloquium/index.html">Colloquium Series</a></p>
                <p><a href="https://www.md4sg.com/workinggroups/index.html">Working Groups</a></p>
              </div>
        </div>
      `;
    }
  }
  
  customElements.define('bottom-bar-component', bottomBar);

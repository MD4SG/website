class bottomBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <div class="bottom-bar">
<!-- 
            <div class="bottom-bar-category">
                <strong>Organizers:</strong> <a href="http://www.cs.cornell.edu/~red/" target="_blank">Rediet Abebe</a>, <a href="https://web.stanford.edu/~wanyili/">Wanyi Li</a>,
                <a href="https://sites.google.com/view/irene-lo" target="_blank">Irene Lo</a>, <a href="https://www.fmarmolejo.com/">Francisco Marmolejo Cossio</a>, and <a href="http://www.columbia.edu/~as5001/">Ana-Andreea Stoica</a>.
            </div>
            <div class="bottom-bar-category">
                <strong>Contact:</strong> <a href="mailto:organizers@md4sg.com">organizers@md4sg.com</a>
            </div>
            <div class="bottom-bar-category">
                <strong>Join us:</strong> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfc2uwgKLw8Vfceq4l0UvuzxUGJcyf5U7Vc1mYwNR1yi3UYqA/viewform?usp=sf_link">MD4SG email list</a>
            </div>
            <div class="bottom-bar-category">
                <strong>Subscribe:</strong> <a href="https://www.youtube.com/channel/UC2hBoxmzDtAwTTjRRM99f4w/videos">Youtube channel</a>,
                <a href="https://calendar.google.com/calendar/r?cid=dTZqdnE1dW9pNjdiaXE2bGlvZ3Zkb2RoM2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Calendar</a>,
                <a href="https://www.google.com/url?q=https://medium.com/@md4sg&amp;sa=D&amp;source=hangouts&amp;ust=1589249244225000&amp;usg=AFQjCNGPKdq4H0b4o-GyDXXO1IV8dxYUww">Medium</a>, <a href="https://twitter.com/MD4SG">Twitter</a>	
            </div>

            <div class="footer">
                <small>Updated Feb 2021. Web design by <a href="http://www.kiragoldner.com/">Kira Goldner</a> + <a href="http://www.sritej.com/">Sritej Attaluri</a>.</small>
                <script>
                    (function (i, s, o, g, r, a, m) {
                        i["GoogleAnalyticsObject"] = r;
                        (i[r] =
                            i[r] ||
                            function () {
                                (i[r].q = i[r].q || []).push(arguments);
                            }),
                            (i[r].l = 1 * new Date());
                        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, "script", "../www.google-analytics.com/analytics.js", "ga");

                    ga("create", "UA-93664120-1", "auto");
                    ga("send", "pageview");
                </script>
            </div>

              <div class="bottom-col1" style="background-color:#aaa;">
                <h2>MD4SG</h2>
                <p>Improving equitable access to opportunity using algorithms, optimization, and mechanism design.</p>
                <small>Updated Feb 2021. Web design by <a href="http://www.kiragoldner.com/">Kira Goldner</a> + <a href="http://www.sritej.com/">Sritej Attaluri</a>.</small>
              </div>
              <div class="bottom-col2" style="background-color:#bbb;">
                <h2>JOIN US</h2>
                <p>Contact us at <a href="mailto:organizers@md4sg.com">organizers@md4sg.com</a></p>
                <p>Google calendar: <a href="https://calendar.google.com/calendar/r?cid=dTZqdnE1dW9pNjdiaXE2bGlvZ3Zkb2RoM2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"> MD4SG Events</a> <br/>
                Youtube: <a href="https://www.youtube.com/channel/UC2hBoxmzDtAwTTjRRM99f4w/videos"> MD4SG Organizers</a><br/>
                Medium: <a href="https://www.google.com/url?q=https://medium.com/@md4sg&sa=D&source=hangouts&ust=1589249244225000&usg=AFQjCNGPKdq4H0b4o-GyDXXO1IV8dxYUww">@MD4SG</a><br/>
                Twitter: <a href="https://twitter.com/MD4SG">@MD4SG</a>
                </p>
              </div>
              <div class="bottom-col3" style="background-color:#ccc;">
                <h2>LINKS</h2>
                <p><a href="https://www.md4sg.com/aboutus.html">About us</a></p>
                <p><a href="https://www.md4sg.com/workshop/index.html">Events</a></p>	
                <p><a href="https://www.md4sg.com/colloquium/index.html">Colloquium Series</a></p>
                <p><a href="https://www.md4sg.com/workinggroups/index.html">Working Groups</a></p>
              </div>
            </div>
-->
      `;
    }
  }
  
  customElements.define('bottom-bar-component', bottomBar);

class topLevelHeaderDepthZero extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
            <div class="bignav navbar navbar-toggleable-sm px-5">
                <div class="navbar-text">
                    <span class="normal">
                        <a href="./index.html">Home</a>
                    </span>
                </div>
                <div class="navbar-text dropdown">
                    <span class="normal">
                        <a href="./aboutus.html">About Us</a>
                    </span>
                    <div class="dropdown-content">
                        <p class="menu"><a href="./aboutus.html">About MD4SG</a></p>
                        <p class="menu"><a href="./leadership.html">Leadership</a></p>
                        <p class="menu"><a href="./policies.html">Policies</a></p>
                    </div>
                </div>
                <div class="navbar-text dropdown">
                    <span class="normal">
                        <a href="./workshop/index.html">Events</a>
                    </span>
                    <div class="dropdown-content">
                        <p class="menu"><a href="./workshop/neurips21.html">NeurIPS &#39;21</a></p>
                        <p class="menu"><a href="https://eaamo2021.eaamo.org/">EAAMO &#39;21</a></p>
                        <p class="menu"><a href="./workshop/FAACT21/faact21tutorial.html">FAccT &#39;21</a></p>
                        <p class="menu"><a href="./workshop/MD4SG20/index.html">MD4SG &#39;20</a></p>
                        <p class="menu"><a href="./workshop/DSA20/dsa20tutorial.html">DSA &#39;20</a></p>
                        <p class="menu"><a href="./workshop/EC20/ec20tutorial.html">EC &#39;20</a></p>
                        <p class="menu"><a href="./workshop/compass19.html">COMPASS &#39;19</a></p>
                        <p class="menu"><a href="./workshop/EC19/index.html">MD4SG &#39;19</a></p>
                        <p class="menu"><a href="./workshop/EC18/index.html">MD4SG &#39;18</a></p>
                        <p class="menu"><a href="./workshop/winetutorial17.html">WINE &#39;17</a></p>
                        <p class="menu"><a href="./workshop/EC17/index.html">MD4SG &#39;17</a></p>
                    </div>
                </div>
                <div class="navbar-text dropdown">
                    <span class="normal">
                        <a href="./colloquium/index.html">Colloquium Series</a>
                    </span>
                </div>
                <div class="navbar-text dropdown">
                    <span class="normal">
                        <a href="./workinggroups/index.html">Working Groups</a>
                    </span>
                    <div class="dropdown-content">
                        <p class="menu"><a href="./workinggroups/civicparticipation.html">Civic Participation</a></p>
                        <p class="menu"><a href="./workinggroups/practitioners.html">Conversations with Practitioners</a></p>
                        <p class="menu"><a href="./workinggroups/data.html">Data Economies</a></p>
                        <p class="menu"><a href="./workinggroups/dev.html">Development</a></p>
                        <p class="menu"><a href="./workinggroups/distributivejustice.html">Discrimination</a></p>
                        <p class="menu"><a href="./workinggroups/environment.html">Environment</a></p>
                        <p class="menu"><a href="./workinggroups/inequality.html">Inequality</a></p>
                        <p class="menu"><a href="./workinggroups/latinamerica.html">Latin America and Caribbean</a></p>
                        <p class="menu"><a href="./workinggroups/lawpolicy.html">Law & Policy</a></p>
                        <p class="menu"><a href="./workinggroups/previous.html">Previous Working Groups</a></p>
                    </div>
                </div>
                <div class="navbar-text dropdown">
                    <span class="normal">
                        <a>Projects</a>
                    </span>
                    <div class="dropdown-content">
                        <p class="menu"><a href="./workinggroups/projects/datastories.html">Data and the Global South Project</a></p>
                    </div>
                </div>
                <div class="navbar-text">
                    <span class="normal px-2" style="background-color:#20668F">
                        <a style="color:white" href="https://eaamo.org/">EAAMO</a>
                    </span>
                </div>
            </div>
      `;
    }
  }

class topLevelHeaderDepthOne extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <div class="bignav navbar navbar-toggleable-sm px-5">
        <div class="navbar-text">
            <span class="normal">
                <a href="../index.html">Home</a>
            </span>
        </div>
        <div class="navbar-text dropdown">
            <span class="normal">
                <a href="../aboutus.html">About Us</a>
            </span>
            <div class="dropdown-content">
                <p class="menu"><a href="../aboutus.html">About MD4SG</a></p>
                <p class="menu"><a href="../leadership.html">Leadership</a></p>
                <p class="menu"><a href="../policies.html">Policies</a></p>
            </div>
        </div>
        <div class="navbar-text dropdown">
            <span class="normal">
                <a href="../workshop/index.html">Events</a>
            </span>
            <div class="dropdown-content">
                <p class="menu"><a href="../workshop/neurips21.html">NeurIPS &#39;21</a></p>
                <p class="menu"><a href="https://eaamo2021.eaamo.org/">EAAMO &#39;21</a></p>
                <p class="menu"><a href="../workshop/FAACT21/faact21tutorial.html">FAccT &#39;21</a></p>
                <p class="menu"><a href="../workshop/MD4SG20/index.html">MD4SG &#39;20</a></p>
                <p class="menu"><a href="../workshop/DSA20/dsa20tutorial.html">DSA &#39;20</a></p>
                <p class="menu"><a href="../workshop/EC20/ec20tutorial.html">EC &#39;20</a></p>
                <p class="menu"><a href="../workshop/compass19.html">COMPASS &#39;19</a></p>
                <p class="menu"><a href="../workshop/EC19/index.html">MD4SG &#39;19</a></p>
                <p class="menu"><a href="../workshop/EC18/index.html">MD4SG &#39;18</a></p>
                <p class="menu"><a href="../workshop/winetutorial17.html">WINE &#39;17</a></p>
                <p class="menu"><a href="../workshop/EC17/index.html">MD4SG &#39;17</a></p>
            </div>
        </div>
        <div class="navbar-text dropdown">
            <span class="normal">
                <a href="../colloquium/index.html">Colloquium Series</a>
            </span>
        </div>
        <div class="navbar-text dropdown">
            <span class="normal">
                <a href="../workinggroups/index.html">Working Groups</a>
            </span>
            <div class="dropdown-content">
                <p class="menu"><a href="../workinggroups/civicparticipation.html">Civic Participation</a></p>
                <p class="menu"><a href="../workinggroups/practitioners.html">Conversations with Practitioners</a></p>
                <p class="menu"><a href="../workinggroups/data.html">Data Economies</a></p>
                <p class="menu"><a href="../workinggroups/dev.html">Development</a></p>
                <p class="menu"><a href="../workinggroups/distributivejustice.html">Discrimination</a></p>
                <p class="menu"><a href="../workinggroups/environment.html">Environment</a></p>
                <p class="menu"><a href="../workinggroups/inequality.html">Inequality</a></p>
                <p class="menu"><a href="../workinggroups/latinamerica.html">Latin America and Caribbean</a></p>
                <p class="menu"><a href="../workinggroups/lawpolicy.html">Law & Policy</a></p>
                <p class="menu"><a href="../workinggroups/previous.html">Previous Working Groups</a></p>
            </div>
        </div>
        <div class="navbar-text dropdown">
            <span class="normal">
                <a>Projects</a>
            </span>
            <div class="dropdown-content">
                <p class="menu"><a href="../workinggroups/projects/datastories.html">Data and the Global South Project</a></p>
            </div>
        </div>
        <div class="navbar-text">
            <span class="normal px-2" style="background-color:#20668F">
                <a style="color:white" href="https://eaamo.org/">EAAMO</a>
            </span>
        </div>
    </div>
      `;
    }
  }

  class topLevelHeaderDepthTwo extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <div class="bignav navbar navbar-toggleable-sm px-5">
      <div class="navbar-text">
          <span class="normal">
              <a href="../../index.html">Home</a>
          </span>
      </div>
      <div class="navbar-text dropdown">
          <span class="normal">
              <a href="../../aboutus.html">About Us</a>
          </span>
          <div class="dropdown-content">
              <p class="menu"><a href="../../aboutus.html">About MD4SG</a></p>
              <p class="menu"><a href="../../leadership.html">Leadership</a></p>
              <p class="menu"><a href="../../policies.html">Policies</a></p>
          </div>
      </div>
      <div class="navbar-text dropdown">
          <span class="normal">
              <a href="../workshop/index.html">Events</a>
          </span>
          <div class="dropdown-content">
              <p class="menu"><a href="../../workshop/neurips21.html">NeurIPS &#39;21</a></p>
              <p class="menu"><a href="https://eaamo2021.eaamo.org/">EAAMO &#39;21</a></p>
              <p class="menu"><a href="../../workshop/FAACT21/faact21tutorial.html">FAccT &#39;21</a></p>
              <p class="menu"><a href="../../workshop/MD4SG20/index.html">MD4SG &#39;20</a></p>
              <p class="menu"><a href="../../workshop/DSA20/dsa20tutorial.html">DSA &#39;20</a></p>
              <p class="menu"><a href="../../workshop/EC20/ec20tutorial.html">EC &#39;20</a></p>
              <p class="menu"><a href="../../workshop/compass19.html">COMPASS &#39;19</a></p>
              <p class="menu"><a href="../../workshop/EC19/index.html">MD4SG &#39;19</a></p>
              <p class="menu"><a href="../../workshop/EC18/index.html">MD4SG &#39;18</a></p>
              <p class="menu"><a href="../../workshop/winetutorial17.html">WINE &#39;17</a></p>
              <p class="menu"><a href="../../workshop/EC17/index.html">MD4SG &#39;17</a></p>
          </div>
      </div>
      <div class="navbar-text dropdown">
          <span class="normal">
              <a href="../../colloquium/index.html">Colloquium Series</a>
          </span>
      </div>
      <div class="navbar-text dropdown">
          <span class="normal">
              <a href="../workinggroups/index.html">Working Groups</a>
          </span>
          <div class="dropdown-content">
              <p class="menu"><a href="../../workinggroups/civicparticipation.html">Civic Participation</a></p>
              <p class="menu"><a href="../../workinggroups/practitioners.html">Conversations with Practitioners</a></p>
              <p class="menu"><a href="../../workinggroups/data.html">Data Economies</a></p>
              <p class="menu"><a href="../../workinggroups/dev.html">Development</a></p>
              <p class="menu"><a href="../../workinggroups/distributivejustice.html">Discrimination</a></p>
              <p class="menu"><a href="../../workinggroups/environment.html">Environment</a></p>
              <p class="menu"><a href="../../workinggroups/inequality.html">Inequality</a></p>
              <p class="menu"><a href="../../workinggroups/latinamerica.html">Latin America and Caribbean</a></p>
              <p class="menu"><a href="../../workinggroups/lawpolicy.html">Law & Policy</a></p>
              <p class="menu"><a href="../../workinggroups/previous.html">Previous Working Groups</a></p>
          </div>
      </div>
      <div class="navbar-text dropdown">
          <span class="normal">
              <a>Projects</a>
          </span>
          <div class="dropdown-content">
              <p class="menu"><a href="../../workinggroups/projects/datastories.html">Data and the Global South Project</a></p>
          </div>
      </div>
      <div class="navbar-text">
          <span class="normal px-2" style="background-color:#20668F">
              <a style="color:white" href="https://eaamo.org/">EAAMO</a>
          </span>
      </div>
  </div>
      `;
    }
  }

  customElements.define('top-level-header-depth-zero-component', topLevelHeaderDepthZero);
  customElements.define('top-level-header-depth-one-component', topLevelHeaderDepthOne);
  customElements.define('top-level-header-depth-two-component', topLevelHeaderDepthTwo);

class topLevelHeaderDepthZero extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <div class="bignav">
            <table>
                <tbody>
                    <tr>
                        <td><a href="./index.html">Home</a></td>
                        <td><a href="./aboutus.html">About Us</a></td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="./workshop/index.html">Events</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="https://eaamo.org/">EAAMO &#39;21</a></p>
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
                        </td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="./colloquium/index.html">Colloquium Series</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="./colloquium/index.html">Upcoming</a></p>
                                    <p class="menu"><a href="./colloquium/past.html">Previous </a></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="./workinggroups/index.html">Working Groups</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="./workinggroups/asiapacific.html">Asia-Pacific</a></p>
                                    <p class="menu"><a href="./workinggroups/civicparticipation.html">Civic Participation</a></p>
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
                        </td>
                    </tr>
                </tbody>
            </table>
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
            <div class="bignav">
            <table>
                <tbody>
                    <tr>
                        <td><a href="../index.html">Home</a></td>
                        <td><a href="../aboutus.html">About Us</a></td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="../workshop/index.html">Events</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="https://eaamo.org/">EAAMO &#39;21</a></p>
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
                        </td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="../colloquium/index.html">Colloquium Series</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="../colloquium/index.html">Upcoming</a></p>
                                    <p class="menu"><a href="../colloquium/past.html">Previous </a></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="../workinggroups/index.html">Working Groups</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="../workinggroups/asiapacific.html">Asia-Pacific</a></p>
                                    <p class="menu"><a href="../workinggroups/civicparticipation.html">Civic Participation</a></p>
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
                        </td>
                    </tr>
                </tbody>
            </table>
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
            <div class="bignav">
            <table>
                <tbody>
                    <tr>
                        <td><a href="../../index.html">Home</a></td>
                        <td><a href="../../aboutus.html">About Us</a></td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="../../workshop/index.html">Events</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="https://eaamo.org/">EAAMO &#39;21</a></p>
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
                        </td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="../../colloquium/index.html">Colloquium Series</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="../../colloquium/index.html">Upcoming</a></p>
                                    <p class="menu"><a href="../../colloquium/past.html">Previous </a></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="dropdown">
                                <span class="normal">
                                    <a href="../../workinggroups/index.html">Working Groups</a>
                                </span>
                                <div class="dropdown-content">
                                    <p class="menu"><a href="../../workinggroups/asiapacific.html">Asia-Pacific</a></p>
                                    <p class="menu"><a href="../../workinggroups/civicparticipation.html">Civic Participation</a></p>
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      `;
    }
  }
  
  customElements.define('top-level-header-depth-zero-component', topLevelHeaderDepthZero);
  customElements.define('top-level-header-depth-one-component', topLevelHeaderDepthOne);
  customElements.define('top-level-header-depth-two-component', topLevelHeaderDepthTwo);

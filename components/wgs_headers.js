class currentWGsHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <div class="nav">
            <table>
                <tbody>
                    <tr class="middle-ribbon">
                        <td><a href="index.html">About</a></td>
                        <td><a href="civicparticipation.html">Civic Participation</a></td>
                        <td><a href="practitioners.html">Conversations with Practitioners</a></td>
                        <td><a href="data.html">Data Economies</a></td>
                        <td><a href="dev.html">Development</a></td>
                        <td><a href="distributivejustice.html">Discrimination</a></td>
                        <td><a href="environment.html">Environment</a></td>
                        <td><a href="inequality.html">Inequality</a></td>
                        <td><a href="latinamerica.html">Latin America</a></td>
                        <td><a href="lawpolicy.html">Law & Policy</a></td>
                        <td><a href="previous.html">Previous Working Groups</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
      `;
    }
  }

customElements.define('current-wgs-header-component', currentWGsHeader);

class previousWGsHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="nav">
          <table>
              <tbody>
                  <tr class="middle-ribbon">
                    <td><a href="previous.html">Previous Working Groups</a></td>
                    <td><a href="fairness.html">Bias, Discrimination, and Fairness</td>
                    <td><a href="healthcare.html">Healthcare</a></td>
                    <td><a href="housing.html">Housing</td>
                    <td><a href="OLM.html">Online Labor Markets</td>
                    <td><a href="../researchgroup/index.html">Reading Group</a></td>
                    <td><a href="index.html">Current Working Groups</a></td>
                  </tr>
              </tbody>
          </table>
      </div>
    `;
  }
}

customElements.define('previous-wgs-header-component', previousWGsHeader);

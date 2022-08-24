class currentWGsHeader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
          <div class="nav middle-ribbon px-5" style="justify-content: space-between">
                <span><a href="index.html">About</a></span> |
                <span><a href="civicparticipation.html">Civic Participation</a></span> |
                <span><a href="practitioners.html">Conversations with Practitioners</a></span> |
                <span><a href="dev.html">Development</a></span> |
                <span><a href="environment.html">Environment</a></span> |
                <span><a href="inequality.html">Inequality</a></span> |
                <span><a href="lawpolicy.html">Law & Policy</a></span> |
                <span><a href="previous.html">Previous Working Groups</a></span>
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
      <div class="nav middle-ribbon px-5" style="justify-content: space-between">
        <span><a href="previous.html">Previous Working Groups</a></span> |
        <span><a href="fairness.html">Bias, Discrimination, and Fairness</a></span> |
        <span><a href="data.html">Data Economies</a></span> |
        <span><a href="distributivejustice.html">Discrimination</a></span> |
        <span><a href="healthcare.html">Healthcare</a></span> |
        <span><a href="housing.html">Housing</a></span> |
        <span><a href="latinamerica.html">Latin America</a></span> |
        <span><a href="OLM.html">Online Labor Markets</a></span> |
        <span><a href="../researchgroup/index.html">First Reading Group</a></span> |
        <span><a href="index.html">Current Working Groups</a></span>
      </div>
    `;
  }
}

customElements.define('previous-wgs-header-component', previousWGsHeader);

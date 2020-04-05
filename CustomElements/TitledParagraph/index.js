class TitledParagraph extends HTMLElement {
  /*
    When Defining a constructor, always call super() first!
   ...specific to CE and required by the spec.
  */
  constructor() {
    super();
    this.addEventListener('click', e => {
      this.logText();
    });
  }

  connectedCallback(){
    this.innerHtml = `<section class="titled-paragraph">
      <h3 class="paragraph-title">Demo Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Phasellus non nunc aliquam, mattis felis eu, mattis augue. 
      Quisque semper aliquet augue non efficitur. 
      Proin sit amet tellus et mi varius gravida non vitae neque. 
      Aenean interdum euismod magna, nec venenatis turpis efficitur mollis. 
      Pellentesque pulvinar justo a lobortis egestas. Duis sed dapibus mauris. Suspendisse imperdiet posuere malesuada. Vestibulum tempor lacus eget enim fringilla, ut porta erat dictum. 
      Suspendisse gravida dui turpis, faucibus elementum nisi bibendum sodales.</p>
    </section>`
  }
}

customElements.define('titled-paragraph', TitledParagraph);
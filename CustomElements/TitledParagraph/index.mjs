class TitledParagraph extends HTMLElement {
  /*
    When Defining a constructor, always call super() first!
   ...specific to CE and required by the spec.
  */
  constructor() {
    console.log('constructor');
    super();
    this.addEventListener('click', e => {
      this.logText();
    });
  }

  /*
    "reacting" to attributes && attr changes
  */
  static get observedAttributes(){
    /*
      The browser will call this method
       for every change to attributes
        listed in the observedAttributes array.
    */
    return ['title', 'txt']
  }

  attributeChangedCallback(attrName, oldVal, newVal){
    console.log('%c attr-changed-cb', 'background-color: orange; color: white;')
    if(attrName === 'title'){
      this.titleVal = newVal
    }

    if(attrName === 'txt'){
      this.textVal = newVal
    }
  }

  connectedCallback(){
    console.log('conn cb');
    this.innerHTML = `<section class="titled-paragraph">
      <h3 class="paragraph-title">${this.titleVal || 'TITLE'}</h3>
      <p>${this.textVal || 'TEXT'}</p>
    </section>`
  }
}

customElements.define('titled-paragraph', TitledParagraph);
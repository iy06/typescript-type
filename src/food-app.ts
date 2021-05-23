class Score {

}

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    console.log(this);
    this.element.classList.toggle("food--active");
  }
}

class Foods {
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];

  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains("food--active")) {
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector(".food__socore");
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    console.log(this._activeElementsScore);
    return this._activeElementsScore;
  }

  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}
const foods = new Foods();
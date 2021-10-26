class ReactionsModel {
  postId: string;
  light: number;
  boat: number;
  heart: number;
  money: number;

  constructor(
    postId: string,
    light: number,
    boat: number,
    heart: number,
    money: number
  ) {
    this.postId = postId;
    this.light = light;
    this.boat = boat;
    this.heart = heart;
    this.money = money;
  }

  get total() {
    return this.light + this.boat + this.heart + this.money;
  }
}

export default ReactionsModel;

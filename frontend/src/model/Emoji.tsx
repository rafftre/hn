class Emoji {
  id: string;
  description: string;
  icon: string;

  constructor(
    id: string,
    description: string,
    icon: string
  ) {
    this.id = id;
    this.description = description;
    this.icon = icon;
  }
}

export default Emoji;

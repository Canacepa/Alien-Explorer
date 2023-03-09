class Sprite {
	constructor({ position, imageSrc }) {
		this.position = position;
		this.image = new Image();
		this.image.src = imageSrc;
		console.log(imageSrc);
	}
	draw() {
		c.drawImage(
			this.image,
			this.position.x,
			this.position.y,
			this.position.width,
			this.position.height
		);
	}
}

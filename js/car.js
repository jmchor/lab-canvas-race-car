class Car {
	constructor() {
		this.width = 50;
		this.height = 100;
		this.x = 225;
		this.y = 400;
		this.img = new Image();
		this.img.src = 'images/car.png';
		this.speed = 15;
	}

	drawCar() {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.fillText('Score: ' + score, 10, 50);
		ctx.font = '30px Arial';
		ctx.fontWeight = 'bold';
		ctx.fillStyle = 'red';
	}

	clear() {
		ctx.clearRect(this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		this.x -= this.speed;
		if (this.x <= 0) {
			this.x = 0;
		}
	}

	moveRight() {
		if (this.x >= 500) {
			this.x = 500;
		}
		this.x += this.speed;
	}

	moveUp() {
		this.y -= this.speed;

		if (this.y <= 0) {
			this.y = 0;
		}
	}

	moveDown() {
		this.y += this.speed;

		if (this.y >= 700) {
			this.y = 0;
		}
	}

	keyControls() {
		document.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'ArrowRight':
					this.moveRight();
					break;

				case 'ArrowLeft':
					this.moveLeft();
					break;

				case 'ArrowUp':
					this.moveUp();
					break;

				case 'ArrowDown':
					this.moveDown();
					break;
			}
		});
	}
}

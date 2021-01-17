class Queue {
    queue = [];
    playing = false;

    add(item) {
        this.queue.push(item);
    }

    remove(index) {
        this.queue.splice(index, 1);
    }

    play() {
        if (this.playing) {
            return;
        } else {
            if (this.queue.length) {
                this.playing = true;
                const audio = new Audio(this.queue[0]);
                audio.play();
                this.remove(0);

                audio.addEventListener("ended", () => {
                    setTimeout(() => {
                        this.playing = false;
                        this.play();
                    }, 3000);
                    animation.stop();
                });
            }
        }
    }
}

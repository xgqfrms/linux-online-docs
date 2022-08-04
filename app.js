class LinuxOnlineDocs {
    constructor(name, author, date) {
        this.name = name;
        this.author = author;
        this.date = new Date();
        // this.name = name;
        // this.author = author;
        if (date) {
            this.date = date;
        }
    }
    log() {
        console.log(`${this.name}'s author is ${this.author}`);
    }
}
const LOD = new LinuxOnlineDocs(`linux online docs website`, `xgqfrms`);
LOD.log();

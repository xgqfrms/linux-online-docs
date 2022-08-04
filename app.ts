interface LinuxOnlineDocsInterface {
  name: string;
  author: string;
  date?: Date;
}


class LinuxOnlineDocs implements LinuxOnlineDocsInterface {
  date: Date = new Date();
  constructor(public name: string, public author: string, date?: Date) {
    // this.name = name;
    // this.author = author;
    if(date) {
      this.date = date;
    }
  }
  log() {
    console.log(`${this.name}'s author is ${this.author}`);
  }
}

const LOD = new LinuxOnlineDocs(`linux online docs website`, `xgqfrms`);

LOD.log();


/*

refs: 

https://www.cnblogs.com/xgqfrms/p/16149930.html

https://www.typescriptlang.org/play?checkJs=true#code/PTAENABBjALBTaBrAUgZwFAQpeAnPAezzQC5QAmAZgoqzGgBsBDNNUAYVAG97R-ohAHZoALngCu0UcQAUASh59+-YACo1UUQE8ADvB5CJAWwBG+UAB9QEoQBN4AMwCWQ+HYC+oNcGUrRsM5oAHS6RLqgALw29k6u7gDcfqoaWnoG3EZmFta2Di5unt6+ECqgAUHBgraiSaWgHnyNfIzwoqDQUaBuAO6cCnUMoeFdAAwJ4GAA8gDSfNBVhDVdAERieK4A5itJGK6i+I7M0AYAMq4SAB5TQozxACKE0GgAkkIHeEcnSvxCzMbwcjrLZJfjMCQBYhA8QgjD8OzMA4AfnI90R8CSzQwTFY7HORmutweT3YzmMulaAPeeIuhLubkezzeHy+GThHWE6ykMjwsl0ElMd06fwB0I2Qk2ABpQPzBc5OuDIXgxVtpbKhaAEcjUejFLwyhUQiKDNFjaD-IEQorYMQutbiOb+M5HLItfA9eyyhBPQ12Y1+IxCJsFD8VIIRIRWsFA8GAAYAEm4huCxo8AHJ2Pa8KAgqBE8msx5Y-JzY1muGxKBTlN7l1elXaTd6fBGWhZLH6VdQMJm5qSaAevBTGhnAdY9LY5dNgBHRx4YxoYu7av3aNBgZAA
*/

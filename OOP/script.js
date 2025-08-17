/*
 *create a user class with 2 properties name and email . it also has a method called  viewDate() that allow
 *view to website date.
 */

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  ViewDate() {
    console.log(
      "this website provde many Date but... this process are in working",
    );
  }
}

/*
 *create a new class called admin which inherits from User . add a new method called editDate to admin that allows
 *it to edit website date
 */

class admin extends user {
  constructor(name, email) {
    super(name, email);
    this.name = name;
    this.email = email;
  }

  editDate() {
    console.log("edit your website boss ");
  }
}


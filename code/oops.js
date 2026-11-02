let ODVC = 
{
  "1": {"title": `Write a Java program to create a class called "Person" with a name and age attribute. Create two instances of the "Person" class, set their attributes using the constructor, and print their name and age.`,
    "code":  `package oops;
class Person{
    String name;
    int age;

    Person(String name , int age){
        this.name = name;
        this.age = age;
    }

    void display(){
        System.out.println("Name : "+ this.name);
        System.out.println("Age : " + this.age);
    }
}

public class q1 {
    public static void main(String agrs[]){
        Person p1 = new Person("Pooja" , 19);
        Person p2 = new Person("Radha", 20);

        p1.display();
        p2.display();
    }
}`,
    "output": `Name : Pooja
Age : 19
Name : Radha
Age : 20`
  },
  "2": {"title": `Write a Java program to create a class called "Dog" with a name and breed attribute. Create two instances of the "Dog" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.`,
    "code":  `package oops;
class Dog{
    String name;
    String breed ;

    Dog(String name, String breed){
        this.name = name;
        this.breed = breed;
    }

    void set_name(String name){
        this.name = name;
    }
    void set_breed(String  breed){
        this.breed = breed;
    }

    void display(){
         System.out.println("Name : "+ this.name);
        System.out.println("Breed: " + this.breed);
    }
}
public class q2 {
    public static void main(String agrs[]){
        Dog d1 = new Dog("Slate" , "Himalayan Sheepdog");
        d1.display();

        d1.set_breed("Pitbull");
        System.out.println("After changes : ");
        d1.display();
    }
}`,
    "output": `Name : Slate
Breed: Himalayan Sheepdog
After changes : 
Name : Slate
Breed: Pitbull`},
  "3": {"title": `Write a Java program to create a class called "Rectangle" with width and height attributes. Calculate the area and perimeter of the rectangle.`,
    "code":  `package oops;
class Rectangle{
    float height, width;

    Rectangle(float height, float width){
        this.height=height;
        this.width = width;
    }

    float calculateArea(){
        return height*width;
    }

    float calculatePerimeter(){
        return 2*(height+width);
    }
}

public class q3{
    public static void main(String args[]){
        Rectangle r1 = new Rectangle(10,5);
        float area = r1.calculateArea();
        float perimeter = r1.calculatePerimeter();

        System.out.println("Area : "+ area);
        System.out.println("Perimeter : "+perimeter);
    }
}`,
    "output": `Area : 50.0
Perimeter : 30.0`
  },
   "4": {"title": `Write a Java program to create a class called "Circle" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.`,
    "code":  `package oops;
class Circle{
    private float radius;
    Circle(float radius){
        this.radius = radius;
    }

    void set_radius(float radius){
        this.radius = radius;
    }
    float get_radius(){
        return this.radius;
    }

    float calculateArea(){
        return 3.14f * radius* radius;
    }

    float calculateCircum(){
        return 2* 3.14f*radius;
    }
}

public class q4 {
    public static void main(String args[]){
        Circle c1 = new Circle(5);
        float area = c1.calculateArea();
        float circumference = c1.calculateCircum();

        System.out.println("Area : " + area);
        System.out.println("Circumference : " + circumference);
    }
}`,
    "output": `Area : 78.5
Circumference : 31.400002`
  },
   "5": {"title": `Write a Java program to create a class called "Book" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.`,
    "code":  `package oops;
class Bookq5{
    String title;
    String ISBN;
    String author;

    Bookq5(String title, String ISBN, String author){
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
    }
    String get_title(){
        return title;
    }
    String get_isbn(){
        return ISBN;
    }
    String get_author(){
        return author;
    }
}

class BookCollectionq5{
    Bookq5 books[] = new Bookq5[10];
    int totalBooks = 0;

    void bookAdd(Bookq5 b){
        books[totalBooks] = b;
        totalBooks+=1;
    }
    void display(){
        for(int i = 0 ; i < totalBooks ; i++){
            System.out.println("\nBook "+(i+1) +":---");
            System.out.println("Title : "+books[i].title);
            System.out.println("Author : "+books[i].author);
            System.out.println("ISBN : "+books[i].ISBN);
        }
    }
}

public class q5{
    public static void main(String args[]){
        BookCollectionq5 collection1 = new BookCollectionq5();
        Bookq5 b1 = new Bookq5("Silence", "4245","Thich nahat");
        Bookq5 b2 = new Bookq5("Can't stop me","3524","Devid Goggins");
        collection1.bookAdd(b1);
        collection1.bookAdd(b2);

        collection1.display();
    }
}`,
    "output": `Book 1:---
Title : Silence
Author : Thich nahat
ISBN : 4245

Book 2:---
Title : Can't stop me
Author : Devid Goggins
ISBN : 3524`
  },
   "6": {"title": `Write a Java program to create a class called "Employee" with a name, job title, and salary attributes, and methods to calculate and update salary.`,
    "code":  `package oops;

class Employee {
    String name;
    String jobTitle;
    double salary;

    Employee(String name, String jobTitle, double salary) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    double calculateSalary() {
        return salary * 12;
    }

    void updateSalary(double newSalary) {
        salary = newSalary;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Job Title: " + jobTitle);
        System.out.println("Monthly Salary: " + salary);
        System.out.println("Annual Salary: " + calculateSalary());
    }
}

public class q6 {
    public static void main(String args[]) {

        Employee e = new Employee("Rahul", "Developer", 30000);

        System.out.println("Employee Details:");
        e.display();

        e.updateSalary(35000);

        System.out.println("After Salary Update:");
        e.display();
    }
}`,
    "output": `Employee Details:
Name: Rahul
Job Title: Developer
Monthly Salary: 30000.0
Annual Salary: 360000.0
After Salary Update:
Name: Rahul
Job Title: Developer
Monthly Salary: 35000.0
Annual Salary: 420000.0`
  },
   "7": {"title": `Write a Java program to create a class called "Bank" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called "Account" to maintain account details of a particular customer.`,
    "code":  ``,
    "output": ``
  },
   "8": {"title": `Write a Java program to create class called "TrafficLight" with attributes for color and duration, and methods to change the color and check for red or green.`,
    "code":  `package oops;

class TrafficLight {
    String color;
    int duration;

    TrafficLight(String color, int duration) {
        this.color = color;
        this.duration = duration;
    }

    void changeColor(String newColor, int newDuration) {
        color = newColor;
        duration = newDuration;
    }

    void checkLight() {
        if (color.equalsIgnoreCase("Red")) {
            System.out.println("Stop");
        } else if (color.equalsIgnoreCase("Green")) {
            System.out.println("Go");
        } else {
            System.out.println("Wait");
        }
    }

    void display() {
        System.out.println("Color: " + color);
        System.out.println("Duration: " + duration + " seconds");
        checkLight();
    }
}

public class q8 {
    public static void main(String args[]) {

        TrafficLight light = new TrafficLight("Red", 30);

        System.out.println("Traffic Light:");
        light.display();

        light.changeColor("Green", 45);

        System.out.println("After Changing Color:");
        light.display();
    }
}`,
    "output": `Traffic Light:
Color: Red
Duration: 30 seconds
Stop
After Changing Color:
Color: Green
Duration: 45 seconds
Go`
  },
   "9": {"title": `Write a Java program to create a class called "Employee" with a name, salary, and hire date attributes, and a method to calculate years of service.`,
    "code":  ``,
    "output": ``
  },
   "10": {"title": `Write a Java program to create a class called "Student" with a name, grade, and courses attributes, and methods to add and remove courses.`,
    "code":  ``,
    "output": ``
  },
   "11": {"title": `Write a Java program to create a class called "Library" with a collection of books and methods to add and remove books.`,
    "code":  ``,
    "output": ``
  },
   "12": {"title": `Write a Java program to create a class called "Airplane" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.`,
    "code":  ``,
    "output": ``
  },
   "13": {"title": `Write a Java program to create a class called "Inventory" with a collection of products and methods to add and remove products, and to check for low inventory.`,
    "code":  ``,
    "output": ``
  },
   "14": {"title": `Write a Java program to create a class called "School" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.`,
    "code":  ``,
    "output": ``
  },
   "15": {"title": `Write a Java program to create a class called "MusicLibrary" with a collection of songs and methods to add and remove songs, and to play a random song.`,
    "code":  ``,
    "output": ``
  },
   "16": {"title": `Write a Java program to create a class called "Shape" with abstract methods for calculating area and perimeter, and subclasses for "Rectangle", "Circle", and "Triangle".`,
    "code":  ``,
    "output": ``
  },
   "17": {"title": `Write a Java program to create a class called "Movie" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.`,
    "code":  ``,
    "output": ``
  },
   "18": {"title": `Write a Java program to create a class called "Restaurant" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.`,
    "code":  ``,
    "output": ``
  },
   "19": {
    "title": `Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.`,
    "code":  ``,
    "output": ``
  },
   "20": {"title": `Create a class showing an example of default constructor.`,
    "code":  ``,
    "output": ``
  },
   "21": {"title": `Create a class showing an example of parameterized constructor.`,
    "code":  ``,
    "output": ``
  },
   "22": {"title": `Create a class showing an example of copy constructor.`,
    "code":  ``,
    "output": ``
  },
  "23": {"title": `Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students`,
    "code":  ``,
    "output": ``
  },
  "24": {"title": `Create a class showing the area of circle and rectangle by method overloading.`,
    "code":  ``,
    "output": ``
  },
  "25": {"title": `Create a class, entering the command line arguments from the user and show all the arguments as output..`,
    "code":  ``,
    "output": ``
  },
  "26": {"title": `Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.`,
    "code":  ``,
    "output": ``
  },
  "27": {"title": `Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.`,
    "code":  ``,
    "output": ``
  },
  "28": {"title": `Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.`,
    "code":  ``,
    "output": ``
  },
  "29": {"title": `Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.`,
    "code":  ``,
    "output": ``
  },
  "30": {"title": `Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.`,
    "code":  ``,
    "output": ``
  },
  "31": {"title": `Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.`,
    "code":  ``,
    "output": ``
  },
  "32": {"title": `Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.`,
    "code":  ``,
    "output": ``
  }
};


function loadQuestion(num) {
  const question = ODVC[num.toString()];
  if (!question) return;

  document.querySelector('.default').style.display = 'none';
  const container = document.getElementById('question-container');
  container.style.display = 'block';

  const titleEl = document.getElementById('question-title');
  document.getElementById('question-number').textContent = `Q${num}`;
  titleEl.style.whiteSpace = "pre-line";
  titleEl.textContent = question.title;
  document.getElementById('code-block').textContent = question.code;

  const outputBlock = document.getElementById('output-block');
  const outputData = question.output;

  if (!outputData || outputData.length === 0) {
    outputBlock.innerHTML = "No data";
    return;
  }

  // If output is array of objects (table-like), render table
  if (Array.isArray(outputData) && outputData.every(item => typeof item === "object" && !Array.isArray(item))) {
    let table = "<table border='1'><thead><tr>";
    Object.keys(outputData[0]).forEach(key => {
      table += `<th>${key}</th>`;
    });
    table += "</tr></thead><tbody>";

    outputData.forEach(row => {
      table += "<tr>";
      Object.values(row).forEach(value => {
        table += `<td>${value ?? "NULL"}</td>`;
      });
      table += "</tr>";
    });

    table += "</tbody></table>";
    outputBlock.innerHTML = table;
  } else {
    // Otherwise, treat output as raw lines/text
    // Convert array to string with line breaks if needed
    if (Array.isArray(outputData)) {
      outputBlock.innerHTML = outputData.join("<br>");
    } else {
      outputBlock.innerHTML = outputData.toString().replace(/\n/g, "<br>");
    }
  }
}
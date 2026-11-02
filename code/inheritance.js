let ODVC = 
{
  "1": {"title": `Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.`,
    "code":  `package inheritance;
class Animal{
    void makeSound(){
        System.out.println("Animal makes sound!!");
    }
}

class Cat extends Animal{
    void makeSound(){
        System.out.println("Barks!!");
    }
}

public class q1{
    public static void main(String args[]){
        Animal obj = new Animal();
        obj.makeSound();

        Cat obj1 = new Cat();
        obj1.makeSound();
    }
}`,
    "output": `Animal makes sound!!
Barks!!`
  },
  "2": {"title": `Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print "Repairing a car".`,
    "code":  `package inheritance;
class Vehicle{
    void drive(){
        System.out.println("Vehicle");
    }
}

class Car extends Vehicle{
    void drive()
    {
        System.out.println("Repairing a car");
    }
}

public class q2{
    public static void main(String args[])
    {
        Car car1 = new Car();
        car1.drive();
    }
}
`,
    "output": `Repairing a car`},
  "3": {"title": `Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.`,
    "code":  `package inheritance;
abstract class Shape{
    abstract float getArea(int sides[]);
}

class Rectangle extends Shape{
    //Provide Array with 2 elements where first element is length and second is width as arguments
    float getArea(int sides[]){
        return sides[0]*sides[1];
    }
}

public class q3{
    public static void main(String args[]){
        Rectangle R1 = new Rectangle();
        int sides []  = {9,2}; 
        float area = R1.getArea(sides);
        System.out.println("Area of the rectangle is " + area);
    }
}`,
    "output": `Area of the rectangle is 18.0`
  },
   "4": {"title": `Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().`,
    "code":  `package inheritance;
abstract class Employee{
    abstract void work();
    abstract void salary();
}

class HRManager extends Employee{
    void work(){
        System.out.println("Supervises!");
    }
    void addEmployee(){
        System.out.println("Add Employee!");
    }
    void salary(){
        System.out.println("50000");
    }
}

public class q4{
    public static void main(String args[]){
        HRManager M1 = new HRManager();
        M1.work();
        M1.addEmployee();
        M1.salary();
            }
}`,
    "output": `Supervises!
Add Employee!
50000`
  },
   "5": {"title": `Write a Java program to create a class known as "BankAccount" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.`,
    "code":  `package inheritance;

import java.util.Scanner;

class BankAccount {
    private float balance;

    float deposit(float amount) {
        if (amount > 0) {
            balance += amount;
        } else {
            System.out.println("Invalid deposit amount.");
        }

        return balance;
    }

    float withdraw(float amount) {
        if (amount > 0 && (balance - amount) >= 0) {
            balance -= amount;
        } else {
            System.out.println("Not enough balance or invalid amount.");
        }

        return balance;
    }

    float getBalance() {
        return balance;
    }

    protected void setBalance(float balance) {
        this.balance = balance;
    }
}

class SavingsAccount extends BankAccount {

    float withdraw(float amount) {
        if (amount > 0 && (getBalance() - amount) >= 100) {
            setBalance(getBalance() - amount);
        } else {
            System.out.println("Minimum balance of 100 must be maintained.");
        }

        return getBalance();
    }
}

public class q5 {
    public static void main(String args[]) {

        BankAccount b1 = new BankAccount();
        SavingsAccount s1 = new SavingsAccount();

        Scanner input = new Scanner(System.in);

        int choice;
        float balance, amount;

        while (true) {
            System.out.println("Choose one option:");
            System.out.println("0. Exit");
            System.out.println("1. Bank Account");
            System.out.println("2. Savings Account");

            choice = input.nextInt();

            switch (choice) {

                case 0:
                    return;

                case 1:
                    System.out.println("------BANK ACCOUNT-----");
                    System.out.println("1. Check Balance");
                    System.out.println("2. Deposit");
                    System.out.println("3. Withdraw");

                    choice = input.nextInt();

                    switch (choice) {
                        case 1:
                            balance = b1.getBalance();
                            System.out.println("Balance: " + balance);
                            break;

                        case 2:
                            System.out.print("Enter the amount: ");
                            amount = input.nextFloat();
                            balance = b1.deposit(amount);
                            System.out.println("Total balance in bank: " + balance);
                            break;

                        case 3:
                            System.out.print("Enter the amount: ");
                            amount = input.nextFloat();
                            balance = b1.withdraw(amount);
                            System.out.println("Total balance in bank: " + balance);
                            break;

                        default:
                            System.out.println("Invalid choice.");
                    }
                    break;

                case 2:
                    System.out.println("------SAVINGS ACCOUNT-----");
                    System.out.println("1. Check Balance");
                    System.out.println("2. Deposit");
                    System.out.println("3. Withdraw");

                    choice = input.nextInt();

                    switch (choice) {
                        case 1:
                            balance = s1.getBalance();
                            System.out.println("Balance: " + balance);
                            break;

                        case 2:
                            System.out.print("Enter the amount: ");
                            amount = input.nextFloat();
                            balance = s1.deposit(amount);
                            System.out.println("Total balance in bank: " + balance);
                            break;

                        case 3:
                            System.out.print("Enter the amount: ");
                            amount = input.nextFloat();
                            balance = s1.withdraw(amount);
                            System.out.println("Total balance in bank: " + balance);
                            break;

                        default:
                            System.out.println("Invalid choice.");
                    }
                    break;

                default:
                    System.out.println("Invalid choice.");
            }
        }
    }
}`,
    "output": `Choose one option:
0. Exit
1. Bank Account
2. Savings Account
2
------SAVINGS ACCOUNT-----
1. Check Balance
2. Deposit
3. Withdraw

2
Enter the amount: 4000
Total balance in bank: 4000.0
Choose one option:
0. Exit
1. Bank Account
2. Savings Account

2
------SAVINGS ACCOUNT-----
1. Check Balance
2. Deposit
3. Withdraw
3
Enter the amount: 1000
Total balance in bank: 3000.0`
  },
   "6": {"title": `Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.`,
    "code":  `package inheritance;
abstract class Animal{
    abstract void move();
}

class Cheetah extends Animal{
    void move(){
        System.out.print("Run!!");
    }
   
}

public class q6{
    public static void main(String [] args){
        Animal c1 = new Cheetah();

        c1.move();
    }
}`,
    "output": `Run!!`
  },
   "7": {"title": `Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title`,
    "code":  `package inheritance;
class Person{
    String FirstName;
    String LastName;

    String getFirstName(){
        return FirstName;
    }
    String getLastName(){
        return LastName;
    }
}

class Employee extends Person{
    String EmpId;
    String jobTitle;

    Employee(String FirstName, String LastName, String EmpId, String jobTitle ){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmpId = EmpId;
        this.jobTitle = jobTitle;
    }

    String getEmployeeId(){
        return EmpId;
    }

    String getLastName(){
        return LastName +"  "+ jobTitle;
    }
}

public class q7{
    public static void main(String [] args){
        Employee emp1 = new Employee("Ram", "Mishra", "1253/11", "Manager");
        String id = emp1.getEmployeeId();
        String FirstName = emp1.getFirstName();
        String LastName = emp1.getLastName();

        System.out.println("Employee id. : " + id);
        System.out.println("First name  : " + FirstName);
        System.out.println("Last name and job title : " + LastName);
    }
}`,
    "output": `Employee id. : 1253/11
First name  : Ram
Last name and job title : Mishra  Manager`
  },
   "8": {"title": `Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.`,
    "code":  `package inheritance;
import java.util.Scanner;

abstract class Shape{
    abstract float getPerimeter();
    abstract float getArea();
}

class Circle{
    float radius;

    float getPerimeter(){
        return 2* 3.14f * radius;
    }
    float getArea(){
        return 3.14f * radius * radius;
    }

    Circle(float radius ){
        this.radius = radius;
    }
}

public class q8{
    public static void main(String [] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the radius : ");
        float radius = input.nextFloat();
    

        Circle c1 = new Circle(radius);
        float area = c1.getArea();
        float perimeter = c1.getPerimeter();

        System.out.println("Area : " + area);
        System.out.println("Perimeter : " + perimeter);
    }
}`,
    "output": `Enter the radius : 5
Area : 78.5
Perimeter : 31.400002`
  },
   "9": {"title": `Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.`,
    "code":  `package inheritance;

class Vehicle {
    String make, model, fuelType;
    int year;
    double fuelEfficiency, fuelAmount, maxSpeed;

    Vehicle(String make, String model, int year, String fuelType,
            double fuelEfficiency, double fuelAmount, double maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.fuelEfficiency = fuelEfficiency;
        this.fuelAmount = fuelAmount;
        this.maxSpeed = maxSpeed;
    }

    double calculateFuelEfficiency() {
        return fuelEfficiency;
    }

    double calculateDistance() {
        return fuelEfficiency * fuelAmount;
    }

    double getMaxSpeed() {
        return maxSpeed;
    }

    void display() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Fuel Type: " + fuelType);
        System.out.println("Fuel Efficiency: " + calculateFuelEfficiency() + " km/l");
        System.out.println("Distance: " + calculateDistance() + " km");
        System.out.println("Maximum Speed: " + getMaxSpeed() + " km/h");
    }
}

class Truck extends Vehicle {
    Truck(String make, String model, int year, String fuelType,
          double efficiency, double fuel, double speed) {
        super(make, model, year, fuelType, efficiency, fuel, speed);
    }
}

class Car extends Vehicle {
    Car(String make, String model, int year, String fuelType,
        double efficiency, double fuel, double speed) {
        super(make, model, year, fuelType, efficiency, fuel, speed);
    }
}

class Motorcycle extends Vehicle {
    Motorcycle(String make, String model, int year, String fuelType,
               double efficiency, double fuel, double speed) {
        super(make, model, year, fuelType, efficiency, fuel, speed);
    }
}

public class q9 {
    public static void main(String args[]) {
        Truck t = new Truck("Tata", "Prima", 2024, "Diesel", 5, 100, 120);
        Car c = new Car("Honda", "City", 2023, "Petrol", 18, 40, 180);
        Motorcycle m = new Motorcycle("Yamaha", "R15", 2024, "Petrol", 45, 10, 150);

        System.out.println("TRUCK DETAILS");
        t.display();

        System.out.println("CAR DETAILS");
        c.display();

        System.out.println("MOTORCYCLE DETAILS");
        m.display();
    }
}`,
    "output": `TRUCK DETAILS
Make: Tata
Model: Prima
Year: 2024
Fuel Type: Diesel
Fuel Efficiency: 5.0 km/l
Distance: 500.0 km
Maximum Speed: 120.0 km/h

CAR DETAILS
Make: Honda
Model: City
Year: 2023
Fuel Type: Petrol
Fuel Efficiency: 18.0 km/l
Distance: 720.0 km
Maximum Speed: 180.0 km/h

MOTORCYCLE DETAILS
Make: Yamaha
Model: R15
Year: 2024
Fuel Type: Petrol
Fuel Efficiency: 45.0 km/l
Distance: 450.0 km
Maximum Speed: 150.0 km/h`
  },
   "10": {"title": `Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.`,
    "code":  ``,
    "output": ``
  },
   "11": {"title": `Create a program, showing an example of super keyword`,
    "code":  `package inheritance;
class A{
    int x = 10;
}

class B extends A{
    int x= 20;

    void Ax(){
        System.out.println("property x of A : " + super.x);
    }

    void Bx(){
        System.out.println("property x of B : " + x);
    }
}

public class q11{
    public static void main(String [] args){
        B b = new B();

        b.Ax();
        b.Bx();
    }
}`,
    "output": `property x of A : 10
property x of B : 20`
  },
   "12": {"title": `Create a program, showing an example of super function`,
    "code":  `package inheritance;
class A{
    int a;
    A(int x){
        this.a=x;
        System.out.println("A : "+a);
    }
}

class B extends A{
    int b;
    B(int x){
        super(10);
        this.b = x;
        System.out.println("B : "+ b);
    }

}
public class q12{
    public static void main(String [] args){
        B b = new B(5);
    }
}`,
    "output": `A : 10
B : 5`
  },
   "13": {"title": `Create a program, showing an example of method overriding`,
    "code":  `package inheritance;
class A{
    void display(){
        System.out.println("A");
    }
}

class B  extends A{
    void display(){
        System.out.println("B");
    }
}

public class q13{
    public static void main(String[] args){
        B b = new B();
        b.display();
    }
}`,
    "output": `B`
  },
   "14": {"title": `Create a program, showing an example of dynamic method dispatch`,
    "code":  `package inheritance;
abstract class Animal{
    abstract void move();
}

class Cheetah extends Animal{
    void move(){
        System.out.print("Run!!");
    }
}

public class q14{
    public static void main(String [] args){
        Animal c1 = new Cheetah();

        c1.move();
    }
}`,
    "output": `Run!!`
  },
   "15": {"title": `Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.`,
    "code":  `package inheritance;
abstract class Animal{
    abstract void sound();
}

class Lion extends Animal{
    void sound(){
        System.out.println("I am Lion!");
    }
}

class Tiger extends Animal{
    void sound(){
        System.out.println("I am Tiger!");
    }
}

public class q15{
    public static void main(String[] args){
        Lion l = new Lion();
        Tiger t = new Tiger();

        l.sound();
        t.sound();
    }
}`,
    "output": `I am Lion!
I am Tiger!`
  },
   "16": {"title": `Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.`,
    "code":  `package inheritance;
abstract class Shape{
    abstract float calculateArea() ;
    abstract float calculatePerimeter();
}

class Circle extends Shape{
    float radius;

    Circle(float radius){
        this.radius = radius;
    }

    float calculateArea(){
        return radius * radius * 3.14f;
    }
     float calculatePerimeter(){
        return 2 * radius * 3.14f;
    }
}

class Triangle extends Shape{ 
    float side1 , side2, base, height;
    Triangle(float side1 , float side2, float base, float height){
        this.side1 = side1;
        this.side2 = side2;
        this.base = base;
        this.height = height;
    }

    float calculateArea(){
        return 0.5f * base * height;
    }
     float calculatePerimeter(){
        return side1 + side2 + base;
    }
}

public class q16{
    public static void main(String args[]){
        Circle c1 = new Circle(4);
        Triangle t1 = new Triangle(8,8,8,6);

        float triangleArea = t1.calculateArea();
        float trianglePerimeter = t1.calculatePerimeter();

         float cicleArea = c1.calculateArea();
         float circlePerimeter = c1.calculatePerimeter();

        System.out.println("Area and perimeter of the circle. : " + cicleArea + " " + circlePerimeter);
        System.out.println("Area and perimeter of the triangle. : " + triangleArea + " " + trianglePerimeter);
    }
}`,
    "output": `Area and perimeter of the circle. : 50.24 25.12
Area and perimeter of the triangle. : 24.0 24.0`
  },
   "17": {"title": `Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.`,
    "code":  `package inheritance;

abstract class BankAccount {
    double amount;

    BankAccount(double amount) {
        this.amount = amount;
    }

    abstract double deposit(double amount_depo);

    abstract double withdraw(double amount_wit);
}

class SavingsAccount extends BankAccount {

    SavingsAccount(double amount) {
        super(amount);
    }

    double deposit(double amount_depo) {
        amount += amount_depo;
        System.out.println("Savings Account Balance: " + amount);
        return amount;
    }

    double withdraw(double amount_wit) {
        if (amount - amount_wit < 100) {
            System.out.println("Minimum balance of 100 must be maintained.");
            return amount;
        }

        amount -= amount_wit;
        System.out.println("Savings Account Balance: " + amount);
        return amount;
    }
}

class CurrentAccount extends BankAccount {

    CurrentAccount(double amount) {
        super(amount);
    }

    double deposit(double amount_depo) {
        amount += amount_depo;
        System.out.println("Current Account Balance: " + amount);
        return amount;
    }

    double withdraw(double amount_wit) {
        if (amount_wit > amount) {
            System.out.println("Insufficient balance.");
            return amount;
        }

        amount -= amount_wit;
        System.out.println("Current Account Balance: " + amount);
        return amount;
    }
}

public class q17 {
    public static void main(String args[]) {

        SavingsAccount sa = new SavingsAccount(5000);

        System.out.println("SAVINGS ACCOUNT");
        sa.deposit(2000);
        sa.withdraw(3000);

        System.out.println("\\nCURRENT ACCOUNT");

        CurrentAccount ca = new CurrentAccount(10000);

        ca.deposit(5000);
        ca.withdraw(12000);
    }
}`,
    "output": `SAVINGS ACCOUNT
Savings Account Balance: 7000.0
Savings Account Balance: 4000.0

CURRENT ACCOUNT
Current Account Balance: 15000.0
Current Account Balance: 3000.0`
  },
   "18": {"title": `Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.`,
    "code":  `package inheritance;
abstract class Animal{
    abstract void sleep();
    abstract void eat();
}

class Lion extends Animal{
    void eat(){
         System.out.println("5–10 kg/day");
    }
    void sleep(){
        System.out.println("16–20 hours/day");
    }
}

class Tiger extends Animal{
    void eat(){
    System.out.println("5–10 kg/day");
    }
    void sleep(){
        System.out.println("16 hours/day");
    }
}

class Deer extends Animal{
    void eat(){
         System.out.println("2-4 kg/day");
    }
    void sleep(){
        System.out.println("4-6 hours/day");
    }
}

public class q18{
    public static void main(String[] args){
        Lion l = new Lion();
        Tiger t = new Tiger();
        Deer d = new Deer();
        
        l.eat();
        t.eat();
        d.eat();

        l.sleep();
        t.sleep();
        d.sleep();
    }
}`,
    "output": `5–10 kg/day
5–10 kg/day
2-4 kg/day
16–20 hours/day
16 hours/day
4-6 hours/day`
  },
   "19": {
    "title": `Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.`,
    "code":  `package inheritance;

abstract class Employee {
    String name;
    double salary;

    abstract double calculateSalary();
    abstract void displayInfo();
}

class Manager extends Employee {
    Manager(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    double calculateSalary() {
        return salary + (salary * 0.20);
    }

    void displayInfo() {
        System.out.println("Manager Name: " + name);
        System.out.println("Salary: " + calculateSalary());
    }
}

class Programmer extends Employee {
    Programmer(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    double calculateSalary() {
        return salary + (salary * 0.10);
    }

    void displayInfo() {
        System.out.println("Programmer Name: " + name);
        System.out.println("Salary: " + calculateSalary());
    }
}

public class q19 {
    public static void main(String args[]) {
        Manager m = new Manager("Rahul", 50000);
        Programmer p = new Programmer("Keshav", 40000);

        m.displayInfo();
        p.displayInfo();
    }
}`,
    "output": `Manager Name: Rahul
Salary: 60000.0
Programmer Name: Keshav
Salary: 44000.0`
  },
   "20": {"title": `Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape`,
    "code":  `package inheritance;

abstract class Shape3D {
    abstract double calculateVolume();
    abstract double calculateSurfaceArea();
}

class Sphere extends Shape3D {
    double radius;

    Sphere(double radius) {
        this.radius = radius;
    }

    double calculateVolume() {
        return (4.0 / 3.0) * Math.PI * radius * radius * radius;
    }

    double calculateSurfaceArea() {
        return 4 * Math.PI * radius * radius;
    }
}

class Cube extends Shape3D {
    double side;

    Cube(double side) {
        this.side = side;
    }

    double calculateVolume() {
        return side * side * side;
    }

    double calculateSurfaceArea() {
        return 6 * side * side;
    }
}

public class q20 {
    public static void main(String args[]) {
        Sphere s = new Sphere(5);
        Cube c = new Cube(4);

        System.out.println("SPHERE");
        System.out.println("Volume: " + s.calculateVolume());
        System.out.println("Surface Area: " + s.calculateSurfaceArea());

        System.out.println("\nCUBE");
        System.out.println("Volume: " + c.calculateVolume());
        System.out.println("Surface Area: " + c.calculateSurfaceArea());
    }
}`,
    "output": `SPHERE
Volume: 523.5987755982989
Surface Area: 314.1592653589793

CUBE
Volume: 64.0
Surface Area: 96.0`
  },
   "21": {"title": `Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.`,
    "code":  `package inheritance;

abstract class Vehicle {
    abstract void startEngine();
    abstract void stopEngine();
}

class Car extends Vehicle {
    void startEngine() {
        System.out.println("Car engine started.");
    }

    void stopEngine() {
        System.out.println("Car engine stopped.");
    }
}

class Motorcycle extends Vehicle {
    void startEngine() {
        System.out.println("Motorcycle engine started.");
    }

    void stopEngine() {
        System.out.println("Motorcycle engine stopped.");
    }
}

public class q21 {
    public static void main(String args[]) {
        Car c = new Car();
        Motorcycle m = new Motorcycle();

        c.startEngine();
        c.stopEngine();

        m.startEngine();
        m.stopEngine();
    }
}`,
    "output": `Car engine started.
Car engine stopped.
Motorcycle engine started.
Motorcycle engine stopped.`
  },
   "22": {"title": `Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.`,
    "code":  `package inheritance;

abstract class Person {
    abstract void eat();
    abstract void exercise();
}

class Athlete extends Person {
    void eat() {
        System.out.println("Athlete eats a healthy and protein-rich diet.");
    }

    void exercise() {
        System.out.println("Athlete exercises regularly for several hours.");
    }
}

class LazyPerson extends Person {
    void eat() {
        System.out.println("Lazy person eats junk food.");
    }

    void exercise() {
        System.out.println("Lazy person rarely exercises.");
    }
}

public class q22 {
    public static void main(String args[]) {
        Athlete a = new Athlete();
        LazyPerson l = new LazyPerson();

        a.eat();
        a.exercise();

        l.eat();
        l.exercise();
    }
}`,
    "output": `Athlete eats a healthy and protein-rich diet.
Athlete exercises regularly for several hours.
Lazy person eats junk food.
Lazy person rarely exercises.`
  },
  "23": {"title": `Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.`,
    "code":  `package inheritance;

abstract class Instrument {
    abstract void play();
    abstract void tune();
}

class Glockenspiel extends Instrument {
    void play() {
        System.out.println("Glockenspiel produces sound by striking metal bars...");
    }

    void tune() {
        System.out.println("Glockenspiel is tuned by adjusting the metal bars....");
    }
}

class Violin extends Instrument {
    void play() {
        System.out.println("Violin produces sound using a bow on its strings...");
    }

    void tune() {
        System.out.println("Violin is tuned by adjusting its strings...");
    }
}

public class q23 {
    public static void main(String args[]) {
        Glockenspiel g = new Glockenspiel();
        Violin v = new Violin();

        g.play();
        g.tune();

        v.play();
        v.tune();
    }
}`,
    "output": `Glockenspiel produces sound by striking metal bars...
Glockenspiel is tuned by adjusting the metal bars....
Violin produces sound using a bow on its strings...
Violin is tuned by adjusting its strings...`
  },
  "24": {"title": `Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.`,
    "code":  `package inheritance;

abstract class Shape2D {
    abstract void draw();
    abstract void resize(int value);
}

class Rectangle extends Shape2D {
    int len, wid;

    void draw() {
        System.out.println("Drawing a rectangle.");
    }

    void resize(int value) {
        len = value;
        wid = value;
        System.out.println("Rectangle resized to " + len + " x " + wid);
    }
}

class Circle extends Shape2D {
    int r;

    void draw() {
        System.out.println("Drawing a circle.");
    }

    void resize(int value) {
        r = value;
        System.out.println("Circle resized to radius " + r);
    }
}

public class q24 {
    public static void main(String args[]) {
        Rectangle r = new Rectangle();
        Circle c = new Circle();

        r.draw();
        r.resize(10);

        c.draw();
        c.resize(7);
    }
}`,
    "output": `Drawing a rectangle.
Rectangle resized to 10 x 10
Drawing a circle.
Circle resized to radius 7`
  },
  "25": {"title": `Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.`,
    "code":  `package inheritance;

abstract class Bird {
    abstract void fly();
    abstract void makeSound();
}

class Eagle extends Bird {
    void fly() {
        System.out.println("Eagle flies high in the sky.");
    }

    void makeSound() {
        System.out.println("Eagle makes a high-pitched screeching sound..");
    }
}

class Hawk extends Bird {
    void fly() {
        System.out.println("Hawk flies swiftly and glides through the air.");
    }

    void makeSound() {
        System.out.println("Hawk makes a sharp screaming sound.");
    }
}

public class q25 {
    public static void main(String args[]) {
        Eagle e = new Eagle();
        Hawk h = new Hawk();

        e.fly();
        e.makeSound();

        h.fly();
        h.makeSound();
    }
}`,
    "output": `Eagle flies high in the sky.
Eagle makes a high-pitched screeching sound..
Hawk flies swiftly and glides through the air.
Hawk makes a sharp screaming sound.`
  },
  "26": {"title": `Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape`,
    "code":  `package inheritance;

abstract class GeometricShape {
    abstract double area();
    abstract double perimeter();
}

class Triangle extends GeometricShape {
    double a, b, c;

    Triangle(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    double area() {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    double perimeter() {
        return a + b + c;
    }
}

class Square extends GeometricShape {
    double side;

    Square(double side) {
        this.side = side;
    }

    double area() {
        return side * side;
    }

    double perimeter() {
        return 4 * side;
    }
}

public class q26 {
    public static void main(String args[]) {
        Triangle t = new Triangle(3, 4, 5);
        Square s = new Square(5);

        System.out.println("TRIANGLE");
        System.out.println("Area: " + t.area());
        System.out.println("Perimeter: " + t.perimeter());

        System.out.println("\nSQUARE");
        System.out.println("Area: " + s.area());
        System.out.println("Perimeter: " + s.perimeter());
    }
}`,
    "output": `TRIANGLE
Area: 6.0
Perimeter: 12.0

SQUARE
Area: 25.0
Perimeter: 20.0`
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
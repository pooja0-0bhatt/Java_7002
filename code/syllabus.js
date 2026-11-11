let ODVC = 
{
  "1": {"title": `Program to print a simple message.`,
    "code":  `package syllabus;

public class q1 {
    public static void main(String args[]) {
        System.out.println("Hello, Java!");
    }
}`,
    "output": `Hello, Java!`
  },
  "2": {"title": `Program to demonstrate data types and variables.`,
    "code":  `package syllabus;

public class q2 {
    public static void main(String args[]) {
        int age = 20;
        double marks = 85.5;
        char grade = 'A';
        boolean passed = true;
        String name = "Rahul";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + passed);
    }
}
`,
    "output": `Name: Rahul
Age: 20
Marks: 85.5
Grade: A
Passed: true`},
  "3": {"title": `Program to demonstrate command-line arguments`,
    "code":  `package syllabus;

public class q3 {
    public static void main(String args[]) {
        System.out.println("First argument: " + args[0]);
        System.out.println("Second argument: " + args[1]);
    }
}
`,
    "output": `java syllabus.q3 Hello Everyone
First argument: Hello
Second argument: Everyone`
  },
   "4": {"title": `Program to demonstrate arithmetic operators (+, −, *, /, %).`,
    "code":  `
package syllabus;

public class q4 {
    public static void main(String args[]) {
        int a = 10;
        int b = 3;

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));
    }
}
`,
    "output": `Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3
Remainder: 1`
  },
   "5": {"title": `Program to read input using Scanner.`,
    "code":  `package syllabus;

import java.util.Scanner;

public class q5 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = input.nextLine();

        System.out.println("Enter your age:");
        int age = input.nextInt();

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

        input.close();
    }
}
`,
    "output": `Enter your name:
Pooja Bhatt
Enter your age:
20
Name: Pooja Bhatt
Age: 20`
  },
   "6": {"title": `Program to check even/odd using if-else.`,
    "code":  `package syllabus;

import java.util.Scanner;

public class q6 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a number:");
        int num = input.nextInt();

        if (num % 2 == 0)
            System.out.println("Even number");
        else
            System.out.println("Odd number");

        input.close();
    }
}
`,
    "output": `Enter a number:
55
Odd number`
  },
   "7": {"title": `Program to demonstrate relational and logical operators.`,
    "code":  `package syllabus;

public class q7 {
    public static void main(String args[]) {
        int a = 10;
        int b = 5;

        System.out.println(a > b);
        System.out.println(a == b);
        System.out.println(a != b);
        System.out.println(a > 0 && b > 0);
        System.out.println(a > 0 || b < 0);
        System.out.println(!(a > b));
    }
}
`,
    "output": `true
false
true
true
true
false`
  },
   "8": {"title": `Program to print numbers from 1 to 10 using a loop.`,
    "code":  `
package syllabus;

public class q8 {
    public static void main(String args[]) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}
`,
    "output": `1
2
3
4
5
6
7
8
9
10`
  },
   "9": {"title": `Program to demonstrate break and continue in loops.`,
    "code":  `
package syllabus;

public class q9 {
    public static void main(String args[]) {
        System.out.println("Using break:");

        for (int i = 1; i <= 10; i++) {
            if (i == 5)
                break;

            System.out.println(i);
        }

        System.out.println("Using continue:");

        for (int i = 1; i <= 5; i++) {
            if (i == 3)
                continue;

            System.out.println(i);
        }
    }
}
`,
    "output": `Using break:
1
2
3
4
Using continue:
1
2
4
5`
  },
   "10": {"title": `Program to create a simple class and object.`,
    "code":  `
package syllabus;

class Student {
    String name = "Rahul";
    int age = 20;
}

public class q10 {
    public static void main(String args[]) {
        Student s = new Student();

        System.out.println("Name: " + s.name);
        System.out.println("Age: " + s.age);
    }
}
`,
    "output": `Name: Rahul
Age: 20`
  },
   "11": {"title": `Program to access class members (variables & methods).`,
    "code":  `
package syllabus;

class Student {
    String name = "Rahul";

    void display() {
        System.out.println("Name: " + name);
    }
}

public class q11 {
    public static void main(String args[]) {
        Student s = new Student();

        System.out.println(s.name);
        s.display();
    }
}
`,
    "output": `Rahul
Name: Rahul`
  },
   "12": {"title": `Program to demonstrate constructors.`,
    "code":  `
package syllabus;

class Student {
    String name;
    int age;

    Student(String n, int a) {
        name = n;
        age = a;
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class q12 {
    public static void main(String args[]) {
        Student s = new Student("Pooja", 20);
        s.display();
    }
}
`,
    "output": `Name: Pooja
Age: 20`
  },
   "13": {"title": `Program to demonstrate constructor overloading.`,
    "code":  `
package syllabus;

class Student {
    String name;
    int age;

    Student() {
        name = "Unknown";
        age = 0;
    }

    Student(String n, int a) {
        name = n;
        age = a;
    }

    void display() {
        System.out.println(name + " " + age);
    }
}

public class q13 {
    public static void main(String args[]) {
        Student s1 = new Student();
        Student s2 = new Student("Rahul", 20);

        s1.display();
        s2.display();
    }
}
`,
    "output": `Unknown 0
Rahul 20`
  },
   "14": {"title": `Program to demonstrate method overloading.`,
    "code":  `
package syllabus;

class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class q14 {
    public static void main(String args[]) {
        Calculator c = new Calculator();

        System.out.println(c.add(10, 20));
        System.out.println(c.add(10, 20, 30));
    }
}
`,
    "output": `30
60`
  },
   "15": {"title": `Program to demonstrate static variables and static methods.`,
    "code":  `
package syllabus;

class Student {
    static String college = "PGGC-11";
    int rollNo;

    Student(int r) {
        rollNo = r;
    }

    static void displayCollege() {
        System.out.println("College: " + college);
    }

    void display() {
        System.out.println("Roll number: " + rollNo);
    }
}

public class q15 {
    public static void main(String args[]) {
        Student s1 = new Student(1);
        Student s2 = new Student(2);

        Student.displayCollege();
        s1.display();
        s2.display();
    }
}
`,
    "output": `College: PGGC-11
Roll number: 1
Roll number: 2`
  },
   "16": {"title": `Program to demonstrate final variable, final method, final class.`,
    "code":  `
package syllabus;

final class A {
    final int num = 10;

    final void display() {
        System.out.println("Number: " + num);
    }
}

public class q16 {
    public static void main(String args[]) {
        A obj = new A();
        obj.display();
    }
}
`,
    "output": `Number: 10`
  },
   "17": {"title": `Program to demonstrate abstract class and abstract method.`,
    "code":  `
package syllabus;

abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks.");
    }
}

public class q17 {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.sound();
    }
}
`,
    "output": `Dog barks.`
  },
   "18": {"title": `Program to demonstrate the finalize() method.`,
    "code":  `package syllabus;

class Example {
    protected void finalize() {
        System.out.println("Finalize method called.");
    }
}

public class q18 {
    public static void main(String args[]) {

        Example ex = new Example();

        ex = null;

        System.gc();

        System.out.println("End of main method.");
    }
}`,
    "output": `End of main method.
Finalize method called.`
  },
   "19": {
    "title": `Program to create and display an array.`,
    "code":  `
package syllabus;

public class q19 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};

        System.out.println("Array elements:");

        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
`,
    "output": `Array elements:
10
20
30
40
50`
  },
   "20": {"title": `Program to find the sum of array elements.`,
    "code":  `
package syllabus;

public class q20 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};
        int sum = 0;

        for (int i = 0; i < a.length; i++) {
            sum = sum + a[i];
        }

        System.out.println("Sum: " + sum);
    }
}
`,
    "output": `Sum: 150`
  },
   "21": {"title": `Program to find the largest element in an array.`,
    "code":  `
package syllabus;

public class q21 {
    public static void main(String args[]) {
        int a[] = {10, 25, 7, 45, 18};
        int largest = a[0];

        for (int i = 1; i < a.length; i++) {
            if (a[i] > largest) {
                largest = a[i];
            }
        }

        System.out.println("Largest element = " + largest);
    }
}
`,
    "output": `Largest element = 45`
  },
   "22": {"title": `Program to create and print a 2-dimensional array.`,
    "code":  `
package syllabus;

public class q22 {
    public static void main(String args[]) {
        int a[][] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    }
}
`,
    "output": `1 2 3 
4 5 6 
7 8 9 `
  },
  "23": {"title": `Program to demonstrate simple String operations (length, concat, compare).`,
    "code":  `
package syllabus;

public class q23 {
    public static void main(String args[]) {
        String s1 = "Hello";
        String s2 = "Java";

        System.out.println("Length of s1 = " + s1.length());
        System.out.println("Concatenation = " + s1.concat(" " + s2));

        System.out.println("Comparison = " + s1.compareTo(s2));
    }
}
`,
    "output": `Length of s1 = 5
Concatenation = Hello Java
Comparison = -2`
  },
  "24": {"title": `Program to reverse a string.`,
    "code":  `
package syllabus;

public class q24 {
    public static void main(String args[]) {
        String str = "Hello Java";
        String reverse = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }

        System.out.println("Original string = " + str);
        System.out.println("Reversed string = " + reverse);
    }
}
`,
    "output": `Original string = Hello Java
Reversed string = avaJ olleH`
  },
  "25": {"title": `Program to show StringBuffer operations (append, insert, delete).`,
    "code":  `
package syllabus;

public class q25 {
    public static void main(String args[]) {
        StringBuffer str = new StringBuffer("Hello");

        str.append(" Java");
        System.out.println("After append: " + str);

        str.insert(5, " World");
        System.out.println("After insert: " + str);

        str.delete(5, 11);
        System.out.println("After delete: " + str);
    }
}
`,
    "output": `After append: Hello Java
After insert: Hello World Java
After delete: Hello Java`
  },
  "26": {"title": `Program to demonstrate single inheritance.`,
    "code":  `
package syllabus;

// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks.");
    }
}

public class q26 {
    public static void main(String args[]) {
        Dog d = new Dog();

        d.eat();
        d.bark();
    }
}
`,
    "output": `Animal eats food.
Dog barks.`
  },
  "27": {"title": `Program to demonstrate multilevel inheritance.`,
    "code":  `
package syllabus;

// Grandparent class
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

// Parent class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks.");
    }
}

// Child class
class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps.");
    }
}

public class q27 {
    public static void main(String args[]) {
        Puppy p = new Puppy();

        p.eat();
        p.bark();
        p.weep();
    }
}
`,
    "output": `Animal eats food.
Dog barks.
Puppy weeps.`
  },
  "28": {"title": `Program to demonstrate hierarchical inheritance.`,
    "code":  `
package syllabus;

// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats food.");
    }
}

// First child class
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks.");
    }
}

// Second child class
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows.");
    }
}

public class q28 {
    public static void main(String args[]) {
        Dog d = new Dog();
        Cat c = new Cat();

        d.eat();
        d.bark();

        c.eat();
        c.meow();
    }
}
`,
    "output": `Animal eats food.
Dog barks.
Animal eats food.
Cat meows.`
  },
  "29": {"title": `Program to demonstrate method overriding.`,
    "code":  `
package syllabus;

// Parent class
class Animal {
    void sound() {
        System.out.println("Animal makes a sound.");
    }
}

// Child class
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}

public class q29 {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.sound();
    }
}
`,
    "output": `Dog barks.`
  },
  "30": {"title": `Program to demonstrate multiple inheritance using interfaces.`,
    "code":  `
package syllabus;

interface Printable {
    void print();
}

interface Showable {
    void show();
}

// Implementing both interfaces
class Demo implements Printable, Showable {
    public void print() {
        System.out.println("Printing...");
    }

    public void show() {
        System.out.println("Showing...");
    }
}

public class q30 {
    public static void main(String args[]) {
        Demo d = new Demo();

        d.print();
        d.show();
    }
}
`,
    "output": `Printing...
Showing...`
  },
  "31": {"title": `Program to demonstrate super keyword.`,
    "code":  `
package syllabus;

// Parent class
class Animal {
    String name = "Animal";

    void display() {
        System.out.println("Parent class method.");
    }
}

// Child class
class Dog extends Animal {
    String name = "Dog";

    void show() {
        System.out.println("Parent name: " + super.name);
        System.out.println("Child name: " + name);
        super.display();
    }
}

public class q31 {
    public static void main(String args[]) {
        Dog d = new Dog();
        d.show();
    }
}
`,
    "output": `Parent name: Animal
Child name: Dog
Parent class method.`
  },
  "32": {"title": `Program to demonstrate visibility (public, private, protected).`,
    "code":  `
package syllabus;

class Demo {
    public int a = 10;
    private int b = 20;
    protected int c = 30;

    void display() {
        System.out.println("Private variable: " + b);
    }
}

public class q32 {
    public static void main(String args[]) {
        Demo d = new Demo();

        System.out.println("Public variable: " + d.a);
        d.display();
        System.out.println("Protected variable: " + d.c);
    }
}
`,
    "output": `Public variable: 10
Private variable: 20
Protected variable: 30`
  },
   "33": {"title": `Program to create a user-defined package.`,
    "code":  `package syllabus;

public class q33{
    public static void display(){
        System.out.println("You accessed a function of class q33 class part of syllabus package.");
    }

-----------------test.java----------------------
package syllabus;
class test{
    public static void main(String args[]){
        q33.display();
    }
}

    
}`,
    "output": `You accessed a function of class q33 class part of syllabus package.`
  },
   "34": {"title": `Program to import a package and use its class.`,
    "code":  `
package syllabus;

import syllabus.mypack.Message;

public class q34 {
    public static void main(String args[]) {
        Message m = new Message();
        m.display();
    }
}
`,
    "output": `This is a user-defined package.`
  },
   "35": {"title": `Program to demonstrate try-catch.`,
    "code":  `
package syllabus;

public class q35 {
    public static void main(String args[]) {
        try {
            int a = 10;
            int b = 0;

            int result = a / b;
            System.out.println("Result = " + result);
        }
        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
        }

        System.out.println("Program continues.");
    }
}
`,
    "output": `Cannot divide by zero.
Program continues.`
  }, 
  "36": {"title": `Program to demonstrate multiple catch blocks.`,
    "code":  `package syllabus;

public class q36 {
    public static void main(String args[]) {
        try {
            int a[] = {10, 20, 30};
            int result = 10 / 0;

            System.out.println(a[5]);
            System.out.println(result);
        }
        catch (ArithmeticException e) {
            System.out.println("Division by zero is not allowed.");
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is invalid.");
        }

        System.out.println("Program continues.");
    }
}
`,
    "output": `Division by zero is not allowed.
Program continues.`
  }
  , 
  "37": {"title": `Program to demonstrate finally block.`,
    "code":  `package syllabus;

public class q37 {
    public static void main(String args[]) {
        try {
            int a = 10 / 0;
        }
        catch (ArithmeticException e) {
            System.out.println("Division by zero is not allowed.");
        }
        finally {
            System.out.println("Finally block is executed.");
        }
    }
}
`,
    "output": `Division by zero is not allowed.
Finally block is executed.`
  }, 
  "38": {"title": `Program to create a user-defined exception.`,
    "code":  `package syllabus;

// User-defined exception
class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class q38 {
    public static void main(String args[]) {
        int age = 15;

        try {
            if (age < 18) {
                throw new InvalidAgeException("Age must be 18 or above.");
            }

            System.out.println("Eligible to vote.");
        }
        catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}
`,
    "output": `Age must be 18 or above.`
  },
   "39": {"title": `Program to demonstrate checked exception (FileNotFound).`,
    "code":  `package syllabus;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class q39 {
    public static void main(String args[]) {
        try {
            File file = new File("data.txt");
            Scanner input = new Scanner(file);

            System.out.println(input.nextLine());
            input.close();
        }
        catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}
`,
    "output": `hello everyone! `
  },
   "40": {"title": `Program to demonstrate unchecked exception (ArithmeticException).`,
    "code":  `package syllabus;

public class q40 {
    public static void main(String args[]) {

        int a = 10, b = 0;

        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: " + e);
        }

        System.out.println("Program continues...");
    }
}
`,
    "output": `Exception caught: java.lang.ArithmeticException: / by zero
Program continues...`
  },
  "41": {"title": `Program to create a thread using the Thread class.`,
    "code":  `package syllabus;

class Thread1 extends Thread{
    public void run(){
        System.out.println("Hello world!");
    }
}

public class q41{
    public static void main(String args[]){
        Thread1 t1 = new Thread1();

        t1.start();
    }
}`,
    "output": `Hello world!`
  },
  "42": {"title": `Program to create a thread using the Runnable interface.`,
    "code":  `package syllabus;

class MyThread implements Runnable {
    public void run() {
        System.out.println("Hello world!");
    }
}

public class q42 {
    public static void main(String args[]) {

        MyThread t1 = new MyThread();

        Thread th = new Thread(t1);

        th.start();
    }
}`,
    "output": `Hello world!`
  },
  "43": {"title": `Program to demonstrate multiple threads running together.`,
    "code":  `package syllabus;

class Thread1 extends Thread{
    String name;
    Thread1(String name){
        this.name = name;
    }
    public void run(){
        for(int i=0;i<5;i++){
            System.out.println(name + "  "+ i);
        }
    }
}


public class q43{
    public static void main(String args[]){
        Thread1 t1 = new Thread1("t1");
        Thread1 t2 = new Thread1("t2");
        Thread1 t3 = new Thread1("t3");

        t1.start();
        t2.start();
        t3.start();
    }
}`,
    "output": `t2  0
t2  1
t2  2
t2  3
t2  4
t3  0
t3  1
t3  2
t1  0
t1  1
t1  2
t1  3
t1  4
t3  3
t3  4`
  },
  "44": {"title": `Program to demonstrate thread priorities.`,
    "code":  `package syllabus;

class Thread1 extends Thread{
    String name;
    Thread1(String name){
        this.name = name;
    }
    public void run(){
        for(int i=0;i<5;i++){
            System.out.println(name + "  "+ i);
        }
    }
}


public class q44{
    public static void main(String args[]){
        Thread1 t1 = new Thread1("t1");
        Thread1 t2 = new Thread1("t2");
        Thread1 t3 = new Thread1("t3");

        t1.setPriority(4);
        t2.setPriority(10);
        t3.setPriority(6);

        t1.start();
        t2.start();
        t3.start();
    }
}`,
    "output": `t3  0
t3  1
t3  2
t2  0
t2  1
t2  2
t2  3
t2  4
t1  0
t1  1
t1  2
t1  3
t1  4
t3  3
t3  4`
  },
  "45": {"title": `Program to demonstrate synchronization.`,
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

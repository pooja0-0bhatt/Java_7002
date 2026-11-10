let dql = 
{
  "1": {
    "title": `Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.`,
    "code":  `package interfaces;
    interface Shape{
    float getArea();
}

class Circle implements Shape{
    float radius;
    Circle(float radius){
        this.radius = radius;
    }

    public float getArea(){
        return radius * radius * 3.14f;
    }
}

class Triangle implements Shape{
    float base , height;

    Triangle(float height , float base){
        this.height = height;
        this.base = base;
    }
    
    public float getArea(){
        return 0.5f * height * base;
    }
}

class Rectangle implements Shape{
    float length, width;

    Rectangle(float length, float width){
        this.length = length;
        this.width = width;
    }

    public float getArea(){
        return length * width;
    }
}

public class q1{
    public static void main(String args[]){
        Circle c = new Circle(4);
        Triangle t = new Triangle(5,3);
        Rectangle r = new Rectangle(5,4);

        float areaC = c.getArea();
        float areaT = t.getArea();
        float areaR = r.getArea();

        System.out.println("Area of the circle : "+ areaC);
        System.out.println("Area of the triangle : "+ areaT);
        System.out.println("Area of the rectangle : "+areaR);
    }
}`,
    "output": `Area of the circle : 50.24
Area of the triangle : 7.5
Area of the rectangle : 20.0`
  },
  "2": {
    "title": `Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print "Dog is barking".`,
    "code":  `package interfaces;
    interface Animal{
    void speak();
}

class Dog implements Animal{
    public void speak(){
        System.out.println("Dog is barking");
    }
}

public class q2 {
    public static void main(String args[]){
        Dog d = new Dog();
        d.speak();
    }
}`,
    "output": `Dog is barking`
  },
  "3": {
    "title": `Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.`,
    "code":  `package interfaces;
    interface Flyable{
    void fly_obj();
}

class Spacecraft implements Flyable{
     public void fly_obj(){
        System.out.println("Spacecraft flying.");
    }
}

class Airplane implements Flyable{
    public void fly_obj(){
        System.out.println("Airplane flying.");
    }
}

class Helicopter implements Flyable{
     public void fly_obj(){
        System.out.println("Helicopter flying.");
    }
}

public class q3 {
    public static void main(String args[]){
        Spacecraft s1 = new Spacecraft();
        Airplane a1 = new Airplane();
        Helicopter h1 = new Helicopter();

        s1.fly_obj();
        a1.fly_obj();
        h1.fly_obj();
    }
}`,
    "output": `Spacecraft flying.
Airplane flying.
Helicopter flying.`
  },
   "4": {
    "title": `Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.`,
    "code":  `package interfaces;
    //deposit, withdraw, calculate interest, and view balances
interface Accounts{
    float deposit(float amount);
    float withdraw(float amount);
    float calcInterest(float balance);
    float get_Balance();
}

class Bank {
    SavingsAccount savingAccounts[] = new SavingsAccount[10];
    CurrentAccount currentAccounts[] = new CurrentAccount[10];

    int totalSavingAcc = 0;
    int totalCurrentAcc = 0;

    int addSavingAcc(SavingsAccount S1){
        savingAccounts[totalSavingAcc] = S1;
        totalSavingAcc++;
        return totalSavingAcc;
    }
    int addCurrentAcc(CurrentAccount S1){
        currentAccounts[totalCurrentAcc] = S1;
        totalCurrentAcc++;
        return totalCurrentAcc;
    }
}

class SavingsAccount implements Accounts{
    private float balance;
    public float deposit(float amount){
        balance += amount;
        return balance;
    };
    public float withdraw(float amount){
        if((balance - amount) >=500){
            balance -= amount;
        }
        return balance;
    };
    public float calcInterest(float balance){
        return balance * 0.05f;
    };
    public float get_Balance(){
        return balance;
    };

    public void set_balance(float balance){
        this.balance = balance;
    }
}

class CurrentAccount implements Accounts{
    float balance;
    public float deposit(float amount){
        balance += amount;
        return balance;
    };
    public float withdraw(float amount){
        if((balance - amount) >=0){
            balance -= amount;
        }
        return balance;
    };
    public float calcInterest(float balance){
        return balance * 0.1f;
    };
    public float get_Balance(){
        return balance;
    };
    public void set_balance(float balance){
        this.balance = balance;
    }
}

public class q4{
    public static void main(String args[]){
          Bank savingAccList = new Bank();
          SavingsAccount S1 = new SavingsAccount();
          SavingsAccount S2 = new SavingsAccount();
          S1.set_balance(5000);
          S2.set_balance(10000);

        savingAccList.addSavingAcc(S1);
        savingAccList.addSavingAcc(S2);
        float bal = savingAccList.savingAccounts[0].get_Balance();
        float bal2 = savingAccList.savingAccounts[1].get_Balance();
        System.out.println(bal + "  " + bal2 );
    }
}`,
    "output": `5000.0  10000.0`
  },
   "5": {
    "title": `Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.`,
    "code":  `package interfaces;

interface Resizable{
    void resizeWidth(int width);
    void resizeHeight(int height);
} 

class Rectangle implements Resizable{
    int width, height;

    public void resizeWidth(int width){
        this.width = width;
    }

    public void resizeHeight(int height){
        this.height = height;
    }

    void display(){
        System.out.println("Width  : " + width);
        System.out.println("Height : " + height);
    }
}

public class q5{
    public static void main(String args[])
    {
        Rectangle r1 = new Rectangle();
    r1.height = 10;
    r1.width = 30;

    r1.display();

    r1.resizeHeight(15);
    r1.resizeWidth(35);

    r1.display();
    }
}`,
    "output": `Width  : 30
Height : 10
Width  : 35
Height : 15`
  },
   "6": {
    "title": `Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.`,
    "code":  `package interfaces;

interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}

class Rectangle implements Drawable {
    public void draw() {
        System.out.println("Drawing a rectangle.");
    }
}

class Triangle implements Drawable {
    public void draw() {
        System.out.println("Drawing a triangle.");
    }
}

public class q6 {
    public static void main(String args[]) {
        Circle c = new Circle();
        Rectangle r = new Rectangle();
        Triangle t = new Triangle();

        c.draw();
        r.draw();
        t.draw();
    }
}`,
    "output": `Drawing a circle.
Drawing a rectangle.
Drawing a triangle.`
  },
   "7": {
    "title": `Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
    "code":  `package interfaces;

import java.util.Scanner;

interface Sortable {
    void sort();
}

class BubbleSort implements Sortable {
    int arr[];

    BubbleSort(int arr[]) {
        this.arr = arr;
    }

    public void sort() {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        System.out.println("Bubble Sort:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}

class SelectionSort implements Sortable {
    int arr[];

    SelectionSort(int arr[]) {
        this.arr = arr;
    }

    public void sort() {
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

        System.out.println("Selection Sort:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
}

public class q7 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int arr1[] = new int[5];
        int arr2[] = new int[5];

        System.out.println("Enter 5 integers:");

        for (int i = 0; i < 5; i++) {
            arr1[i] = input.nextInt();
            arr2[i] = arr1[i];
        }

        BubbleSort b = new BubbleSort(arr1);
        SelectionSort s = new SelectionSort(arr2);

        b.sort();
        s.sort();
    }
}`,
    "output": `Enter 5 integers:
34 54 12 34 5
Bubble Sort:
5 12 34 34 54 
Selection Sort:
5 12 34 34 54 `
  },
   "8": {
    "title": `Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.`,
    "code":  `package interfaces;

interface Playable {
    void play();
}

class Football implements Playable {
    public void play() {
        System.out.println("Playing Football.");
    }
}

class Volleyball implements Playable {
    public void play() {
        System.out.println("Playing Volleyball.");
    }
}

class Basketball implements Playable {
    public void play() {
        System.out.println("Playing Basketball.");
    }
}

public class q8 {
    public static void main(String args[]) {
        Football f = new Football();
        Volleyball v = new Volleyball();
        Basketball b = new Basketball();

        f.play();
        v.play();
        b.play();
    }
}`,
    "output": `Playing Football.
Playing Volleyball.
Playing Basketball.`
  },
   "9": {
    "title": `Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.`,
    "code":  ``,
    "output": ``
  },
   "10": {
    "title": `Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.`,
    "code":  ``,
    "output": ``
  },
   "11": {
    "title": `Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
    "code":  ``,
    "output": ``
  }
};

function loadQuestion(num) {
  const question = dql[num.toString()];
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

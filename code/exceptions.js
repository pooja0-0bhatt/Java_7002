let ODVC = 
{
  "1": {
    "title": `Write a Java program that throws an exception and catch it using a try-catch block.`,
    "code":  `package exceptions;
public class q1{
    public static void main(String args[]){
        int arr [] = {1,2};
        try{
             System.out.println("Value : "+ arr[5]);
        }catch(java.lang.ArrayIndexOutOfBoundsException e){
            System.out.println("Index out of bound.");
        }
    }
}`,
    "output": `Index out of bound.`
  },
  "2": {
    "title": `Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.`,
    "code":  `package exceptions;

/*This is an user built exception which returns string when we try to print 
the object using  System.out.println() as toString() method is overridden */
class OddNException extends Exception{
    int num;
    OddNException(int num){
        this.num = num;
    }

    public String toString(){
        if(num % 2 == 1){
            return "Odd number can't be accepted.";
        }
        return null;
    }
}

public class q2{
    /*This functions throws the ODDNException object when the num in parameter is odd */
    static void check(int num)  throws OddNException{
        if(num % 2 == 1){
            throw new OddNException(num);
        }
       System.out.println("Accepted.");
    }

    public static void main(String args[]){
        int num = 2;
        try{
            check(num);
        }catch (OddNException e){
            System.out.println(e);
        }
    }
}`,
   "output": `Accepted.`
  },
  "3": {
    "title": `Write a Java program to create a method that reads a file and throws an exception if the file is not found`,
    "code":  `package exceptions;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class q3 {
    static String readFile(File f) throws FileNotFoundException{
        Scanner input = new Scanner(f);
        String str="";

        while(input.hasNextLine()){
            str+= input.nextLine()+" ";

        }
        input.close();
        return str;
    }

    public static void main(String args[]){
       try{
         String data = readFile(new File("data.txt"));
         System.out.println(data);
       }catch(FileNotFoundException e){
        System.out.println("File not found...");
       }
    }
}`,
    "output": `hello everyone!  this is an example. `
  },
   "4": {
    "title": `Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive`,
    "code":  `package exceptions;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class PositiveNumberFound extends Throwable{
    
}

public class q4 {
    /*functions checks if file contains positive number if yes then it throws PositiveNumberFound exception
    which is an user defined exception.*/
    static void checkPositiveNum(File f) throws FileNotFoundException,PositiveNumberFound{
        int num =0;
        String line ;
        Scanner input = new Scanner(f);

        while(input.hasNextLine()){
            line = input.nextLine();
            num = Integer.parseInt(line);
            if(num>-1){
                throw new PositiveNumberFound();
            }
        }
    }

    public static void main(String args[]) throws FileNotFoundException{
        try{
            File f = new File("numbers.txt");
            checkPositiveNum(f);
        }catch(PositiveNumberFound e){
            System.out.println("File contains a positive number.");
        }
    }
}
`,
    "output": `File contains a positive number.`
  },
   "5": {
    "title": `Write a Java program that reads a file and throws an exception if the file is empty.`,
    "code":  `
package exceptions;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class EmptyFileFound extends Exception {
}

public class q5 {

    /* Function checks if the file is empty.
       If empty, it throws EmptyFileFound exception. */
    static void checkFile(File f) throws FileNotFoundException, EmptyFileFound {
        Scanner input = new Scanner(f);

        if (!input.hasNextLine()) {
            input.close();
            throw new EmptyFileFound();
        }

        input.close();
    }

    public static void main(String args[]) throws FileNotFoundException {
        try {
            File f = new File("data.txt");
            checkFile(f);
            System.out.println("File is not empty.");
        } catch (EmptyFileFound e) {
            System.out.println("File is empty.");
        }
    }
}
`,
    "output": `File is not empty.`
  },
   "6": {
    "title": `Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates`,
    "code":  `
package exceptions;

import java.util.Scanner;

class DuplicateFound extends Exception {
}

public class q6 {

    /* Function checks whether the list contains duplicate numbers.
       If duplicates are found, it throws DuplicateFound exception. */
    static void checkDuplicates(int a[], int size) throws DuplicateFound {
        for (int i = 0; i < size; i++) {
            for (int j = i + 1; j < size; j++) {
                if (a[i] == a[j]) {
                    throw new DuplicateFound();
                }
            }
        }
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the number of integers:");
        int size = input.nextInt();

        int a[] = new int[size];

        System.out.println("Enter the integers:");
        for (int i = 0; i < size; i++) {
            a[i] = input.nextInt();
        }

        try {
            checkDuplicates(a, size);
            System.out.println("No duplicate numbers found.");
        } catch (DuplicateFound e) {
            System.out.println("Duplicate numbers found.");
        }

        input.close();
    }
}
`,
    "output": `Enter the number of integers:
4
Enter the integers:
23
43
12
55
No duplicate numbers found.`
  },
   "7": {
    "title": `Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.`,
    "code":  `
package exceptions;

import java.util.Scanner;

class NoVowelFound extends Exception {
}

public class q7 {

    /* Function checks if the string contains any vowel.
       If no vowel is found, it throws NoVowelFound exception. */
    static void checkVowels(String str) throws NoVowelFound {
        for (int i = 0; i < str.length(); i++) {
            char ch = Character.toLowerCase(str.charAt(i));

            if (ch == 'a' || ch == 'e' || ch == 'i' ||
                ch == 'o' || ch == 'u') {
                return;
            }
        }

        throw new NoVowelFound();
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string:");
        String str = input.nextLine();

        try {
            checkVowels(str);
            System.out.println("String contains vowels.");
        } catch (NoVowelFound e) {
            System.out.println("String does not contain vowels.");
        }

        input.close();
    }
}
`,
    "output": `Enter a string:
Hello
String contains vowels.`
  },
   "8": {
    "title": `Write a Java program to connect the Java API to Database, if connection not successful then throw an exception`,
    "code":  ``,
    "output": ``
  },
   "9": {
    "title": `Write a Java program to manage the driver with path, username and password, if not successful then throw an exception`,
    "code":  ``,
    "output": ``
  },
   "10": {
    "title": `Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception`,
    "code":  ``,
    "output": ``
  },
   "11": {
    "title": `Write a Java program to show an example of throws Keyword.`,
    "code":  `
package exceptions;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class q11 {

    static void readFile() throws FileNotFoundException {
        File f = new File("data.txt");
        Scanner input = new Scanner(f);

        while (input.hasNextLine()) {
            System.out.println(input.nextLine());
        }

        input.close();
    }

    public static void main(String args[]) {
        try {
            readFile();
        } catch (FileNotFoundException e) {
            System.out.println("File not found.");
        }
    }
}
`,
    "output": `hello everyone! 
this is an example.`
  },
   "12": {
    "title": `Write a Java program to show an example of multiple catch`,
    "code":  `
package exceptions;

import java.util.Scanner;

public class q12 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.println("Enter a number:");
            int a = input.nextInt();

            System.out.println("Enter divisor:");
            int b = input.nextInt();

            System.out.println("Result: " + (a / b));
        }
        catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
        }
        catch (Exception e) {
            System.out.println("Invalid input.");
        }

        input.close();
    }
}
`,
    "output": `Enter a number:
43
Enter divisor:
3 
Result: 14`
  },
   "13": {
  "title": `Write a Java program to show an example of nested try block.`,
    "code":  `
package exceptions;

public class q13 {
    public static void main(String args[]) {
        try {
            int a = 10;
            int b = 0;

            try {
                System.out.println(a / b);
            }
            catch (ArithmeticException e) {
                System.out.println("Cannot divide by zero.");
            }

            int arr[] = {10, 20, 30};
            System.out.println(arr[5]);
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Invalid array index.");
        }
    }
}
`,
    "output": `Cannot divide by zero.
Invalid array index.`
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
let like =
{
  "1": {
    "title": `Enter the character from user using InputStreamReader`,
    "code": `package IO;
import java.io.InputStreamReader;
public class q1{
    public static void main(String[] args) throws java.io.IOException{
        InputStreamReader I1 = new InputStreamReader(System.in);
        char ch = (char)I1.read();

        System.out.println("Character typed : " + ch);
    }
}`,
    "output": `p
Character typed : p`
  },
  "2": {
    "title": `Enter the string from user using BufferedStreamReader`,
    "code": `package IO;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class q2{
    public static void main(String args[]) throws java.io.IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter a string : ");
        String str = bf.readLine();

        System.out.println("The entered string : "+ str);
    }
}`,
    "output": `Enter a string : 
Hello
The entered string : Hello`
  },
  "3": {
    "title": `Enter the integer from user using Scanner class`,
    "code": `package IO;

import java.util.Scanner;

public class q3{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter an integer : ");
        int num = input.nextInt();

        System.out.println("The entered interger  is : "+ num);

    }
}`,
    "output": `Enter an integer : 
5
The entered interger  is : 5`
  },
  "4": {
    "title": `Enter the float from user using Scanner class`,
    "code": `package IO;

import java.util.Scanner;

public class q4{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a number : ");
        float num = input.nextFloat();

        System.out.println("The entered number is : "+ num);

    }
}`, "output": `Enter a number : 
6
The entered number is : 6.0`
  },
  "5": {
    "title": `Enter the double from user using Scanner class`,
    "code": `package IO;

import java.util.Scanner;

public class q5{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a number : ");
        double num = input.nextDouble();

        System.out.println("The entered number  is : "+ num);

    }
}`,
    "output": `Enter a number : 
22
The entered number  is : 22.0`
  },
  "6": {
    "title": `Enter the boolean from user using Scanner class`,
    "code": `package IO;

import java.util.Scanner;

public class q6 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a boolean value: ");
        boolean b = input.nextBoolean();

        System.out.println("Boolean value: " + b);
    }
}`,
    "output": `Enter a boolean value: true
Boolean value: true`
  },
  "7": {
    "title": `Enter the short integer from user using Scanner class`,
    "code": `package IO;

import java.util.Scanner;

public class q7 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a short integer: ");
        short num = input.nextShort();

        System.out.println("Short integer: " + num);
    }
}`,
    "output": `Enter a short integer: 4
The entered short integer: 4`
  },
  "8": {
    "title": `Enter the long integer from user using Scanner class`,
    "code": `package inputOutput;

import java.util.Scanner;

public class q8 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a long integer: ");
        long num = input.nextLong();

        System.out.println("the entered long integer: " + num);
    }
}`,
    "output": `Enter a long integer: 747536364363646
the entered long integer: 747536364363646`
  },
  "9": {
    "title": `Get all characters from the file and display on the screen`,
    "code": `package IO;

import java.io.FileReader;
import java.io.IOException;

public class q9 {
    public static void main(String args[]) throws IOException {
        FileReader fr = new FileReader("data.txt");

        int ch;

        while ((ch = fr.read()) != -1) {
            System.out.print((char) ch);
        }

        fr.close();
    }
}`,
    "output": `hello everyone! 
this is an example.%   `
  },
  "10": {
    "title": `Get all characters from the file, count number of lines, words, characters and display on the screen`,
    "code": ``,
    "output": ``
  }

};

function loadQuestion(num) {
  const question = like[num.toString()];
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
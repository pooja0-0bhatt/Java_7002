let ODVC = 
{
  "1": {
    "title": `Write a Java method to find the smallest number among three numbers.`,
    "code":  `
package functions;

import java.util.Scanner;

public class q1 {

    // Returns the smallest number out of three
    static int smallest(int a, int b, int c) {
        if (a <= b && a <= c) {
            return a;
        } else if (b <= a && b <= c) {
            return b;
        } else {
            return c;
        }
    }

    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter three numbers:");
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();

        System.out.println("Smallest number: " + smallest(a, b, c));

        input.close();
    }
}
`,
    "output": `Enter three numbers:
23
43
12
Smallest number: 12`
  },
  "2": {
    "title": `Write a Java method to compute the average of three numbers.`,
    "code":  `
package functions;

import java.util.Scanner;

public class q2 {

    // Returns the average of three numbers.
    static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }

    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter three numbers:");
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();

        System.out.println("Average: " + average(a, b, c));

        input.close();
    }
}
`,
   "output": `Enter three numbers:
34
12
55
Average: 33.666666666666664`
  },
  "3": {
    "title": `Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.`,
    "code":  `package functions;
import java.util.Scanner;

public class q3 {

    // For displaying middle character.
    static void middle(String str) {
        int length = str.length();

        if (length % 2 == 0) {
            System.out.println("Middle characters: " + str.charAt(length / 2 - 1)  + str.charAt(length / 2));
        } else {
            System.out.println("Middle character: " + str.charAt(length / 2));
        }
    }

    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string:");
        String str = input.nextLine();

        middle(str);

        input.close();
    }
}

`,
    "output": `Enter a string:
The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.
Middle character: k`
  },
   "4": {
    "title": `Write a Java method to count all the words in a string.`,
    "code":  `package functions;
import java.util.Scanner;

public class q4 {
    //methods to count words in string
    static int count(String str){
        int counter =0;
        for(int i = 0 ; i <str.length();i++){
            if(i>0 && str.charAt(i) == ' ' && str.charAt(i-1) != ' '){
                counter++;
            }else if(i == str.length()-1 && str.charAt(i) != ' '){
                counter++;
            }
        }
        return counter;
    }

    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the string : ");
        String str = input.nextLine();

        int cnt = count(str);

        System.out.println("Number of words in the string : "+ cnt);
        input.close();
    }
}
`,
    "output": `Enter the string : 
Hello World
Number of words in the string : 2`
  },
   "5": {
    "title": `Write a Java method to compute the future investment value at a given interest rate for a specified number of years.`,
    "code":  `
package functions;

import java.util.Scanner;

public class q5 {

    // For calculateing the future value of an investment
    static double futureValue(double amount, double rate, int years) {
        return amount * Math.pow(1 + rate / 100, years);
    }

    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter initial investment amount:");
        double amount = input.nextDouble();

        System.out.println("Enter annual interest rate :");
        double rate = input.nextDouble();

        System.out.println("Enter number of years:");
        int years = input.nextInt();

        double value = futureValue(amount, rate, years);

        System.out.println("Future value: " + value);
        input.close();
    }
}
`,
    "output": `Enter initial investment amount:
10000
Enter annual interest rate :
9
Enter number of years:
5
Future value: 15386.239549000007`
  },
   "6": {
    "title": `Write a Java method to print characters between two characters (i.e. A to P).`,
    "code":  `package functions;
import java.util.Scanner;

public class q6 {
    //Finds characters between two characters
    static String getChars(String str,char ch1, char ch2){
        int st = str.indexOf(ch1);
        int en = str.indexOf(ch2);
        String res="";
        for(int i = st ; i<=en ; i++){
            res += str.charAt(i);
        }
        return res;

    }

    public static void main(String args[]) throws java.io.IOException{
        Scanner input = new Scanner(System.in);
        String str,res;
        char ch1,ch2;

        System.out.println("Enter the string :");
        str= input.nextLine();

        System.out.println("Enter the first character : ");
        ch1 = input.next().charAt(0);
        System.out.println("Enter the second character : ");
        ch2 = input.next().charAt(0);

        res = getChars(str, ch1, ch2);

        System.out.println("Characters between these two characters are : ");
        for(int i = 0 ; i<res.length();i++){
            System.out.print(res.charAt(i)+"  ");
        }

        input.close();
    }
}
`,
    "output": `Enter the string :
Hello World
Enter the first character : 
l
Enter the second character : 
o
Characters between these two characters are : 
l  l  o  %   `
  },
   "7": {
    "title": `Write a Java method to check whether a string is a valid password.`,
    "code":  `
package functions;

import java.util.Scanner;

public class q7 {
//Method for checking if password is valid
    static boolean isValidPassword(String password) {
        boolean upper = false;
        boolean lower = false;
        boolean digit = false;
        boolean special = false;
        //Password should have atleast 8 or more characters
        if (password.length() >= 8) {
            for (int i = 0; i < password.length(); i++) {
                char ch = password.charAt(i);

                if (ch >= 'A' && ch <= 'Z')
                    upper = true;
                else if (ch >= 'a' && ch <= 'z')
                    lower = true;
                else if (ch >= '0' && ch <= '9')
                    digit = true;
                else
                    special = true;
            }
            //Password is valid if it has upper ase character, lowercase character, digit and special characters.
            if(upper && lower && digit && special){
                return true;
            }
        }
        return false;
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a password : ");
        String password = input.nextLine();

        if (isValidPassword(password))
            System.out.println("Valid password");
        else
            System.out.println("Invalid password");

        input.close();
    }
}
`,
    "output": `Enter a password : 
@pasS#123    
Valid password`
  },
   "8": {
    "title": `Write a Java method to display the current date and time.`,
    "code":  `
package functions;

import java.time.LocalDateTime;

public class q8 {

    static void displayDateTime() {
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Current date and time: " + now);
    }

    public static void main(String args[]) {
        displayDateTime();
    }
}
`,
    "output": `Current date and time: Mon Nov 02 18:45:47 IST 2026`
  },
   "9": {
    "title": `Write a Java method to find all twin prime numbers less than 100.`,
    "code":  ``,
    "output": ``
  },
   "10": {
    "title": `Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.`,
    "code":  `package functions;

import java.util.Scanner;

public class q10 {

    static int countTwos(int num) {
        int count = 0;

        while (num > 0) {
            int digit = num % 10;

            if (digit == 2)
                count++;

            num = num / 10;
        }

        return count;
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a non-negative integer:");
        int num = input.nextInt();

        System.out.println("Number of 2s: " + countTwos(num));

        input.close();
    }
}
`,
    "output": `Enter a non-negative integer:
34
Number of 2s: 0`
  },
   "11": {
    "title": `Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.`,
    "code":  `
package functions;

import java.util.Scanner;

public class q11 {

    static boolean isConsecutive(int a, int b, int c) {
        if (a + 1 == b && b + 1 == c)
            return true;
        else if (a + 1 == c && c + 1 == b)
            return true;
        else if (b + 1 == a && a + 1 == c)
            return true;
        else if (b + 1 == c && c + 1 == a)
            return true;
        else if (c + 1 == a && a + 1 == b)
            return true;
        else if (c + 1 == b && b + 1 == a)
            return true;
        else
            return false;
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter three integers:");
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();

        System.out.println(isConsecutive(a, b, c));

        input.close();
    }
}
`,
    "output": `Enter three integers:
34
32
55
false`
  },
   "12": {
    "title": `Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false`,
    "code":  `
package functions;

import java.util.Scanner;

public class q12 {

    static boolean isMiddle(int a, int b, int c) {
        //Middle point = (start point + end point)/2
        return (a + b == 2 * c) ||
               (a + c == 2 * b) ||
               (b + c == 2 * a);
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter three integers:");
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();

        System.out.println(isMiddle(a, b, c));

        input.close();
    }
}
`,
    "output": `Enter three integers:
32
98
12
false`
  },
   "13": {
  "title": `Write a Java method that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false.`,
    "code":  `
package functions;

import java.util.Scanner;

public class q13 {

    static boolean allVowels(String str) {
        for (int i = 0; i < str.length(); i++) {
            char ch = Character.toLowerCase(str.charAt(i));

            if (ch != 'a' && ch != 'e' && ch != 'i'
                    && ch != 'o' && ch != 'u') {
                return false;
            }
        }

        return true;
    }

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string:");
        String str = input.nextLine();

        System.out.println(allVowels(str));

        input.close();
    }
}
`,
    "output": `Enter a string:
Hello World
false`
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
let ddl = 
{
  "1": {
    "title": `Program to Check if a String contains only digits?`,
    "code":  `package strings;
import java.util.Scanner;
public class q1 {
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        Boolean isDigit = true;

        //taking input
        System.out.println("Enter a string : ");
        String str = input.nextLine();

        //loop for checking each character in string
        for(int i= 0; i<str.length();i++){
            if(!((int)str.charAt(i) >= 48 && (int)str.charAt(i)<=57)){
                isDigit = false;
                break;
            }
        }
        if(isDigit){
            System.out.println("The string contains only digits.");
        }else{
            System.out.println("The string doesn't only contains digits.");
        }
        input.close();
    }
}
`,
    "output": `Enter a string : 
5437
The string contains only digits.`
  },
  "2": {
    "title": `Program to perform Deep Copy for String?`,
    "code": `
package strings;

public class q2 {
    public static void main(String args[]) {

        String str1 = new String("Hello");
        String str2 = new String(str1);

        System.out.println("Original String: " + str1);
        System.out.println("Copied String: " + str2);

        System.out.println("Are both references same? " + (str1 == str2));
    }
}
`,
    "output": `Original String: Hello
Copied String: Hello
Are both references same? true`
  },
  "3": {
    "title": `Program to prove String is immutable programmatically?`,
    "code": `package strings;

public class q3 {
    public static void main(String args[]) {

        String str = "Hello";
        System.out.println("Original String: " + str);

        str.concat(" World");

        System.out.println("After concatenation: " + str);

        str = str.concat(" World");

        System.out.println("After reassignment: " + str);
    }
}
`,
    "output": `Original String: Hello
After concat(): Hello
After reassignment: Hello World`
  },
   "4": {
    "title": `Program to remove all occurrences of a given character from input String?`,
    "code": `package strings;
import java.util.Scanner;
public class q4 {
    public static void main(String args[]) throws java.io.IOException{
        String str = new String();


        System.out.println("Enter a string : ");
        Scanner input = new Scanner(System.in);
        str= input.nextLine();

        System.out.println("Enter the character to be removed : ");        
        char ch = (char)System.in.read();
        str = str.replace(Character.toString(ch),"");

        System.out.println("New string : "+str);
        input.close();

    }
}
`,
    "output": `Enter a string : 
hello
Enter the character to be removed : 
l
New string : heo`
  },
   "5": {
    "title": `Program to append the string using StringBuffer class`,
    "code": `package strings;

public class q5 {
    public static void main(String args[]){
        StringBuffer strb = new StringBuffer("Hello");
        strb.append(" World...");

        System.out.println(strb);
    }
}
`,
    "output": `Hello World...`
  },
   "6": {
    "title": `Program to insert the string using StringBuffer class`,
    "code": `package strings;

public class q6 {

    public static void main(String args[]) {
        StringBuffer strb = new StringBuffer("Hello");
        strb.insert(2,"llll");

        System.out.println(strb);
    }
}
`,
    "output": `Hellllllo`
  },
   "7": {
    "title": `Program to Add Characters to a String`,
    "code": `package strings;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class q7 {
    public static void main(String args[]) throws IOException{
        String str = new String();
        char ch;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the string : ");

        str = br.readLine();


        System.out.println("Enter the character to ve added : ");
        ch = (char)br.read();
        str = str + ch;

        System.out.println("String after edit : "+str);
        
}
}
`,
    "output": `Enter the string : 
hello
Enter the character to ve added : 
o
String after edit : helloo`
  },
   "8": {
    "title": `Program to Add Characters to a String`,
    "code": `package strings;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class q8 {
    public static void main(String args[]) throws IOException{
        String str = new String();
        char ch;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the string : ");

        str = br.readLine();


        System.out.println("Enter the character to ve added : ");
        ch = (char)br.read();
        str = str + ch;

        System.out.println("String after edit : "+str);
        
}
}
`,
    "output": `Enter the string : 
Hammer
Enter the character to ve added : 
r
String after edit : Hammerr`
  },
   "9": {
    "title": `Program to Check Anagram`,
    "code": `package strings;
import java.util.Scanner;

public class q9 {
    public static void main(String args[]){
        String str, str1;
        boolean found=false;
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the first string : ");
        str = input.nextLine();

        System.out.println("Enter the second string : ");
        str1 = input.nextLine();

        //if Both doesn't have the same length they are not anagram
        if(str1.length() != str.length()){
            System.out.println("The strings are not Anagram.");
            System.exit(0);
        }

        //loop that checks if each character of string 1 is present in string 2.
        for(int i = 0; i< str1.length(); i++){
            found = false;
            for(int j =0; j<str1.length();j++){
                if(str.charAt(i) == str1.charAt(j)){
                    found = true;
                }
            }
            if(!found){
                System.out.println("Strings are not anagram");
                System.exit(0);
            }
        }

        System.out.println("Strings are Anagram.");

        input.close();
    }
}
`,
    "output": `Enter the first string : 
heart
Enter the second string : 
earth
Strings are Anagram.`
  },
   "10": {
    "title": `Program to check whether a string is a Palindrome`,
    "code": `package strings;
import java.util.Scanner;

public class q10 {
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the string to be checked : ");
        String str = input.nextLine();

        String revstr = Reverse.reverse(str);
        System.out.println(revstr);

        //checks if both strings are still same ignoring case
        if (str.equalsIgnoreCase(revstr)){
            System.out.println("The string is Palindrome.");
        }else{
            System.out.println("The string is not Palindrome.");
        }

        input.close();
    }
}


class Reverse{
    //reverses the string
    public static String reverse(String str){
        String revstr="";

        for(int i = str.length()-1;i>=0;i--){
            revstr = revstr + str.charAt(i);
        }
        return revstr;
    }
}`,
    "output": `Enter the string to be checked : 
hello
olleh
The string is not Palindrome.`
  },
   "11": {
    "title": `Program to Convert Enum to String`,
    "code": `package strings;

public class q11 {

    enum Day {
        MONDAY, TUESDAY, WEDNESDAY
    }

    public static void main(String args[]) {

        Day day = Day.MONDAY;

        String str = day.toString();

        System.out.println("Enum value: " + day);
        System.out.println("String value: " + str);
    }
}
`,
    "output": `Enum value: MONDAY
String value: MONDAY`
  },
   "12": {
    "title": `Program to Convert String to String Array`,
    "code": `package strings;

import java.util.Scanner;
public class q12 {

    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        String str = input.nextLine();

        //dividing string based on space
        String arr[] = str.split(" ");

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        input.close();
    }
}
`,
    "output": `hello
hello
1`
  },
   "13": {
  "title": `Program to count number of words in a String?`,
    "code": `package strings;
import java.util.Scanner;

public class q13 {
    public static void main(String args[]){
        int counter =0;
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the string : ");
        String str = input.nextLine();

        for(int i = 0 ; i <str.length();i++){
            if(i>0 && str.charAt(i) == ' ' && str.charAt(i-1) != ' '){
                counter++;
            }else if(i == str.length()-1 && str.charAt(i) != ' '){
                counter++;
            }
        }

        System.out.println("Number of words  : "+ counter);

        input.close();
    }
}
`,
    "output": `Enter the string : 
Hello everyone this is a program.
Number of words  : 6`
  },
   "14": {
    "title": `Program to count the total number of characters in a string`,
    "code": `package strings;
import java.util.Scanner;
public class q14 {

    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        String str = input.nextLine();

        System.out.println("Total number of characters: " + str.length());

        input.close();
    }
}

`,
    "output": `black clover
Total number of characters: 12`
  },
   "15": {
    "title": `Program to count the total number of punctuation characters exists in a String`,
    "code": `
package strings;

import java.util.Scanner;

public class q15 {
    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter the string : ");
        String str = input.nextLine();
        int count = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (!Character.isLetterOrDigit(ch) && !Character.isWhitespace(ch)) {
                count++;
            }
        }

        System.out.println("Total punctuation characters: " + count);

        input.close();
    }
}
`,
    "output": `hedb.dn,
Total punctuation characters: 2`
  },
   "16": {
    "title": `Program to count the total number of vowels and consonants in a string`,
    "code": `
package strings;

import java.util.Scanner;

public class q16 {
    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string : ");
        String str = input.nextLine();
        str = str.toLowerCase();

        int vowels = 0, consonants = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (ch >= 'a' && ch <= 'z') {
                if (ch == 'a' || ch == 'e' || ch == 'i'
                        || ch == 'o' || ch == 'u') {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        System.out.println("Total vowels: " + vowels);
        System.out.println("Total consonants: " + consonants);

        input.close();
    }
}
`,
    "output": `Enter a string : 
hello
Total vowels: 2
Total consonants: 3`
  },
   "17": {
    "title": `Program to determine whether a given string is palindrome`,
    "code": `package strings;
import java.util.Scanner;

public class q17 {
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the string to be checked : ");
        String str = input.nextLine();

        String revstr = Reverse.reverse(str);
        System.out.println(revstr);

        //checks if both strings are still same ignoring case
        if (str.equalsIgnoreCase(revstr)){
            System.out.println("The string is Palindrome.");
        }else{
            System.out.println("The string is not Palindrome.");
        }

        input.close();
    }
}


class Reverse{
    //reverses the string
    public static String reverse(String str){
        String revstr="";

        for(int i = str.length()-1;i>=0;i--){
            revstr = revstr + str.charAt(i);
        }
        return revstr;
    }
}`,
    "output": `Enter the string to be checked : 
Madam
madaM
The string is Palindrome.`
  },
   "18": {
    "title": `Program to determine whether one string is a rotation of another`,
    "code": `package strings;
import java.util.Scanner;

public class q18{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        int flag = 1,mng;

        System.out.println("Enter the string : ");
        String str = input.nextLine();
        System.out.println("Enter the string : ");
        String str1 = input.nextLine();

        if(str.length() != str1.length()){
            System.out.println("Please enter string of same size.");
            System.exit(0);
        }
        //seeing if string two is right rotation of string one
        for(int i = 0; i < str.length(); i++){
    mng = (i + 1) % str.length();

    if(str.charAt(i) != str1.charAt(mng)){
        flag = 0;
        break;
    }
}
        if(flag == 1){
            System.out.println("The string 1 one is the right rotation of string 2.");
        }else{
            System.out.println("The string 1 one is not the right rotation of string 2.");
        }

    }
}`,
    "output": `Enter the string : 
hello
Enter the string : 
ohell
The string 1 one is the right rotation of string 2.`
  },
   "19": {
    "title": `Program to divide a string in 'N' equal parts.`,
    "code": `package strings;

import java.util.Scanner;

public class q19 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = input.nextLine();

        System.out.print("Enter number of parts: ");
        int n = input.nextInt();

        if (str.length() % n != 0) {
            System.out.println("String cannot be divided into equal parts.");
        } else {
            int size = str.length() / n;

            System.out.println("Equal parts:");

            for (int i = 0; i < str.length(); i += size) {
                System.out.println(str.substring(i, i + size));
            }
        }
    }
}`,
    "output": `Enter a string: everyone
Enter number of parts: 2
Equal parts:
ever
yone`
  },
   "20": {
    "title": `Program to find all subsets of a string`,
    "code": ``,
    "output": ``
  },
   "21": {
    "title": `Program to find all the permutations of a string`,
    "code": ``,
    "output": ``
  },
   "22": {
    "title": `Program to find maximum and minimum occurring character in a string`,
    "code": `package strings;

import java.util.Scanner;

public class q22 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = input.nextLine();

        int max = 0, min = str.length();
        char maxChar = ' ', minChar = ' ';

        for (int i = 0; i < str.length(); i++) {
            int count = 0;

            // Skip characters that have already appeared
            if (str.indexOf(str.charAt(i)) != i) {
                continue;
            }

            for (int j = 0; j < str.length(); j++) {
                if (str.charAt(i) == str.charAt(j)) {
                    count++;
                }
            }

            if (count > max) {
                max = count;
                maxChar = str.charAt(i);
            }

            if (count < min) {
                min = count;
                minChar = str.charAt(i);
            }
        }

        System.out.println("Maximum occurring character: " + maxChar);
        System.out.println("Maximum frequency: " + max);

        System.out.println("Minimum occurring character: " + minChar);
        System.out.println("Minimum frequency: " + min);
    }
}`,
    "output": `Enter a string: hello everyone 
Maximum occurring character: e
Maximum frequency: 4
Minimum occurring character: h
Minimum frequency: 1`
  },
   "23": {
    "title": `Program to find Reverse of the string`,
    "code": `
package strings;

import java.util.Scanner;

public class q23 {
    public static void main(String args[]) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a string : ");
        String str = input.nextLine();
        String rev = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            rev = rev + str.charAt(i);
        }

        System.out.println("Reversed string: " + rev);

        input.close();
    }
}
`,
    "output": `Enter a string : 
hello
Reversed string: olleh`
  },
   "24": {
    "title": `Program to find the duplicate characters in a string`,
    "code": ``,
    "output": ``
  },
   "25": {
    "title": `Program to find the duplicate words in a string`,
    "code": ``,
    "output": ``
  },
   "26": {
    "title": `Program to find the frequency of characters`,
    "code": ``,
    "output": ``
  },
   "27": {
    "title": `Program to find the largest and smallest word in a string`,
    "code": ``,
    "output": ``
  },
   "28": {
    "title": `Program to find the longest repeating sequence in a string`,
    "code": ``,
    "output": ``
  },
   "29": {
    "title": `Program to find the most repeated word in a text file`,
    "code": ``,
    "output": ``
  },
   "30": {
    "title": `Program to find the number of the words in the given text file`,
    "code": ``,
    "output": ``
  },
   "31": {
    "title": `Program to Get a Character From the Given String`,
    "code": ``,
    "output": ``
  },
   "32": {
    "title": `Program to Insert a string into another string`,
    "code": ``,
    "output": ``
  },
   "33": {
    "title": `Program to Iterate Over Characters in String`,
    "code": ``,
    "output": ``
  },
   "34": {
    "title": `Program to Print a New Line in String`,
    "code": ``,
    "output": ``
  },
   "35": {
    "title": `Program to Print even length words`,
    "code": ``,
    "output": ``
  },
   "36": {
    "title": `Program to print smallest and biggest possible palindrome word in a given string`,
    "code": ``,
    "output": ``
  },
   "37": {
    "title": `Program to remove all the white spaces from a string`,
    "code": ``,
    "output": ``
  },
   "38": {
    "title": `Program to replace lower-case characters with upper-case and vice-versa`,
    "code": ``,
    "output": ``
  },
   "39": {
    "title": `Program to replace the spaces of a string with a specific character`,
    "code": ``,
    "output": ``
  },
   "40": {
    "title": `Program to separate the Individual Characters from a String`,
    "code": ``,
    "output": ``
  },
   "41": {
    "title": `Program to Splitting into a number of sub-strings`,
    "code": ``,
    "output": ``
  },
   "42": {
    "title": `Program to swap two string variables without using third or temp variable.`,
    "code": `package strings;

import java.util.Scanner;

public class q42 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first string: ");
        String str1 = input.nextLine();

        System.out.print("Enter second string: ");
        String str2 = input.nextLine();

        str1 = str1 + str2;
        str2 = str1.substring(0, str1.length() - str2.length());
        str1 = str1.substring(str2.length());

        System.out.println("After swapping:");
        System.out.println("First String: " + str1);
        System.out.println("Second String: " + str2);
    }
}`,
    "output": `Enter first string: hello
Enter second string: world
After swapping:
First String: world
Second String: hello`
  },
   "43": {
    "title": `Program to Swapping Pair of Characters`,
    "code": ``,
    "output": ``
  },
   "44": {
    "title": `Read two String user input and check if first contains second?`,
    "code": `package strings;

import java.util.Scanner;

public class q44 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first string: ");
        String str1 = input.nextLine();

        System.out.print("Enter second string: ");
        String str2 = input.nextLine();


        if (str1.toLowerCase().contains(str2.toLowerCase())) {
            System.out.println("First string contains the second string.");
        } else {
            System.out.println("First string does not contain the second string.");
        }
    }
}`,
    "output": `Enter first string: hello world
Enter second string: hello
First string contains the second string.`
  },
   "45": {
    "title": `Reserve String without reverse() function`,
    "code": `package strings;

import java.util.Scanner;

public class q45 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = input.nextLine();

        String rev = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            rev = rev + str.charAt(i);
        }

        System.out.println("Reversed String: " + rev);
    }
}`,
    "output": `Enter a string: hello
Reversed String: olleh`
  },
   "46": {
    "title": `Reverse String Word by Word`,
    "code": ``,
    "output": ``
  },
   "47": {
    "title": `Write a program to check if two Strings are created with same characters?`,
    "code": ``,
    "output": ``
  },
   "48": {
    "title": `Write a program to find out first non repeated character from input String?`,
    "code": `package strings;

import java.util.Scanner;

public class q48 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = input.nextLine();

        char result = ' ';

        for (int i = 0; i < str.length(); i++) {
            int count = 0;

            for (int j = 0; j < str.length(); j++) {
                if (str.charAt(i) == str.charAt(j)) {
                    count++;
                }
            }

            if (count == 1) {
                result = str.charAt(i);
                break;
            }
        }

        if (result != ' ') {
            System.out.println("First non-repeated character: " + result);
        } else {
            System.out.println("No non-repeated character found.");
        }
    }
}`,
    "output": `Enter a string: hello everyone
First non-repeated character: h`
  },
   "49": {
    "title": `Create an object StringBuffer class to reverse the string.`,
    "code": `package strings;

import java.util.Scanner;

public class q49 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = input.nextLine();

        StringBuffer sb = new StringBuffer(str);

        sb.reverse();

        System.out.println("Reversed String: " + sb);
    }
}`,
    "output": ``
  },
   "50": {
    "title": `Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.`,
    "code": `package strings;

public class q50 {
    public static void main(String args[]) {
        StringBuffer str = new StringBuffer("Hello World");

        System.out.println("Original String: " + str);

        str.insert(5, " Java");
        System.out.println("After insert : " + str);

        str.append(" Programming");
        System.out.println("After append : " + str);

        str.delete(5, 10);
        System.out.println("After delete : " + str);

        str.replace(6, 17, "Language");
        System.out.println("After replace : " + str);
    }
}`,
    "output": `Original String: Hello World
After insert : Hello Java World
After append : Hello Java World Programming
After delete : Hello World Programming
After replace : Hello Languageamming`
  }
};

function loadQuestion(num) {
  const question = ddl[num.toString()];
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
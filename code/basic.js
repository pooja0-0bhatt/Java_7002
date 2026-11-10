let ODVC =
{
    "1": {
        "title": `Write a Java program to print ‘Hello World!’ on screen`,
        "code": `
package basic;

public class q1 {
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
`,
        "output": `Hello World!`
    },
    "2": {
        "title": `Write a Java program to print the sum of two numbers`,
        "code": `package basic;

public class q2 {
    public static void main(String args[]){
        int a = 20, b= 12;
        int c = a+b;
        System.out.println("Sum of the two numbers are :"+ c);
    } 
}`,
        "output": `Sum of the two numbers are :32`
    },
    "3": {
        "title": `Write a Java program that takes two numbers and display the product of two numbers`,
        "code": `
package basic;

import java.util.Scanner;

public class q3 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter two numbers: ");
        int a = input.nextInt();
        int b = input.nextInt();

        int product = a * b;

        System.out.println("Product: " + product);

    }
}
`,
        "output": `Enter two numbers: 6   
2
Product: 12`
    },
    "4": {
        "title": `Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers`,
        "code": `
package basic;

import java.util.Scanner;

public class q4 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter two numbers: ");
        int a = input.nextInt();
        int b = input.nextInt();

        System.out.println("Sum: " + (a + b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));

        input.close();
    }
}
`,
        "output": `Enter two numbers: 12
6
Sum: 18
Multiplication: 72
Subtraction: 6
Division: 2
Remainder: 0`
    },
    "5": {
        "title": `Write a Java program that takes five numbers as input to calculate and print the average of the numbers`,
        "code": `
package basic;

import java.util.Scanner;

public class q5 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a, b, c, d, e;

        System.out.print("Enter five numbers: ");
        a = input.nextInt();
        b = input.nextInt();
        c = input.nextInt();
        d = input.nextInt();
        e = input.nextInt();

        double average = (a + b + c + d + e) / 5.0;

        System.out.println("Average: " + average);

        input.close();
    }
}
`,
        "output": `Enter five numbers: 55
23
43
98
12
Average: 46.2`
    },
    "6": {
        "title": `Write a Java program to swap two variables`,
        "code": `
package basic;

import java.util.Scanner;

public class q6 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter two numbers: ");
        int a = input.nextInt();
        int b = input.nextInt();

        System.out.println("Before swapping:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);

        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swapping:");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}
`,
        "output": `Enter two numbers: 34
55
Before swapping:
a = 34
b = 55
After swapping:
a = 55
b = 34`
    },
    "7": {
        "title": `Write a Java program to convert a decimal number to binary numbers`,
        "code": `
package basic;

import java.util.Scanner;

public class q7 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a decimal number: ");
        int num = input.nextInt();

        int binary = 0, place = 1;

        while (num > 0) {
            int remainder = num % 2;
            binary = binary + remainder * place;
            num = num / 2;
            place = place * 10;
        }

        System.out.println("Binary: " + binary);
    }
}
`,
        "output": `Enter a decimal number: 10
Binary: 1010`
    },
    "8": {
        "title": `Write a Java program to convert a binary number to decimal number`,
        "code": `
package basic;

import java.util.Scanner;

public class q8 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a binary number: ");
        int binary = input.nextInt();

        int decimal = 0, power = 1;

        while (binary > 0) {
            int digit = binary % 10;
            decimal = decimal + digit * power;
            power = power * 2;
            binary = binary / 10;
        }

        System.out.println("Decimal: " + decimal);
    }
}
`,
        "output": `Enter a binary number: 1010
Decimal: 10`
    },
    "9": {
        "title": `Write a Java program to check whether Java is installed on your computer or not`,
        "code": `(base) poojabhatt@MacBook-Air / % java --version`,
        "output": `java 21.0.10 2026-01-20 LTS
Java(TM) SE Runtime Environment (build 21.0.10+8-LTS-217)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.10+8-LTS-217, mixed mode, sharing)`
    },
    "10": {
        "title": `Write a Java program and compute the sum of the digits of an integer`,
        "code": `
package basic;

import java.util.Scanner;

public class q10 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int num = input.nextInt();

        int sum = 0;

        while (num != 0) {
            int digit = num % 10;
            sum = sum + Math.abs(digit);
            num = num / 10;
        }

        System.out.println("Sum of digits: " + sum);
    }
}
`,
        "output": `Enter an integer: 256
Sum of digits: 13`
    },
    "11": {
        "title": `Write a Java program to compare two numbers`,
        "code": `
package basic;

import java.util.Scanner;

public class q11 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter two numbers: ");
        int a = input.nextInt();
        int b = input.nextInt();

        if (a > b) {
            System.out.println(a + " is greater than " + b);
        } else if (a < b) {
            System.out.println(a + " is smaller than " + b);
        } else {
            System.out.println("Both numbers are equal.");
        }
    }
}
`,
        "output": `Enter two numbers: 33
43
33 is smaller than 43`
    },
    "12": {
        "title": `Write a Java program to count the letters, spaces, numbers and other characters of an input string`,
        "code": `
package basic;

import java.util.Scanner;

public class q12 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = input.nextLine();

        int letters = 0, spaces = 0, numbers = 0, others = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            if (Character.isLetter(ch)) {
                letters++;
            } else if (ch == ' ') {
                spaces++;
            } else if (Character.isDigit(ch)) {
                numbers++;
            } else {
                others++;
            }
        }

        System.out.println("Letters: " + letters);
        System.out.println("Spaces: " + spaces);
        System.out.println("Numbers: " + numbers);
        System.out.println("Other characters: " + others);
    }
}
`,
        "output": `Enter a string: Hello world!
Letters: 10
Spaces: 1
Numbers: 0
Other characters: 1`
    },
    "13": {
        "title": `Write a Java program to print the ascii value of a given character`,
        "code": `
package basic;

import java.util.Scanner;

public class q13 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a character: ");
        char ch = input.next().charAt(0);

        int ascii = (int)ch;

        System.out.println("ASCII value: " + ascii);
    }
}
`,
        "output": `Enter a character: y
ASCII value: 121`
    },
    "14": {
        "title": `Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn`,
        "code": `
package basic;

import java.util.Scanner;

public class q14 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int n = input.nextInt();

        int nn = n * 10 + n;
        int nnn = n * 100 + n * 10 + n;

        int sum = n + nn + nnn;

        System.out.println("Result: " + sum);
    }
}
`,
        "output": `Enter a number: 55
Result: 6765`
    },
    "15": {
        "title": `Write a Java program to display the system time`,
        "code": `package basic;

public class q15{
    public static void main(String args[]){
        java.util.Date d = new java.util.Date();

        System.out.print(d);
    }
}`,
        "output": `Mon Nov 09 23:30:08 IST 2026`
    },
    "16": {
        "title": `Write a Java program to print the odd numbers from 1 to 20`,
        "code": `
package basic;

public class q16 {
    public static void main(String args[]) {
        for (int i = 1; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
    }
}
`,
        "output": `1 3 5 7 9 11 13 15 17 19 `
    },
    "17": {
        "title": `Write a Java program to print the even numbers from 1 to 20`,
        "code": `
package basic;

public class q17 {
    public static void main(String args[]) {
        for (int i = 2; i <= 20; i ++) {
            if(i%2 == 0){
                System.out.print(i + " ");
            }
        }
    }
}
`,
        "output": `2 4 6 8 10 12 14 16 18 20`
    },
    "18": {
        "title": `Write a Java program to convert a string to an integer`,
        "code": `
package basic;

public class q18 {
    public static void main(String args[]) {
        String str = "12345";

        int num = Integer.parseInt(str);

        System.out.println("String: " + str);
        System.out.println("Integer: " + num);
    }
}
`,
        "output": `String: 12345
Integer: 12345`
    },
    "19": {
        "title": `Write a Java program to convert seconds to hour, minute and seconds`,
        "code": `
package basic;

import java.util.Scanner;

public class q19 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter time in seconds: ");
        int totalSeconds = input.nextInt();

        int hours = totalSeconds / 3600;
        int minutes = (totalSeconds % 3600) / 60;
        int seconds = totalSeconds % 60;

        System.out.println("Hours: " + hours);
        System.out.println("Minutes: " + minutes);
        System.out.println("Seconds: " + seconds);
    }
}
`,
        "output": `Enter time in seconds: 120
Hours: 0
Minutes: 2
Seconds: 0`
    },
    "20": {
        "title": `Write a Java program to compute the sum of the first 100 prime numbers`,
        "code": `
package basic;

public class q20 {
    public static void main(String args[]) {
        int count = 0, num = 2, sum = 0;

        while (count < 100) {
            int flag = 1;

            for (int i = 2; i <= num / 2; i++) {
                if (num % i == 0) {
                    flag = 0;
                    break;
                }
            }

            if (flag == 1) {
                sum = sum + num;
                count++;
            }

            num++;
        }

        System.out.println("Sum of first 100 prime numbers: " + sum);
    }
}
`,
        "output": `Sum of first 100 prime numbers: 24133`
    },
    "21": {
        "title": `Write a Java program to swap the first and last elements of an array and create a new array`,
        "code": `
package basic;

public class q21 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};
        int b[] = new int[a.length];

        for (int i = 0; i < a.length; i++) {
            b[i] = a[i];
        }

        int temp = b[0];
        b[0] = b[b.length - 1];
        b[b.length - 1] = temp;

        System.out.println("Original array:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }

        System.out.println("\\nNew array:");

        for (int i = 0; i < b.length; i++) {
            System.out.print(b[i] + " ");
        }
    }
}
`,
        "output": `Original array:
10 20 30 40 50 
New array:
50 20 30 40 10 `
    },
    "22": {
        "title": `Write a Java program to count the number of even and odd elements in a given array`,
        "code": `package basic;

import java.util.Scanner;

public class q22 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int arr[] = new int[5];
        int even = 0, odd = 0;

        System.out.println("Enter 5 elements:");

        for (int i = 0; i < 5; i++) {
            arr[i] = input.nextInt();

            if (arr[i] % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }

        System.out.println("Even elements: " + even);
        System.out.println("Odd elements: " + odd);
    }
}`,
        "output": `Enter 5 elements:
34
54
23
11
8
Even elements: 3
Odd elements: 2`
    },
    "23": {
        "title": `Write a Java program to compute the square root of an given integer`,
        "code": `package basic;

import java.util.Scanner;

public class q23 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int num = input.nextInt();

        if (num >= 0) {
            double result = Math.sqrt(num);
            System.out.println("Square root: " + result);
        } else {
            System.out.println("Square root of a negative number is not a real number.");
        }
    }
}`,
        "output": `Enter an integer: 12
Square root: 3.4641016151377544`
    },
    "24": {
        "title": `Write a Java program to check if a positive number is a palindrome or not`,
        "code": `
package basic;

import java.util.Scanner;

public class q24 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a positive number: ");
        int num = input.nextInt();

        int original = num;
        int reverse = 0;

        while (num > 0) {
            int digit = num % 10;
            reverse = reverse * 10 + digit;
            num = num / 10;
        }

        if (original == reverse) {
            System.out.println("Palindrome number.");
        } else {
            System.out.println("Not a palindrome number.");
        }
    }
}
`,
        "output": `Enter a positive number: 34
Not a palindrome number.`
    },
    "25": {
        "title": `Write a Java program to add two numbers without using any arithmetic operators`,
        "code": ``,
        "output": ``
    },
    "26": {
        "title": `Write a Java program to add all the digits of a given positive integer`,
        "code": `
package basic;

import java.util.Scanner;

public class q26 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");
        int num = input.nextInt();

        int sum = 0;

        while (num > 0) {
            int digit = num % 10;
            sum = sum + digit;
            num = num / 10;
        }

        System.out.println("Sum of digits: " + sum);
    }
}
`,
        "output": `Enter a positive integer: 23
Sum of digits: 5`
    },
    "27": {
        "title": `Java program to find area of circle`,
        "code": `
package basic;

import java.util.Scanner;

public class q27 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter radius: ");
        double radius = input.nextDouble();

        double area = Math.PI * radius * radius;

        System.out.println("Area of circle: " + area);
    }
}
`,
        "output": `Enter radius: 5
Area of circle: 78.53981633974483`
    },
    "28": {
        "title": `Java Program to find area of rectangle`,
        "code": `
package basic;

import java.util.Scanner;

public class q28 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter length: ");
        double length = input.nextDouble();

        System.out.print("Enter breadth: ");
        double breadth = input.nextDouble();

        double area = length * breadth;

        System.out.println("Area of rectangle: " + area);
    }
}
`,
        "output": `Enter length: 45
Enter breadth: 39
Area of rectangle: 1755.0`
    },
    "29": {
        "title": `Java Program to find area of triangle`,
        "code": `
package basic;

import java.util.Scanner;

public class q29 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter base: ");
        double base = input.nextDouble();

        System.out.print("Enter height: ");
        double height = input.nextDouble();

        double area = 0.5 * base * height;

        System.out.println("Area of triangle: " + area);
    }
}
`,
        "output": `Enter base: 10
Enter height: 12
Area of triangle: 60.0`
    },
    "30": {
        "title": `Java Program to find area of equilateral triangle`,
        "code": `
package basic;

import java.util.Scanner;

public class q30 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter side: ");
        double side = input.nextDouble();

        double area = (Math.sqrt(3) / 4) * side * side;

        System.out.println("Area of equilateral triangle: " + area);
    }
}
`,
        "output": `Enter side: 5
Area of equilateral triangle: 10.825317547305481`
    },
    "31": {
        "title": `Java Program to find area of rhombus`,
        "code": `
package basic;

import java.util.Scanner;

public class q31 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first diagonal: ");
        double d1 = input.nextDouble();

        System.out.print("Enter second diagonal: ");
        double d2 = input.nextDouble();

        double area = (d1 * d2) / 2;

        System.out.println("Area of rhombus: " + area);
    }
}
`,
        "output": `Enter first diagonal: 10
Enter second diagonal: 10
Area of rhombus: 50.0`
    },
    "32": {
        "title": `Java Program to find area of parallelogram`,
        "code": `
package basic;

import java.util.Scanner;

public class q32 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter base: ");
        double base = input.nextDouble();

        System.out.print("Enter height: ");
        double height = input.nextDouble();

        double area = base * height;

        System.out.println("Area of parallelogram: " + area);
    }
}
`,
        "output": `Enter base: 10
Enter height: 12
Area of parallelogram: 120.0`
    },
    "33": {
        "title": `Java Program to find area of Prism`,
        "code": `
package basic;

import java.util.Scanner;

public class q33 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter length: ");
        double length = input.nextDouble();

        System.out.print("Enter breadth: ");
        double breadth = input.nextDouble();

        System.out.print("Enter height: ");
        double height = input.nextDouble();

        double area = 2 * (length * breadth + breadth * height + height * length);

        System.out.println("Total surface area of prism: " + area);
    }
}
`,
        "output": `Enter length: 10
Enter breadth: 12
Enter height: 5
Total surface area of prism: 460.0`
    },
    "34": {
        "title": `Java Program to find volume of sphere`,
        "code": `
package basic;

import java.util.Scanner;

public class q34 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter radius: ");
        double radius = input.nextDouble();

        double volume = (4.0 / 3) * Math.PI * radius * radius * radius;

        System.out.println("Volume of sphere: " + volume);
    }
}
`,
        "output": `Enter radius: 10
Volume of sphere: 4188.790204786391`
    },
    "35": {
        "title": `Java Program to find volume of cylinder`,
        "code": `
package basic;

import java.util.Scanner;

public class q35 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter radius: ");
        double radius = input.nextDouble();

        System.out.print("Enter height: ");
        double height = input.nextDouble();

        double volume = Math.PI * radius * radius * height;

        System.out.println("Volume of cylinder: " + volume);
    }
}
`,
        "output": `Enter radius: 7
Enter height: 24
Volume of cylinder: 3694.5129606215964`
    },
    "36": {
        "title": `Java Program to find volume of cuboid`,
        "code": `
package basic;

import java.util.Scanner;

public class q36 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter length: ");
        double length = input.nextDouble();

        System.out.print("Enter breadth: ");
        double breadth = input.nextDouble();

        System.out.print("Enter height: ");
        double height = input.nextDouble();

        double volume = length * breadth * height;

        System.out.println("Volume of cuboid: " + volume);
    }
}
`,
        "output": `Enter length: 10
Enter breadth: 12
Enter height: 5
Volume of cuboid: 600.0`
    },
    "37": {
        "title": `Java Program to find volume of cone`,
        "code": `package basic;

import java.util.Scanner;

public class q37 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter radius: ");
        double r = input.nextDouble();

        System.out.print("Enter height: ");
        double h = input.nextDouble();

        double volume = (Math.PI * r * r * h) / 3;

        System.out.println("Volume of cone: " + volume);
    }
}`,
        "output": `Enter radius: 9
Enter height: 7
Volume of cone: 593.7610115284709`
    },
    "38": {
        "title": `Java program to find surface area of cuboid`,
        "code": `package basic;

import java.util.Scanner;

public class q38 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter length: ");
        double l = input.nextDouble();

        System.out.print("Enter breadth: ");
        double b = input.nextDouble();

        System.out.print("Enter height: ");
        double h = input.nextDouble();

        double area = 2 * (l * b + b * h + h * l);

        System.out.println("Surface area of cuboid: " + area);
    }
}`,
        "output": `Enter length: 25
Enter breadth: 21
Enter height: 8
Surface area of cuboid: 1786.0`
    },
    "39": {
        "title": `Java program to find surface area of cylinder`,
        "code": `package basic;

import java.util.Scanner;

public class q39 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter radius: ");
        double r = input.nextDouble();

        System.out.print("Enter height: ");
        double h = input.nextDouble();

        double area = 2 * Math.PI * r * (r + h);

        System.out.println("Surface area of cylinder: " + area);
    }
}`,
        "output": `Enter radius: 10
Enter height: 7
Surface area of cylinder: 1068.1415022205297`
    },
    "40": {
        "title": `Java program to find surface area of cube`,
        "code": `package basic;

import java.util.Scanner;

public class q40 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter side: ");
        double s = input.nextDouble();

        double area = 6 * s * s;

        System.out.println("Surface area of cube: " + area);
    }
}`,
        "output": `Enter side: 5
Surface area of cube: 150.0`
    },
    "41": {
        "title": `Java program to calculate average marks`,
        "code": `package basic;

import java.util.Scanner;

public class q41 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter marks in 5 subjects: ");

        double total = 0;

        for (int i = 1; i <= 5; i++) {
            total += input.nextDouble();
        }

        double average = total / 5;

        System.out.println("Average marks: " + average);
    }
}`,
        "output": `Enter marks in 5 subjects: 67
89
90
88
76
Average marks: 82.0`
    },
    "42": {
        "title": `Java program to check vowel or consonant`,
        "code": `package basic;

import java.util.Scanner;

public class q42 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter an alphabet: ");
        char ch = input.next().charAt(0);

        ch = Character.toLowerCase(ch);

        if (ch >= 'a' && ch <= 'z') {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                System.out.println("Vowel");
            } else {
                System.out.println("Consonant");
            }
        } else {
            System.out.println("Invalid input");
        }
    }
}`,
        "output": `Enter an alphabet: t
Consonant`
    },
    "43": {
        "title": `Java program to sum of N numbers`,
        "code": `package basic;

import java.util.Scanner;

public class q43 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the value of N: ");
        int n = input.nextInt();

        int sum = 0;

        System.out.println("Enter " + n + " numbers:");

        for (int i = 1; i <= n; i++) {
            sum += input.nextInt();
        }

        System.out.println("Sum: " + sum);
    }
}`,
        "output": `Enter the value of N: 6
Enter 6 numbers:
45
34
23
66
45
56
Sum: 269`
    },
    "44": {
        "title": `Java program to find factorial of any number`,
        "code": `package basic;

import java.util.Scanner;

public class q44 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = input.nextInt();

        long fact = 1;

        if (num < 0) {
            System.out.println("Please enter a positive number.");
        } else {
            for (int i = 1; i <= num; i++) {
                fact *= i;
            }

            System.out.println("Factorial: " + fact);
        }
    }
}`,
        "output": `Enter a number: 5 
Factorial: 120`
    },
    "45": {
        "title": `Java Program to calculate electricity bill`,
        "code": ``,
        "output": ``
    },
    "46": {
        "title": `Java Program To Calculate CGPA Percentage`,
        "code": ``,
        "output": ``
    },
    "47": {
        "title": `Java Program to calculate compound interest`,
        "code": ``,
        "output": ``
    },
    "48": {
        "title": `Java Program To Calculate Batting Average`,
        "code": ``,
        "output": ``
    },
    "49": {
        "title": `Java Pogram to Calculate Commission Percentage`,
        "code": `package basic;

import java.util.Scanner;

public class q49 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter total sales: ");
        double sales = input.nextDouble();

        System.out.print("Enter commission amount: ");
        double commission = input.nextDouble();

        if (sales > 0) {
            double percentage = (commission / sales) * 100;
            System.out.println("Commission Percentage: " + percentage + "%");
        } else {
            System.out.println("Invalid sales amount.");
        }
    }
}`,
        "output": `Enter total sales: 50000
Enter commission amount: 20000
Commission Percentage: 40.0%`
    },
    "50": {
        "title": `Java Pogram To Find Distance Between Two Points`,
        "code": `package basic;

import java.util.Scanner;

public class q50 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter x1 and y1: ");
        double x1 = input.nextDouble();
        double y1 = input.nextDouble();

        System.out.print("Enter x2 and y2: ");
        double x2 = input.nextDouble();
        double y2 = input.nextDouble();

        double distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
        );

        System.out.println("Distance: " + distance);
    }
}`,
        "output": `Enter x1 and y1: 34 56
Enter x2 and y2: 22 67
Distance: 16.278820596099706`
    },
    "51": {
        "title": `Java Program To Calculate Power Of Number`,
        "code": `package basic;

import java.util.Scanner;

public class q51 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter base: ");
        int base = input.nextInt();

        System.out.print("Enter exponent: ");
        int exp = input.nextInt();

        int result = 1;

        for (int i = 1; i <= exp; i++) {
            result *= base;
        }

        System.out.println("Result: " + result);
    }
}`,
        "output": `Enter base: 10
Enter exponent: 6
Result: 1000000`
    },
    "52": {
        "title": `Write a Java program to take three numbers from the user and print the greatest number`,
        "code": `package basic;

import java.util.Scanner;

public class q52 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter three numbers: ");
        int a = input.nextInt();
        int b = input.nextInt();
        int c = input.nextInt();

        if (a >= b && a >= c) {
            System.out.println("Greatest number: " + a);
        } else if (b >= a && b >= c) {
            System.out.println("Greatest number: " + b);
        } else {
            System.out.println("Greatest number: " + c);
        }
    }
}`,
        "output": `Enter three numbers: 23 45 21
Greatest number: 45`
    },
    "53": {
        "title": `Write a Java program to find the number of days in a month`,
        "code": ``,
        "output": ``
    },
    "54": {
        "title": `Write a Java program to test a number is positive or negative`,
        "code": `package basic;

import java.util.Scanner;

public class q54 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = input.nextInt();

        if (num > 0) {
            System.out.println("Positive number");
        } else if (num < 0) {
            System.out.println("Negative number");
        } else {
            System.out.println("Zero");
        }
    }
}`,
        "output": `Enter a number: 23
Positive number`
    },
    "55": {
        "title": `Write a Java Program to accept number of week’s day (1-7) and print name of the day`,
        "code": `package basic;

import java.util.Scanner;

public class q55 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter day number (1-7): ");
        int day = input.nextInt();

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day number");
        }
    }
}`,
        "output": `Enter day number (1-7): 5
Friday`
    },
    "56": {
        "title": `Write a Java program that takes a year from user and print whether that year is a leap year or not`,
        "code": ``,
        "output": ``
    },
    "57": {
        "title": `Write a Java program to input 5 numbers from keyboard and find their sum and average`,
        "code": `package basic;

import java.util.Scanner;

public class q57 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int num, sum = 0;
        double average;

        System.out.println("Enter 5 numbers:");

        for (int i = 1; i <= 5; i++) {
            num = input.nextInt();
            sum = sum + num;
        }

        average = sum / 5.0;

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);
    }
}`,
        "output": `Enter 5 numbers:
23
45
66
78
12
Sum = 224
Average = 44.8`
    },
    "58": {
        "title": `Write a program in Java to display the first 5 natural numbers`,
        "code": `package basic;

public class q58 {
    public static void main(String args[]) {

        System.out.println("First 5 natural numbers:");

        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,
        "output": `First 5 natural numbers:
1
2
3
4
5`
    },
    "59": {
        "title": `Write a java program to check vowel or consonant`,
        "code": `package basic;

import java.util.Scanner;

public class q59 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        char ch;

        System.out.print("Enter a character: ");
        ch = input.next().charAt(0);

        ch = Character.toLowerCase(ch);

        if (ch >= 'a' && ch <= 'z') {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                System.out.println("Vowel");
            } else {
                System.out.println("Consonant");
            }
        } else {
            System.out.println("Invalid character");
        }
    }
}`,
        "output": `Enter a character: a
Vowel`
    },
    "60": {
        "title": `Write a Java program to display the cube of the number upto given an integer`,
        "code": ``,
        "output": ``
    },
    "61": {
        "title": `Write a Java program to display the n terms of odd natural number and their sum`,
        "code": `package basic;

import java.util.Scanner;

public class q61 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int n, num = 1, sum = 0;

        System.out.print("Enter the number of terms: ");
        n = input.nextInt();

        System.out.println("Odd natural numbers:");

        for (int i = 1; i <= n; i++) {
            System.out.print(num + " ");
            sum = sum + num;
            num = num + 2;
        }

        System.out.println("Sum = " + sum);
    }
}`,
        "output": `Enter the number of terms: 3
Odd natural numbers:
1 3 5 Sum = 9`
    },
    "62": {
        "title": `Write a Java program to display the multiplication table of a given integer`,
        "code": `package basic;

import java.util.Scanner;

public class q62 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int num;

        System.out.print("Enter a number: ");
        num = input.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
}`,
        "output": `Enter a number: 33
33 x 1 = 33
33 x 2 = 66
33 x 3 = 99
33 x 4 = 132
33 x 5 = 165
33 x 6 = 198
33 x 7 = 231
33 x 8 = 264
33 x 9 = 297
33 x 10 = 330`
    },
    "63": {
        "title": `Write a Java program that reads an integer and check whether it is negative, zero, or positive`,
        "code": `package basic;

import java.util.Scanner;

public class q63 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int num;

        System.out.print("Enter a number: ");
        num = input.nextInt();

        if (num > 0) {
            System.out.println("Positive number");
        } else if (num < 0) {
            System.out.println("Negative number");
        } else {
            System.out.println("Zero");
        }
    }
}`,
        "output": `Enter a number: 54
Positive number`
    },
    "64": {
        "title": `Write a Java program that reads an positive integer and count the number of digits`,
        "code": `package basic;

import java.util.Scanner;

public class q64 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int num, count = 0;

        System.out.print("Enter a positive integer: ");
        num = input.nextInt();

        if (num > 0) {
            while (num > 0) {
                num = num / 10;
                count++;
            }

            System.out.println("Number of digits = " + count);
        } else {
            System.out.println("Please enter a positive integer.");
        }
    }
}`,
        "output": `Enter a positive integer: 67
Number of digits = 2`
    },
    "65": {
        "title": `Write a Java program that accepts three numbers and check All numbers are equal or not`,
        "code": `package basic;

import java.util.Scanner;

public class q65 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a, b, c;

        System.out.print("Enter three numbers: ");
        a = input.nextInt();
        b = input.nextInt();
        c = input.nextInt();

        if (a == b && b == c) {
            System.out.println("All numbers are equal.");
        } else {
            System.out.println("All numbers are not equal.");
        }
    }
}`,
        "output": `Enter three numbers: 45 65 23
All numbers are not equal.`
    },
    "66": {
        "title": `Write a java program that accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.`,
        "code": `package basic;

import java.util.Scanner;

public class q66 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a, b, c;

        System.out.print("Enter three numbers: ");
        a = input.nextInt();
        b = input.nextInt();
        c = input.nextInt();

        if (a < b && b < c) {
            System.out.println("Numbers are in increasing order.");
        } else if (a > b && b > c) {
            System.out.println("Numbers are in decreasing order.");
        } else {
            System.out.println("Numbers are neither in increasing nor decreasing order.");
        }
    }
}`,
        "output": `Enter three numbers: 32 65 52
Numbers are neither in increasing nor decreasing order.`
    },
    "67": {
        "title": `Write a Java program that determines a student’s grade`,
        "code": `package basic;

import java.util.Scanner;

public class q67 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        double percentage;

        System.out.print("Enter percentage: ");
        percentage = input.nextDouble();

        if (percentage < 0 || percentage > 100) {
            System.out.println("Invalid percentage.");
        } else if (percentage >= 90) {
            System.out.println("Grade: A+");
        } else if (percentage >= 80) {
            System.out.println("Grade: A");
        } else if (percentage >= 70) {
            System.out.println("Grade: B");
        } else if (percentage >= 60) {
            System.out.println("Grade: C");
        } else if (percentage >= 50) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
    }
}`,
        "output": `Enter percentage: 78
Grade: B`
    },
    "68": {
        "title": `Write a Java program to create a simple calculator`,
        "code": ``,
        "output": ``
    },
    "69": {
        "title": `Write a Java program to concatenate two string`,
        "code": ``,
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

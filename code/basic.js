let grp_fn =
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
    },
    "9": {
        "title": `Write a Java program to check whether Java is installed on your computer or not`,
        "code": ``,
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
    },
    "22": {
        "title": `Write a Java program to count the number of even and odd elements in a given array`,
        "code": `package singleDArr;

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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
        "output": ``
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
    const question = grp_fn[num.toString()];
    if (!question) return;

    document.querySelector('.default').style.display = 'none';
    const container = document.getElementById('question-container');
    container.style.display = 'block';

    const titleEl = document.getElementById('question-title');
    document.getElementById('question-number').textContent = `Q${num}`;
    titleEl.style.whiteSpace = "pre-line";

    titleEl.textContent = question.title;
    document.getElementById('code-block').textContent = question.code;

    const outputData = question.output;
    const outputBlock = document.getElementById('output-block');

    if (!outputData || outputData.length === 0) {
        outputBlock.innerHTML = "No data";
        return;
    }

    // clear old output
    outputBlock.innerHTML = "";

    // supports both single & multiple tables
    const tables = Array.isArray(outputData[0]) ? outputData : [outputData];

    tables.forEach(tableData => {
        if (!tableData || tableData.length === 0) return;

        let table = "<table border='1'><thead><tr>";

        Object.keys(tableData[0]).forEach(key => {
            table += `<th>${key}</th>`;
        });

        table += "</tr></thead><tbody>";

        tableData.forEach(row => {
            table += "<tr>";
            Object.values(row).forEach(value => {
                table += `<td>${value ?? "NULL"}</td>`;
            });
            table += "</tr>";
        });

        table += "</tbody></table><br>";

        outputBlock.innerHTML += table;
    });
}
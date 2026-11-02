let ODVC = 
{
  "1": {"title": `Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.`,
    "code":  `package packages;
import java.util.Date;

public class q1{
    public static void main(String args[]){
        Date d = new Date();
        System.out.print(d);
    }
}`,
    "output": `Mon Nov 02 22:15:13 IST 2026`
  },
  "2": {"title": `Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.`,
    "code":  `package packages;

public class q2 {
    public static void main(String args[]) {
        java.util.Date d = new java.util.Date();

        System.out.println("Current Date and Time: " + d);
    }
}`,
    "output": `Current Date and Time: Mon Nov 02 22:15:44 IST 2026`},
  "3": {"title": `Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.`,
    "code":  `package packages;

import java.util.Date;

class MyDate extends Date {
    void display() {
        System.out.println("Current Date and Time: " + this);
    }
}

public class q3 {
    public static void main(String args[]) {
        MyDate d = new MyDate();
        d.display();
    }
}`,
    "output": `Current Date and Time: Mon Nov 02 22:16:00 IST 2026`
  },
   "4": {"title": `Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.`,
    "code":  `package packages;

class MyDate extends java.util.Date {
    void display() {
        System.out.println("Current Date and Time: " + this);
    }
}

public class q4 {
    public static void main(String args[]) {
        MyDate d = new MyDate();
        d.display();
    }
}`,
    "output": `Current Date and Time: Mon Nov 02 22:16:19 IST 2026`
  },
   "5": {"title": `Create a Java program to create a package with multiple default classes.`,
    "code":  `package packages;

class Student {
    void displayStudent() {
        System.out.println("This is Student class.");
    }
}

class Teacher {
    void displayTeacher() {
        System.out.println("This is Teacher class.");
    }
}

class College {
    void displayCollege() {
        System.out.println("This is College class.");
    }
}

public class q5 {
    public static void main(String args[]) {
        Student s = new Student();
        Teacher t = new Teacher();
        College c = new College();

        s.displayStudent();
        t.displayTeacher();
        c.displayCollege();
    }
}`,
    "output": `This is Student class.
This is Teacher class.
This is College class.`
  },
   "6": {"title": `Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.`,
    "code":  `package packages;

public class q6 {
    public static void main(String args[]) {
        Student s = new Student();
        Teacher t = new Teacher();
        College c = new College();
        Course cr = new Course();

        s.display();
        t.display();
        c.display();
        cr.display();
    }
}`,
    "output": `This is Student class.
This is Teacher class.
This is College class.
This is Course class.`
  },
   "7": {"title": `Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.`,
    "code":  ``,
    "output": ``
  },
   "8": {"title": `Create a Java program to create a package with public class and protected members to be accessed in another class.`,
    "code":  ``,
    "output": ``
  },
   "9": {"title": `Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.`,
    "code":  ``,
    "output": ``
  },
   "10": {"title": `Create a Java program to create a package with public class and public members to be accessed in another class.`,
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
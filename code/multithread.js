let ODVC = 
{
  "1": {
    "title": `Write a Java program to create a basic Java thread that prints "Hello, World!" when executed.`,
    "code":  `package multithread;
class MyThread extends Thread{
    public void run(){
        System.out.println("Hello World!!");
    }
}

public class q1 {
    public static void main(String args[]){
        MyThread t1 = new MyThread();

        t1.start();
    }
}`,
    "output": `Hello World!!`
  },
  "2": {
    "title": `Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.`,
    "code":  `package multithread;

class EvenOdd extends Thread{
    public void run(){
        for(int i = 0;i<= 20 ; i++){
            if(i%2 == 0){
                System.out.println(i + " is an even number.");
            }else{
                System.out.println(i + " is an odd number.");
            }
        }
    }
}

public class q2{
    public static void main(String args[]){
        EvenOdd eo1 = new EvenOdd();
        eo1.start();
    }
}`,
   "output": `0 is an even number.
1 is an odd number.
2 is an even number.
3 is an odd number.
4 is an even number.
5 is an odd number.
6 is an even number.
7 is an odd number.
8 is an even number.
9 is an odd number.
10 is an even number.
11 is an odd number.
12 is an even number.
13 is an odd number.
14 is an even number.
15 is an odd number.
16 is an even number.
17 is an odd number.
18 is an even number.
19 is an odd number.
20 is an even number.`
  },
  "3": {
    "title": `Write a Java program that sorts an array of integers using multiple threads.`,
    "code":  `package multithread;
class Sort extends Thread{
    int arr[];

    Sort(int arr[]){
        this.arr = arr;
    }

    public void run(){
        int temp;
        for(int i = 0 ; i< arr.length ; i++){
            for(int j = i+1 ; j< arr.length ; j++){
                if(arr[i] >arr[j]){
                    temp = arr[i];
                    arr[i]= arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}

public class q3{
    public static void main(String args[]){
        int arr[] = {23,12,54,1,2};
        Sort s1 = new Sort(arr);

        s1.start();
        System.out.println("Array : ");
        for(int i = 0; i <arr.length ; i ++){
            System.out.print(arr[i] + "  ");
        }
    }
}`,
    "output": `Array : 
1  2  12  23  54`
  },
   "4": {
    "title": `Write a Java program that performs matrix multiplication using multiple threads.`,
    "code":  ``,
    "output": ``
  },
   "5": {
    "title": `Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.`,
    "code":  `package multithread;

class PrimeThread extends Thread {
    int start, end;
    int sum = 0;

    PrimeThread(int start, int end) {
        this.start = start;
        this.end = end;
    }

    boolean isPrime(int num) {
        if (num < 2) {
            return false;
        }

        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }

    public void run() {
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                sum += i;
            }
        }
    }
}

public class q5 {
    public static void main(String args[]) throws InterruptedException {
        int limit = 20;

        PrimeThread t1 = new PrimeThread(1, limit);

        t1.start();
        t1.join();
        
        int sum = t1.sum;

        System.out.println("Sum of prime numbers up to " + limit + ": " + sum);
    }
}`,
    "output": `Sum of prime numbers up to 20: 77`
  },
   "6": {
    "title": `Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.`,
    "code":  ``,
    "output": ``
  },
   "7": {
    "title": `Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.`,
    "code":  ``,
    "output": ``
  },
   "8": {
    "title": `Create the program to create multiple threads by using Runnbale interface`,
    "code":  ``,
    "output": ``
  },
   "9": {
    "title": `Create the program to create multiple threads by using Thread class`,
    "code":  ``,
    "output": ``
  },
   "10": {
    "title": `Create the program to create multiple threads, set its name and its priority.`,
    "code":  ``,
    "output": ``
  },
   "11": {
    "title": `Create the program to create multiple threads, show an example of synchronization keyword.`,
    "code":  ``,
    "output": ``
  },
   "12": {
    "title": `Create the program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.`,
    "code":  ``,
    "output": ``
  },
   "13": {
  "title": `Create the program to create multiple threads, show an example of join and yield methods.`,
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
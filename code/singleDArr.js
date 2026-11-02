let dml = 
{
  "1": {
    "title": `Program to copy all elements of one array into another array`,
    "code":  `package singleDArr;

import java.util.Scanner;

public class q1 {

    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the size of array:");
        int size = input.nextInt();

        int a[] = new int[size];
        int b[] = new int[size];

        System.out.println("Enter array elements:");
        for (int i = 0; i < size; i++) {
            a[i] = input.nextInt();
        }

        for (int i = 0; i < size; i++) {
            b[i] = a[i];
        }

        System.out.println("Copied array:");
        for (int i = 0; i < size; i++) {
            System.out.print(b[i] + " ");
        }

        input.close();
    }
}
`,
    "output": `Enter the size of array:
5
Enter array elements:
32 12 54 33 22
Copied array:
32 12 54 33 22`
  },
  "2": {
    "title": `Program to find the frequency of each element in the array`,
    "code":  `
package singleDArr;

public class q2 {
    public static void main(String args[]) {
        int a[] = {10, 20, 10, 30, 20, 10};
        int visited[] = new int[a.length];

        for (int i = 0; i < a.length; i++) {
            if (visited[i] == 1) {
                continue;
            }

            int count = 1;

            for (int j = i + 1; j < a.length; j++) {
                if (a[i] == a[j]) {
                    count++;
                    visited[j] = 1;
                }
            }

            System.out.println(a[i] + " occurs " + count + " times.");
        }
    }
}
`,
    "output": `10 occurs 3 times.
20 occurs 2 times.
30 occurs 1 times.`
  },
  "3": {
    "title": `Program to left rotate the elements of an array`,
    "code":  `
package singleDArr;

public class q3 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};
        int temp = a[0];

        for (int i = 0; i < a.length - 1; i++) {
            a[i] = a[i + 1];
        }

        a[a.length - 1] = temp;

        System.out.println("Array after left rotation:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array after left rotation:
20 30 40 50 10`
  },
   "4": {
    "title": `Program to print the duplicate elements of an array`,
    "code":  `
package singleDArr;

public class q4 {
    public static void main(String args[]) {
        int a[] = {10, 20, 10, 30, 20, 10};
        int visited[] = new int[a.length];

        System.out.println("Duplicate elements :");
        for (int i = 0; i < a.length; i++) {
            if (visited[i] == 1) {
                continue;
            }

            int count = 1;

            for (int j = i + 1; j < a.length; j++) {
                if (a[i] == a[j]) {
                    count++;
                    visited[j] = 1;
                }
            }

            if(count>1){
                System.out.println(a[i]+" ");
            }

        }
    }
}
`,
    "output": `Duplicate elements :
10 
20 `
  },
   "5": {
    "title": `Program to print the elements of an array`,
    "code":  `
package singleDArr;

public class q5 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};

        System.out.println("Array elements:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array elements:
10 20 30 40 50`
  },
   "6": {
    "title": `Program to print the elements of an array in reverse order`,
    "code":  `
package singleDArr;

public class q6 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};

        System.out.println("Array elements in reverse order:");

        for (int i = a.length - 1; i >= 0; i--) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array elements in reverse order:
50 40 30 20 10 `
  },
   "7": {
    "title": `Program to print the elements of an array present on even position`,
    "code":  `
package singleDArr;

public class q7 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50, 60};

        System.out.println("Elements at even positions:");

        for (int i = 1; i < a.length; i += 2) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Elements at even positions:
20 40 60`
  },
   "8": {
    "title": `Program to print the elements of an array present on odd position`,
    "code":  `
package singleDArr;

public class q8 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50, 60};

        System.out.println("Elements at odd positions:");

        for (int i = 0; i < a.length; i += 2) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Elements at odd positions:
10 30 50`
  },
   "9": {
    "title": `Program to print the largest element in an array`,
    "code":  `
package singleDArr;

public class q9 {
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
   "10": {
    "title": `Program to print the smallest element in an array`,
    "code":  `
package singleDArr;

public class q10 {
    public static void main(String args[]) {
        int a[] = {10, 25, 7, 45, 18};
        int smallest = a[0];

        for (int i = 1; i < a.length; i++) {
            if (a[i] < smallest) {
                smallest = a[i];
            }
        }

        System.out.println("Smallest element = " + smallest);
    }
}
`,
    "output": `Smallest element = 7`
  },
   "11": {
    "title": `Program to print the number of elements present in an array`,
    "code":  `
package singleDArr;

public class q11 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};

        System.out.println("Number of elements = " + a.length);
    }
}
`,
    "output": `Number of elements = 5`
  },
   "12": {
    "title": `Program to print the sum of all the items of the array`,
    "code":  `
package singleDArr;

public class q12 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};
        int sum = 0;

        for (int i = 0; i < a.length; i++) {
            sum = sum + a[i];
        }

        System.out.println("Sum of array elements = " + sum);
    }
}
`,
    "output": `Sum of array elements = 150`
  },
   "13": {
  "title": `Program to right rotate the elements of an array`,
    "code":  `
package singleDArr;

public class q13 {
    public static void main(String args[]) {
        int a[] = {10, 20, 30, 40, 50};
        int temp = a[a.length - 1];

        for (int i = a.length - 1; i > 0; i--) {
            a[i] = a[i - 1];
        }

        a[0] = temp;

        System.out.println("Array after right rotation:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array after right rotation:
50 10 20 30 40`
  },
   "14": {
    "title": `Program to sort the elements of an array in ascending order`,
    "code":  `
package singleDArr;

public class q14 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};

        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] > a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }

        System.out.println("Array in ascending order:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array in ascending order:
10 20 30 40 50`
  },
   "15": {
    "title": `Program to sort the elements of an array in descending order`,
    "code":  `
package singleDArr;

public class q15 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};

        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] < a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }

        System.out.println("Array in descending order:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array in descending order:
50 40 30 20 10`
  },
   "16": {
    "title": `Program to Find 3rd Largest Number in an array`,
    "code":  `
package singleDArr;

public class q16 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};

        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] < a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }

        System.out.println("3rd largest number = " + a[2]);
    }
}
`,
    "output": `3rd largest number = 30`
  },
   "17": {
    "title": `Program to Find 2nd Largest Number in an array`,
    "code":  `
package singleDArr;

public class q17 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};

        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] < a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }

        System.out.println("2nd largest number = " + a[1]);
    }
}
`,
    "output": `2nd largest number = 40`
  },
   "18": {
    "title": `Program to Find Largest Number in an array`,
    "code":  `
package singleDArr;

public class q18 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};
        int largest = a[0];

        for (int i = 1; i < a.length; i++) {
            if (a[i] > largest) {
                largest = a[i];
            }
        }

        System.out.println("Largest number = " + largest);
    }
}
`,
    "output": `Largest number = 50`
  },
   "19": {
    "title": `to Program Find 2nd Smallest Number in an array`,
    "code":  `
package singleDArr;

public class q19 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};

        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] > a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }

        System.out.println("2nd smallest number = " + a[1]);
    }
}
`,
    "output": `2nd smallest number = 20`
  },
   "20": {
    "title": `Program to Find Smallest Number in an array`,
    "code":  `
package singleDArr;

public class q20 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};
        int smallest = a[0];

        for (int i = 1; i < a.length; i++) {
            if (a[i] < smallest) {
                smallest = a[i];
            }
        }

        System.out.println("Smallest number = " + smallest);
    }
}
`,
    "output": `Smallest number = 10`
  },
   "21": {
    "title": `Program to Remove Duplicate Element in an array`,
    "code":  `
package singleDArr;

public class q21 {
    public static void main(String args[]) {
        int a[] = {10, 20, 10, 30, 20, 40};
        int b[] = new int[a.length];
        int count = 0;

        for (int i = 0; i < a.length; i++) {
            int flag = 0;

            for (int j = 0; j < count; j++) {
                if (a[i] == b[j]) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                b[count] = a[i];
                count++;
            }
        }

        System.out.println("Array after removing duplicates:");

        for (int i = 0; i < count; i++) {
            System.out.print(b[i] + " ");
        }
    }
}
`,
    "output": `Array after removing duplicates:
10 20 30 40`
  },
   "22": {
    "title": `Program to Print Odd and Even Numbers from an array`,
    "code":  `
package singleDArr;

public class q22 {
    public static void main(String args[]) {
        int a[] = {10, 15, 20, 25, 30, 35};

        System.out.println("Even numbers:");

        for (int i = 0; i < a.length; i++) {
            if (a[i] % 2 == 0) {
                System.out.print(a[i] + " ");
            }
        }

        System.out.println("\\nOdd numbers:");

        for (int i = 0; i < a.length; i++) {
            if (a[i] % 2 != 0) {
                System.out.print(a[i] + " ");
            }
        }
    }
}
`,
    "output": `Even numbers:
10 20 30 
Odd numbers:
15 25 35`
  },
   "23": {
    "title": `How to Sort an Array in Java`,
    "code":  `
package singleDArr;

import java.util.Arrays;

public class q23 {
    public static void main(String args[]) {
        int a[] = {40, 10, 50, 20, 30};

        Arrays.sort(a);

        System.out.println("Array in ascending order:");

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
`,
    "output": `Array in ascending order:
10 20 30 40 50`
  }
};

function loadQuestion(num) {
  const question = dml[num.toString()];
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

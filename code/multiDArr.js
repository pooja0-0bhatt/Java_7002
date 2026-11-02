let mda = 
{
  "1": {
    "title": `Enter the Matrix of rows and columns entered by the user and print in matrix format`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q1 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter number of rows: ");
        int rows = input.nextInt();

        System.out.print("Enter number of columns: ");
        int cols = input.nextInt();

        int a[][] = new int[rows][cols];

        System.out.println("Enter matrix elements:");

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Matrix:");

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print(a[i][j] + "  ");
            }
            System.out.println();
        }

        input.close();
    }
}
`,
    "output": `Enter number of rows: 3
Enter number of columns: 3
Enter matrix elements:
2 3 1
5 4 3
6 2 1
Matrix:
2  3  1  
5  4  3  
6  2  1  `
  },
  "2": {
    "title": `Program to Add Two Matrices`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q2 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[2][2];
        int b[][] = new int[2][2];
        int sum[][] = new int[2][2];

        System.out.println("Enter first matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Enter second matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                b[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                sum[i][j] = a[i][j] + b[i][j];
            }
        }

        System.out.println("Sum of matrices:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(sum[i][j] + "  ");
            }
            System.out.println();
        }

        input.close();
    }
}
`,
    "output": `Enter first matrix:
6 5 
5 1
Enter second matrix:
8 2
9 1
Sum of matrices:
14  7  
14  2 `
   
  },
  "3": {
    "title": `Program to Multiply Two Matrices`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q3 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[2][2];
        int b[][] = new int[2][2];
        int product[][] = new int[2][2];

        System.out.println("Enter first matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Enter second matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                b[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    product[i][j] += a[i][k] * b[k][j];
                }
            }
        }

        System.out.println("Product of matrices :");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(product[i][j] + "  ");
            }
            System.out.println();
        }

        input.close();
    }
}
`, "output": `Enter first matrix:
3 2 
4 7
Enter second matrix:
3 9 
1 6
Product of matrices :
11  39  
19  78  `
  },
   "4": {
    "title": `Program to subtract the two matrices`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q4 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[2][2];
        int b[][] = new int[2][2];
        int difference[][] = new int[2][2];

        System.out.println("Enter first matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Enter second matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                b[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                difference[i][j] = a[i][j] - b[i][j];
            }
        }

        System.out.println("Difference of matrices:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(difference[i][j] + "  ");
            }
            System.out.println();
        }

        input.close();
    }
}
`,
    "output": `Enter first matrix:
4 3
2 7
Enter second matrix:
6 2
9 1
Difference of matrices:
-2  1  
-7  6 `
  },
   "5": {
    "title": `Program to determine whether two matrices are equal`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q5 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[2][2];
        int b[][] = new int[2][2];
        int isEqual = 1;

        System.out.println("Enter first matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Enter second matrix:");

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                b[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                if (a[i][j] != b[i][j]) {
                    isEqual = 0;
                    break;
                }
            }
        }

        if (isEqual == 1) {
            System.out.println("Matrices are equal...");
        } else {
            System.out.println("Matrices are not equal...");
        }

        input.close();
    }
}
`,
    "output": `Enter first matrix:
5 2 
9 8
Enter second matrix:
5 2
9 8
Matrices are equal...`
  },
   "6": {
    "title": `Program to display the lower triangular matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q6 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];

        System.out.println("Enter matrix elements : ");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Lower triangular matrix :");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (j<=i) {
                    System.out.print(a[i][j] + "  ");
                } else {
                    System.out.print("0  ");
                }
            }
            System.out.println();
        }

        input.close();
    }
}
`,
   "output": `Enter matrix elements : 
6 4 1
9 6 3
2 9 5
Lower triangular matrix :
6  0  0  
9  6  0  
2  9  5 `
  },
   "7": {
    "title": `Program to display the upper triangular matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q7 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];

        System.out.println("Enter matrix elements:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();
            }
        }

        System.out.println("Upper triangular matrix:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i <= j) {
                    System.out.print(a[i][j] + "  ");
                } else {
                    System.out.print("0  ");
                }
            }
            System.out.println();
        }

        input.close();
    }
}
`,
    "output": `Enter matrix elements:
6 4 1
9 6 3
2 9 5
Upper triangular matrix:
6  4  1  
0  6  3  
0  0  5  `
  },
   "8": {
    "title": `Program to find the frequency of odd & even numbers in the given matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q8 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];
        int even = 0, odd = 0;

        System.out.println("Enter matrix elements:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (a[i][j] % 2 == 0) {
                    even++;
                } else {
                    odd++;
                }
            }
        }

        System.out.println("Frequency of even numbers = " + even);
        System.out.println("Frequency of odd numbers = " + odd);

        input.close();
    }
}
`,
    "output": `Enter matrix elements:
6 5 3
9 7 5
7 1 0
Frequency of even numbers = 2
Frequency of odd numbers = 7`
  },
   "9": {
    "title": `Program to find the sum of each row and each column of a matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q9 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];

        System.out.println("Enter matrix elements:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 3; i++) {
            int sum = 0;

            for (int j = 0; j < 3; j++) {
                sum = sum + a[i][j];
            }

            System.out.println("Sum of row " + (i + 1) + " = " + sum);
        }

        for (int j = 0; j < 3; j++) {
            int sum = 0;

            for (int i = 0; i < 3; i++) {
                sum = sum + a[i][j];
            }

            System.out.println("Sum of column " + (j + 1) + " = " + sum);
        }

        input.close();
    }
}
`,
    "output": `Enter matrix elements:
6 5 4
9 2 0
4 5 2
Sum of row 1 = 15
Sum of row 2 = 11
Sum of row 3 = 11
Sum of column 1 = 19
Sum of column 2 = 12
Sum of column 3 = 6`
  },
   "10": {
    "title": `Program to find the transpose of a given matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q10 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];
        int transpose[][] = new int[3][3];

        System.out.println("Enter matrix elements:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                transpose[j][i] = a[i][j];
            }
        }

        System.out.println("Transpose of matrix:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(transpose[i][j] + "  ");
            }
            System.out.println();
        }

        input.close();
    }
}
`,
    "output": `Enter matrix elements:
3 2 1
7 2 1
9 3 8
Transpose of matrix:
3  7  9  
2  2  3  
1  1  8 `
  },
   "11": {
    "title": `Program to determine whether a given matrix is an identity matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q11 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];
        int flag = 1;

        System.out.println("Enter matrix elements:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == j && a[i][j] != 1) {
                    flag = 0;
                } else if (i != j && a[i][j] != 0) {
                    flag = 0;
                }
            }
        }

        if (flag == 1) {
            System.out.println("Identity matrix..");
        } else {
            System.out.println("Not an identity matrix...");
        }

        input.close();
    }
}
`,
   "output": `Enter matrix elements:
1 0 0
0 1 0
0 0 1
Identity matrix..`
  },
   "12": {
    "title": `Program to Transpose matrix`,
    "code":  `
package twoDArr;

public class q12 {
    public static void main(String args[]) {
        int a[][] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for (int i = 0; i < 3; i++) {
            for (int j = i + 1; j < 3; j++) {
                int temp = a[i][j];
                a[i][j] = a[j][i];
                a[j][i] = temp;
            }
        }

        System.out.println("Transpose of matrix:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(a[i][j] + "  ");
            }
            System.out.println();
        }
    }
}
`,
    "output": `Transpose of matrix:
1  4  7  
2  5  8  
3  6  9 `
  },
   "13": {
  "title": `Program to determine whether a given matrix is a sparse matrix`,
    "code":  `
package twoDArr;

import java.util.Scanner;

public class q13 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        int a[][] = new int[3][3];
        int zero = 0, nonZero = 0;

        System.out.println("Enter 9 elements:");

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                a[i][j] = input.nextInt();

                if (a[i][j] == 0) {
                    zero++;
                } else {
                    nonZero++;
                }
            }
        }

        if (zero > nonZero) {
            System.out.println("The matrix is a sparse matrix.");
        } else {
            System.out.println("The matrix is not a sparse matrix.");
        }

        input.close();
    }
}
`,
    "output": `Enter 9 elements:
4 5 0 
6 0 0
0 0 1
The matrix is a sparse matrix.`
  }
};

function loadQuestion(num) {
  const question = mda[num.toString()];
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
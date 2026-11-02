let ODVC = 
{
  "1": {
    "title": `How to convert String to int`,
    "code":  `package dataCon;

public class q1{
    public static void main(String args[]){
        String str = "56";
        int num = Integer.parseInt(str);
        System.out.println("Interger : "+ num);
    }
}`,
    "output": `Interger : 56`
  },
  "2": {
    "title": `How to convert int to String`,
    "code":  `package dataCon;

public class q2{
    public static void main(String args[]){
        int num = 36;
        String str = Integer.toString(num);
        System.out.println("String: "+ str);
    }
}`,
   "output": `String: 36`
  },
  "3": {
    "title": ` How to convert String to long`,
    "code":  `package dataCon;

public class q3{
    public static void main(String args[]){
        String str = "882452524";
        long num = Long.parseLong(str);
        System.out.println("Long Int : "+ num);
    }
}`,
    "output": `Long Int : 882452524`
  },
   "4": {
    "title": `How to convert long to String`,
    "code":  `package dataCon;

public class q4{
    public static void main(String args[]){
        long num = 213126473;
        String str = Long.toString(num);
        System.out.println("String: "+ str);
    }
}
`,
    "output": `String: 213126473`
  },
   "5": {
    "title": `How to convert String to float`,
    "code":  `package dataCon;

public class q5{
    public static void main(String args[]){
        String str = "45.25";
        float num = Float.parseFloat(str);
        System.out.println("Float : "+ num);
    }
}
`,
    "output": `Float : 45.25`
  },
   "6": {
    "title": `How to convert float to String`,
    "code":  `package dataCon;

public class q6{
    public static void main(String args[]){
        float num = 45.25f;
        String str = Float.toString(num);
        System.out.println("String: "+ str);
    }
}
`,
    "output": `String: 45.25`
  },
   "7": {
    "title": `How to convert String to double`,
    "code":  `package dataCon;

public class q7{
    public static void main(String args[]){
        String str = "123.456";
        double num = Double.parseDouble(str);
        System.out.println("Double : "+ num);
    }
}
`,
    "output": `Double : 123.456`
  },
   "8": {
    "title": `How to convert double to String`,
    "code":  `package dataCon;

public class q8{
    public static void main(String args[]){
        double num = 123.456;
        String str = Double.toString(num);
        System.out.println("String: "+ str);
    }
}`,
    "output": `String: 123.456`
  },
   "9": {
    "title": `How to convert String to Date`,
    "code":  ``,
    "output": ``
  },
   "10": {
    "title": `How to convert Date to String`,
    "code":  ``,
    "output": ``
  },
   "11": {
    "title": `Write a Java program to show an example of throws Keyword.`,
    "code":  `
`,
    "output": ``
  },
   "12": {
    "title": `Write a Java program to show an example of multiple catch`,
    "code":  `
`,
    "output": ``
  },
   "13": {
  "title": `Write a Java program to show an example of nested try block.`,
    "code":  `
`,
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
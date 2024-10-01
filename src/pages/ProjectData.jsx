import project1 from "../assets/friendproject1.jpg"; // Replace with actual image paths
import project2 from "../assets/friendproject2.jpg"; // Replace with actual image paths
import project3 from "../assets/friendproject3.jpg"; // Replace with actual image paths
import project4 from "../assets/friendproject4.jpg"; // Replace with actual image paths

const ProjectData = [
  {
    imgsrc: project1,
    title: "Plant Disease Detection using Machine Learning",
    objective:
      "Detect plant diseases by analyzing leaf images to assist in early identification and prevention.",
    modelUsed: "Convolutional Neural Network (CNN)",
    tools: "Python, Streamlit, PyCharm, pandas, TensorFlow/Keras, scikit-learn",
  },
  {
    imgsrc: project2,
    title: "Credit Card Fraud Detection using Machine Learning",
    objective:
      "Detect fraudulent credit card transactions by analyzing transaction patterns.",
    modelUsed: "Logistic Regression",
    tools: "Python, pandas, seaborn, matplotlib, scikit-learn",
  },
  {
    imgsrc: project3,
    title: "Diabetes Detection using Machine Learning",
    objective:
      "Predict whether a patient has diabetes based on medical features.",
    modelUsed: "Support Vector Machine (SVM)",
    tools: "Python, pandas, seaborn, matplotlib, scikit-learn",
  },
  {
    imgsrc: project4,
    title: "Titanic Survival Prediction using Machine Learning",
    objective:
      "Predict the survival chances of passengers based on features like age, gender, and class.",
    modelUsed: "Logistic Regression",
    tools: "Python, pandas, seaborn, matplotlib, scikit-learn",
  },
];

export default ProjectData;

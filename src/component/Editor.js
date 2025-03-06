// import { useEffect } from "react";

// const JDoodleEmbed = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
//     script.type = "text/javascript";
//     script.async = true;
//     document.body.appendChild(script);
//     const style = document.createElement("style");
//     style.innerHTML = `
//        iframe { width: 100%; height: 500px; } /* Adjust size as needed */
//        .jdoodle-compiler .compiler-options, 
//        .jdoodle-compiler .input-container, 
//        .jdoodle-compiler .arguments-container {
//         display: none !important;
//        }
//        .jdoodle-compiler .output-container {
//        display: block !important;
//        }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <div>
//       <div data-pym-src="https://www.jdoodle.com/embed/v1/340a5190138fc693"></div>
//     </div>
//   );
// };

// export default JDoodleEmbed;







// const JDoodleEmbed = () => {
//   return (
//     <div style={{ width: "100%", height: "600px", position: "relative" }}>
//       {/* JDoodle iframe with increased height */}
//       <iframe
//         src="https://www.jdoodle.com/embed/v1/340a5190138fc693"
//         width="100%"
//         height="800px" // Increase height so output is visible
//         style={{ border: "none", overflow: "hidden" }}
//         title="JDoodle Editor"
//       ></iframe>
//     </div>
//   );
// };

// export default JDoodleEmbed;





// const JDoodleEmbed = () => {
//   return (
//     <div style={{ width: "100%", height: "600px", position: "relative" }}>
//       <iframe
//         src="https://www.jdoodle.com/embed/v1/340a5190138fc693?hideVersion=true"
//         width="100%"
//         height="800px" // Increase height to improve visibility
//         style={{ border: "none", overflow: "hidden" }}
//         title="JDoodle Editor"
//       ></iframe>
//     </div>
//   );
// };

// export default JDoodleEmbed;








import { useState } from "react";

const JDoodleAPI = () => {
  const [code, setCode] = useState(`
    // Write your Java code here
    
    class Java{
      public static void main(String[] args){
        System.out.println("Hello");
      }
    }`
  );
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const executeCode = async () => {
    setLoading(true);

    // Update these with your actual credentials from JDoodle
    const requestData = {
      script: code,
      language: "java", // Change to "python3", "java", etc. as needed
      versionIndex: "5", // Update to the version you want to use
      clientId: "f1d22e62543f079574b4047d345c74b7", // Replace with your JDoodle API Client ID
      clientSecret: "67fcef4d369d50dece19105d6eac02f8be4ed45018c74ab2cb622d36c966e603", // Replace with your JDoodle API Secret
    };

    // Log the request data to verify
    console.log("Request Data:", requestData);

    try {
      // Optional: If CORS issues occur, use a proxy like this (for local development)
      // const proxyUrl = "http://localhost:8080/";
      // const targetUrl = "https://api.jdoodle.com/v1/execute";
      
      // const response = await fetch(proxyUrl + targetUrl, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestData),
      // });

      const response = await fetch("http://localhost:5000/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      
      const data = await response.json();
      console.log("API Response:", data); // Log the full response for debugging

      if (data.error) {
        setOutput("Error: " + data.error);
      } else {
        setOutput(data.output || "No output received");
      }
    } catch (error) {
      console.error("Error executing code:", error); // Log any error
      setOutput("Error executing code");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      {/* <h2>JDoodle API Code Runner</h2> */}
      <textarea
        rows="20"
        cols="80"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ width: "100%", fontFamily: "monospace", fontSize: "14px" }}
      />
      <br />
      <button onClick={executeCode} disabled={loading}>
        {loading ? "Running..." : "Run Code"}
      </button>
      <h3 textAlign="left">Output:</h3>
      <pre style={{ background: "#f4f4f4", padding: "10px", minHeight: "100px", border: "1px solid #ccc", overflowX: "auto" , textAlign: "left"}}>
        {output}
      </pre>
    </div>
  );
};

export default JDoodleAPI;

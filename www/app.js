
async function generate() {
  const fileInput = document.getElementById("audioFile");
  const output = document.getElementById("output");

  if (!fileInput.files.length) {
    alert("Audio file ရွေးပါ");
    return;
  }

  output.textContent = "⏳ Processing...";

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("model", "whisper-1");

  try {
    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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"
        },
        body: formData
      }
    );

    const result = await response.json();

    if (result.text) {
      output.textContent = result.text;
    } else {
      output.textContent = "❌ Error: " + JSON.stringify(result);
    }

  } catch (err) {
    output.textContent = "❌ Failed: " + err.message;
  }
}

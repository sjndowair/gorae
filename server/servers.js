const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, "..")));

// 루트 경로 처리
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

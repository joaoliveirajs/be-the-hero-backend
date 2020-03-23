import app from "./app";

const port: number = +process.env.PORT || 3333;

app.listen(port, () =>
  console.log(`Server running at: http://localhost:${port}`)
);

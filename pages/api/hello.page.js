export default async function handler(req, res) {
  if (Math.random() > 0.5) {
    res.status(200).json({ name: "hello" });
  } else {
    res.status(403).send({ error: "failed" });
  }
}

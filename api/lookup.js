export default async function handler(req, res) {
  const { num, key } = req.query;

  if (key !== "PURELYOUR") {
    return res.status(401).json({ success: false, error: "Invalid API key" });
  }

  if (!num) {
    return res.status(400).json({ success: false, error: "num is required" });
  }

  try {
    const upstream = await fetch(
      `https://yttttttt.anshapi.workers.dev/?key=DARKOSINT&num=${num}`
    );
    const data = await upstream.json();
    data.credit = "@PurelyYour";
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: "Upstream failed" });
  }
}

export const $ = (b =>
  (q, c = document) => (b = [...c.querySelectorAll(q)], b.length > 1 ? b : b[0]))()

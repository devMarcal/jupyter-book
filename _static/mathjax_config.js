MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea"],
    ignoreHtmlClass: "tex2jax_ignore",
  },
  loader: {
    load: ["[tex]/ams"],
  },
};

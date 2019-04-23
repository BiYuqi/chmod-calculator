const GoogleAnaly = ({ src, html }) => {
  const script = document.createElement('script');
  if (src) {
    script.async = true;
    script.src = src;
  }

  if (html) {
    script.innerHTML = html
  }
  document.body.appendChild(script);
};

export default GoogleAnaly;


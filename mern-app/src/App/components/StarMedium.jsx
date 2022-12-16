const StarMedium = ({ post }) => {
  const stars = post.comments && post.comments.map((comment) => comment.starts);

  const sum = stars && stars.reduce((a, b) => a + b, 0);

  let count = 0;
  const add = post.comments && post.comments.map((comment) => (count += 1));
  const moyenne = sum / count;

  const arrondi = Math.round(moyenne * 10) / 10;

  return (
    <div>
      <p>Ce post a {arrondi} étoiles de moyenne</p>
    </div>
  );
};

export default StarMedium;

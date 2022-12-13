export default function Discussion({
  discussion: { avatarUrl, url, title, author, createdAt, answer },
}) {
  const DEFAULT_AVATOR_IMAGE = "./avator_default.png";
  const imgSrc = avatarUrl || DEFAULT_AVATOR_IMAGE;
  const alt = `avatar of  + ${author}`;
  const createdAtToLocale = new Date(createdAt).toLocaleString();

  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img className="discussion__avatar--image" src={imgSrc} alt={alt} />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={url}>{title}</a>
        </h2>
        <div className="discussion__information">
          {author + " / " + createdAtToLocale}
        </div>
      </div>
      <div className="discussion__answered">
        <p>
          {answer ? (
            <i className="fa-regular fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square-xmark"></i>
          )}
        </p>
      </div>
    </li>
  );
}

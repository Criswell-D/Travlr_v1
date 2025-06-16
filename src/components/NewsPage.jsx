
export default function NewsPage() {
  const articles = [
    {
      title: 'Experience Kayaking!',
      img: 'kayak.jpg',
      date: 'April 03, 2023',
      author: 'Juan De La Cruz',
      body: `Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem, ullamcorper vitae laoreet id, rutrum et tortor. Vivamus luctus, lacus id egestas facilisis, nunc nunc ultricies lorem, vitae pulvinar nibh urna vel velit.`
    },
    // add additional articles here
  ];

  return (
    <div className="page news">
      <h2>News</h2>
      <div className="box">
        <div className="body">
          <ul id="news">
            {articles.map(article => (
              <li key={article.title}>
                <img
                  src={`/images/${article.img}`}
                  alt={article.title}
                />
                <h2>{article.title}</h2>
                <span className="time">
                  {article.date}
                  <br />
                  by: {article.author}
                </span>
                <p>{article.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
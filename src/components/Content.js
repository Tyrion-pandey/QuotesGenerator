const ContentBox = (props) => {
  return (
    <div style={{ color: props.color }}>
      <blockquote className="quote">
        <i class="fa fa-quote-left"></i>
        {props.data.quote}
      </blockquote>
      <p className="authorname">{props.data.author}</p>
    </div>
  );
};

export default ContentBox;

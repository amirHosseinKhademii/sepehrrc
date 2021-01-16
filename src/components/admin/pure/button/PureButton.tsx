const PureButton = ({ className, layout, text, onClick }) => {
  return (
    <button className={layout ? className : ''} onClick={onClick}>
      {text}
    </button>
  );
};

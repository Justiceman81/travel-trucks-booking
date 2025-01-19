import sprite from "../../assets/icons/sprite.svg";
const SelectBox = ({
  onClick,
  id,
  fill,
  size,
  className,
  stroke,
  ...props
}) => {
  return (
    <svg
      onClick={onClick}
      className={`${className || ""}`.trim()}
      width={size}
      height={size}
      {...props}
    >
      <use href={`${sprite}#${id}`} style={{ fill: fill, stroke: stroke }} />
    </svg>
  );
};

export default SelectBox;

const CustomRange = ({ value, rangeFunction }) => {
  let extra = 0;
  if (value <= 10) {
    extra = 1;
  } else {
    extra = -1;
  }
  return (
    <div className="range-box">
      <input
        type="range"
        value={value}
        min="6"
        max="15"
        onChange={rangeFunction}
        style={{
          background: `linear-gradient(to right, #2a8b8b ${
            ((value - 6) / 9) * 100
          }%, #000 ${((value - 6) / 9) * 100}%)`,
        }}
      />
      <div
        class="initial"
        style={{ width: `${((value - 6) / 9) * 100 + extra}%` }}
      ></div>
    </div>
  );
};
export default CustomRange;

function Stat(props) {
  return (
    <div className={props.mainStyle}>
      <div className={props.statStyle}>
        <div><img src={props.statIcon}/></div>
        <div>{props.Stat}</div>
      </div>
      <div className="text-[grey]"><span className="text-Dark-gray-blue">{props.score} </span>{props.result}</div>
    </div>
  );
}
export default Stat;

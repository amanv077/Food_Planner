const AllFood = (props) => {
  return (
    <div>
      <div className=" bg-green-900">
        <h1>{props.FoodData}</h1>
        {/* <ul>
          {FoodData.map((item) => (
            <li key={item.id}>{`${item.Day} - ${item.Time} - ${item.Food}`}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AllFood;

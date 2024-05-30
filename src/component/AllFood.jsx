/* eslint-disable react/prop-types */
const AllFood = ({ FoodData }) => {
  return (
    <div>
      <div className=" bg-green-900">
        <ul>
          {FoodData.map((item) => (
            <li key={item.id}>{`${item.Day} - ${item.Time} - ${item.Food}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// AllFood.propTypes = { FoodData: PropTypes.arrayOf() }

export default AllFood;

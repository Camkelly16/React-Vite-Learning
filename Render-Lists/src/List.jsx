/* filter() returns a new array of filter elements that meet a certain condition. 
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
filter() does not execute the function for array elements without values and doesn't change the original array.

The map() method calls a callback function on every element of an array and returns a new array that contains the results.
The map() method takes two named arguments, the first one is required whereas the second one is optional.

The sort() method sorts the elements of an array in place and returns the sorted array.  */
import PropTypes from 'prop-types'

const List = (props) => {

    const category = props.category;

    const itemList = props.items;

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL      
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL            
    //fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
    //fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC

    //const lowCalFruits= fruits.filter(fruit => fruit.calories < 100); // Any fruit calories that is less than 100
    //const highCalFruits= fruits.filter(fruit => fruit.calories >= 100); // Any fruit calories that is greater of equal to 100

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>);
                                            

    return (<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
    }
List.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

    List.defaultProps = {
        category: "Category",
        items: [], 
};

export default List;
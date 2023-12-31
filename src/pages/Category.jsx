import { useState, useEffect } from 'react';
import { getFilteredCategory } from '../api';
import { useParams,  } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const [meals, setMeals] = useState([]);
    const { name } = useParams();
    // const {goBack} = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
    <>
    {/* <button className='btn' onClick={goBack}>Go Back</button> */}
    {
    !meals.length ? (
    <Preloader />
    ) : (
    <MealList meals={meals} />
    )}
    </>
    );
}

export { Category };


import StarRatingComponent from 'react-star-rating-component';
const Rate = ({rating, setRateSearch,rateSearch}) => {   
    const  onStarClick= (nextValue) =>{
       setRateSearch(nextValue)
      };
       
        return (
            <div>
             <StarRatingComponent starCount={5} value={rating} onStarClick={onStarClick}/>
            </div>
        )
    };
    export default Rate;
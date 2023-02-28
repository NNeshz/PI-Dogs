import { getDogDetail } from '../../redux/Actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const dogDetail = useSelector((state) => state.dogDetail)
    
    useEffect(() =>{
        dispatch(getDogDetail(id))
    }, [dispatch])
    
    return(
        <div>
            <p>Detalles</p>
            <img src={dogDetail.image} alt="Dog playing"/>
            <h2>{dogDetail.name}</h2>
            <h3>{dogDetail?.weight}</h3>
            <h3>{dogDetail?.height}</h3>
            <p>{dogDetail?.lifeSpan}</p>
            <p>{dogDetail?.temperaments}</p>
            <p>ID: {dogDetail?.id}</p>

            <button>
                <Link to='/dogs'> Back </Link>
            </button>
        </div>
    )
}

export default Detail;
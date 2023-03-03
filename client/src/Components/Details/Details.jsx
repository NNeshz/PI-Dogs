import { getDogDetail } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./Details.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogDetail = useSelector((state) => state.dogDetail);

  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch]);

  return (
    <div className="detailsContainer">
      <div className="detailsHeader">
        <Link to="/dogs">Back</Link>
        <h3>Details</h3>
      </div>
      <div className="detailsMainContainer">
        <div className="detailsRightSide">
          <img src={dogDetail.image} alt="" className="detailsImage" />
          <h3 className="detailsDogName">{dogDetail.name}</h3>
        </div>
        <div className="detailsLeftSide">
          <div>Height: {dogDetail.height} cm</div>
          <div>Weight: {dogDetail.weight} kilos</div>
          <div>Life Span: {dogDetail.lifeSpan} years</div>
          <div>
            {dogDetail.temperaments ? (
              dogDetail.temperaments.map((temp) => <div key={temp}>{temp}</div>)
            ) : (
              <div>No hay temperamentos</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

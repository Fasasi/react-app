
const Ecourses = (props) => {
  return (
      <div className="course-page">
          <div className="course-wrapper">
        
                  <img src={props.image} width="400px" height="300px"/>
              <div className="course-text">
                  <h2>{props.title}</h2>
                  <p>{props.descript}</p>
                  <a href="#">{props.button}</a>
              </div>
          </div>
      </div>
  );
};

export default Ecourses;

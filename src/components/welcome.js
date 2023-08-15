import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect, useState } from "react";

const Wellcome = () => {
  const [showWellcom, setShowWellcom] = useState();
  useEffect(()=>{
    const data=localStorage.getItem("Show_app")
    setShowWellcom(JSON.parse(data)??true)
  },[])
  const onHidenWellcom = () => {
    setShowWellcom(false);
    localStorage.setItem("Show_app",JSON.stringify(false))
  };
  return (
    <Fragment>
      {showWellcom &&
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={onHidenWellcom}
            />
            <div className="p-4">Wellcome</div>
          </div>
        </div>
      }
    </Fragment>
  );
};
export default Wellcome;

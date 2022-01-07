import React from "react";

const WinnerDetail = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-center mt-3 mb-2 font-weight-bold">
              Winner Products
            </div>
            <div className="prd-main-large-img">
              <img
                className="img-thumbnail"
                id="largeImage"
                src="asset/images/mobile-img1.jpg"
                width="100%"
                alt="product"
              />
            </div>
            {/* list of bid winner */}
            <div className="p-3 mt-3 border" style={{ background: "#eee" }}>
              <h4 className="text-danger">List of Winners</h4>
              <div className="small">Winner Name 1 </div>
              <div className="small">Winner Name 2 </div>
              <div className="small">Winner Name 3 </div>
              <div className="small">Winner Name 4 </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="text-center mt-3 mb-2 font-weight-bold">Winner</div>
            <div className="winner-img text-center">
              <img src="asset/images/win-profile-img.png" width="30%" />
            </div>
            <div className="win-table mt-3">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Anil Kumar</td>
                    <td>New Delhi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* product description */}
      </div>
    </div>
  );
};

export default WinnerDetail;

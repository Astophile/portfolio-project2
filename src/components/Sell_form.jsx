import CameraA from "../assets/Camera.jpeg";
import avatar from "../assets/sellformavatar.jpg";

function Sellform() {
  return (
    <div>
      <div className="container formbox bg-white my-5 pb-3 px-0 border-0 ">
        <h6 className=" fw-bold color text-center text-uppercase pt-4 pb-1 text-black">
          post your add
        </h6>
        <form className="bg-white px-3">
          <hr />
          <h6 className="color fw-bold fs-4">INCLUDE SOME DETAILS</h6>
          <div class="mb-3">
            <label for="Title" className="formLabel  fs-6 color">
              Add title
            </label>
            <input
              type="text"
              className="form-control"
              name="formTitle"
              placeholder="Title of your post"
              value=""
            />
          </div>
          <div class="mb-3">
            <label for="Description-form" className="formLabel  color">
              Description
            </label>
            <textarea
              className="form-control"
              name="Description-form"
              placeholder="Description"
              rows="3"
            ></textarea>
          </div>
          <div class="">
            <label for="formBrand" className="form-label  fs-6 mt-2 color">
              Brand
            </label>
            <input
              type="text"
              className="form-control"
              name="formBrand"
              placeholder="Brand"
              value=""
            />
          </div>
          <div class="mb-5">
            <label for="formCondition" className="form-label  fs-6 mt-2 color">
              Condition
            </label>
            <input
              type="text"
              className="form-control"
              name="formCondition"
              placeholder="Condition"
              value=""
            />
          </div>

          <hr />
          <div class="mb-3 p-3">
            <h4 for="formPrice" className="form-label fw-bold fs-5 mt-2 color">
              SET A PRICE
            </h4>
            <label>Prices</label>
            <input
              type="number"
              className="form-control"
              name="formPrice"
              placeholder="Rs |"
              value=""
            />
          </div>
          <hr />
          <div className="container px-5">
            <div class="">
              <h6 className="fw-bold color">Upload photos of your product</h6>
              <div className="image-box border border-2 rounded-3 my-1 mx-auto justify-content-center align-items-center max-width d-flex flex-column">
                <img
                  src={CameraA}
                  alt="Upload Picture"
                  className="cameraicon "
                />
                <input
                  multiple=""
                  type="file"
                  className="fs-14 w-75 mt-2"
                  name="image"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-3 p-3">
            <h4 className="fw-bold fs-5">YOUR AD'S LOCATION</h4>
            <label for="formLocation" className="form-label  fs-6 mt-2 color">
              Location
            </label>

            <input
              type="text"
              className="form-control"
              name="form-location"
              placeholder="Location"
              value=""
            />
          </div>
          <hr />
          <div className="row">
            <h4 className="fw-bold fs-5">REVIEW YOUR DETAILS</h4>
            <div class="col-md-1  mt-4 images">
              <img
                src={avatar}
                alt="Profile Picture"
                className="avatar-icon ms-4 mt-1 rounded-circle w-100"
              />
            </div>
            <div className="col-md-11 ">
              <div className="mb-3 p-3">
                <label
                  for="formName"
                  class="form-label fw-bold fs-6 mt-2 color"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="formName"
                  placeholder="Name"
                  value=""
                />
              </div>

              <div class=" box-number mb-3 p-3">
                <h4 className=" heading-num fw-bold fs-5">
                  Let's verify your account
                </h4>
                <label
                  for="formPhoneNumber"
                  className="form-label fs-6 mt-2 color "
                >
                  Mobile Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="formNum"
                  placeholder="Phone Number"
                  value=""
                />
              </div>
            </div>
          </div>
          <hr />
          <button
            type="submit"
            className="Formbtn p-2 my-2 text-white bg-black"
          >
            Post Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default Sellform;

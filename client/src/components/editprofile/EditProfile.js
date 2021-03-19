import React, { Fragment, useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { setAlert } from "../../actions/alert";
import { editProfile } from "../../actions/user";
import Alert from "../layout/Alert";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { useHistory } from "react-router";

const EditProfile = ({ user,editProfile }) => {

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    password: "",

  });

  const { name, avatar, password, password2 } = formData;
  let history = useHistory();
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const handleReset = () => {
    setFormData({
    name: "",
    avatar: "",
    password: "",
    password2: "",
    });
  };
   const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      //console.log("Success");
      alert("Updated Profile Successfully");
      editProfile(user._id,{ name, avatar:image, password});
      handleReset();
    }
  };

// cloudinary code
    const[ loading,setLoading ] = useState(false)
    const[ image,setImage ] = useState("")

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','geekyimages')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/dofpr6xiq/image/upload",
        {
            method:'POST',
            body:data
        })

        const file = await res.json()
        console.log(file.secure_url)

        setImage(file.secure_url)
        setLoading(false)

    }

  return(
    <Fragment>
    <Navbar/>
      <form class='form-basic' onSubmit={(e) => onSubmit(e)}>
        <div class='form-title-row'>
          <h1>Edit Profile</h1>
        </div>
      <Alert />
        <div class='form-row'>
          <label>
            <span> Name </span>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
            placeholder="Enter full name"/>
          </label>
        </div>

        <div class='form-row'>
          <label>
            <span> Update Image </span>
            <input type ='file'
              name='fileupload'
              onChange={uploadImage}/>
            
          </label>
        </div>

        <div class='form-row'>
          <label>
            <span>Password</span>
            <input type="password"
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            placeholder="Enter new password"/>
             
          </label>
        </div>

        <div class='form-row'>
          <label>
            <span>Confirm New Password</span>
            <input type="password"
              name='password2'
              onChange={(e) => onChange(e)} 
             placeholder="Re-enter new password"/>
          </label>
        </div>
        <div class='form-row'>
          <button type='submit'>Update Profile</button>
        </div>
      </form>
      <Footer />
    </Fragment>
  );
};

EditProfile.propTypes = {
  editProfile: PropTypes.func.isRequired,
}

const mapStateToProps = (state)=>({
  user: state.auth.user,

})


export default connect(mapStateToProps, { setAlert, editProfile })(EditProfile); 

